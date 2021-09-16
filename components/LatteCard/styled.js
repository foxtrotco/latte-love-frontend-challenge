import styled from 'styled-components';
import { colors, media, typography } from '@utils';

export const LatteContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    padding-bottom: 3rem;

    ${media.medium`
        flex-basis: calc(33.33% - 16px);
    `}
`;

export const Image = styled.img`
    display: block;
    width: 100%;
`;

export const InformationContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding-top: 1rem;
`;

export const Name = styled(typography.H4a)`
    color: ${colors.oreo};
    margin: 0;
`;
