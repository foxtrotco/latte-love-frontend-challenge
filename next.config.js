const ENV_VARS = {
    AIRTABLE_API_KEY: process.env.AIRTABLE_API_KEY,
};

module.exports = {
    reactStrictMode: true,
    env: {
        ...ENV_VARS,
    },
};
