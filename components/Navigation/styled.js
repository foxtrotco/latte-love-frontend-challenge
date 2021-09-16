import styled from 'styled-components';
import { colors, typography, media } from '@utils';

export const NavigationContainer = styled.div`
    background-color: ${colors.coconut};
    border-bottom: 1px solid ${colors.concrete};
    flex-direction: column;
    display: flex;
    width: 100%;
`;

export const ActionBar = styled.div`
    align-items: center;
    background-color: ${colors.oreo};
    color: ${colors.coconut};
    display: flex;
    justify-content: space-between;
    padding: 1rem;
`;

export const Logo = styled.img`
    display: block;
    max-width: 67px;
    width: 100%;
`;

export const AccountContainer = styled.div``;

export const NavigationBar = styled.div`
    align-items: center;
    display: flex;
    padding: 1rem;
    justify-content: center;
`;

export const Heading = styled(typography.R3a)`
    color: ${colors.oreo};
    margin: 0;
`;
