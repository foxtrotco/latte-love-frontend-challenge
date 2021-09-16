import React from 'react';
import { useQuery } from 'react-query';

import { getLattes } from '@api';
import { colors } from '@utils';
import { LatteCard, InputRow, InputGroup, Label, Select, Field, Button } from '@components';

import { ContentContainer, ActionContainer, ListContainer } from './styled';

const LatteList = (props) => {
    const { initialData } = props;

    const { data, error } = useQuery(
        'lattes',
        async () => {
            const { data } = await getLattes();
            return data;
        },
        { initialData }
    );

    if (!data) {
        return 'No data';
    }

    return (
        <ContentContainer>
            <ActionContainer>
                <div>
                    <InputRow>
                        <InputGroup>
                            <Label htmlFor="sort">Sort</Label>
                            <Select name="sort">
                                <option value="default">Default</option>
                                <option value="rating-high-low">Rating - High to Low</option>
                                <option value="rating-low-high">Rating - Low to High</option>
                                <option value="recently added">Recently Added</option>
                            </Select>
                        </InputGroup>
                        <InputGroup>
                            <Label htmlFor="search">Search</Label>
                            <Field name="search" />
                        </InputGroup>
                    </InputRow>
                </div>
                <div>
                    <Button type="button" color={colors.oreo} kind="primary">
                        Create Latté
                    </Button>
                </div>
            </ActionContainer>
            <ListContainer>
                {data.map((latte, index) => (
                    <LatteCard latte={latte} key={index} />
                ))}
            </ListContainer>
        </ContentContainer>
    );
};

export default LatteList;
