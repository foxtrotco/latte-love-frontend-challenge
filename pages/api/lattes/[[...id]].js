const Airtable = require('airtable');
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base('appx0dUn5zr9A1ZYs');

export default function handler(req, res) {
    const { id } = req.query;

    if (req.method === 'GET') {
        if (id) {
            base('Lattes').find(id, function (err, record) {
                if (err) {
                    res.status(404).json({ error: 'id not found' });
                }
                const response = {
                    ...record.fields,
                    id: record.id[0],
                };
                res.status(200).json(response);
            });
        } else {
            base('Lattes')
                .select({
                    view: 'Grid view',
                })
                .eachPage(
                    function page(records) {
                        const response = records.map((record) => ({
                            ...record.fields,
                            id: record.id,
                        }));

                        return res.status(200).json(response);
                    },
                    function done(err) {
                        if (err) {
                            res.status(500).json({ error: 'server error' });
                        }
                    }
                );
        }
    } else if (req.method === 'POST') {
        if (!req.body.name) {
            res.status(404).json({ error: 'name field required' });
        }

        if (!req.body.modifiers) {
            res.status(404).json({ error: 'modifiers field required' });
        }

        base('Lattes').create(
            [
                {
                    fields: {
                        ...req.body,
                        rating: 0,
                        image: 'latte.jpeg',
                    },
                },
            ],
            function (err, records) {
                if (err) {
                    res.status(500).json({ error: 'server error' });
                    return;
                }

                const response = {
                    id: records[0].id,
                    ...records[0].fields,
                };

                res.status(200).json(response);
            }
        );
    } else if (req.method === 'PATCH') {
        if (!id) res.status(404).json({ error: 'id not found' });

        if (req.body.rating > 5 || req.body.rating < 1) res.status(400).json({ error: 'rating not between 1 and 5' });

        base('Lattes').update(
            [
                {
                    id: id[0],
                    fields: {
                        ...req.body,
                    },
                },
            ],
            function (err, records) {
                if (err) {
                    res.status(500).json({ error: 'server error' });
                    return;
                }

                const [updatedRecord] = records.filter((record) => record.id === id[0]);

                if (!updatedRecord) {
                    res.status(500).json({ error: 'server error' });
                }

                const formattedUpdatedRecord = {
                    id: updatedRecord.id,
                    ...updatedRecord.fields,
                };

                res.status(200).json(formattedUpdatedRecord);
            }
        );
    } else {
        res.status(400).json({ error: `unsupported method type: ${req.method}` });
    }
}
