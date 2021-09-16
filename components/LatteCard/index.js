import React from 'react';

import { Rating } from '@components';

import { LatteContainer, Image, Name, InformationContainer } from './styled';

const LatteCard = (props) => {
    const { latte } = props;

    return (
        <LatteContainer>
            <Image src={`/images/${latte.image}`} alt={latte.name} />
            <InformationContainer>
                <Name>{latte.name}</Name>
                <Rating />
            </InformationContainer>
        </LatteContainer>
    );
};

export default LatteCard;
