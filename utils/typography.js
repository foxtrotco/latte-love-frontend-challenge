import styled from 'styled-components';
import { media } from '@utils';

const GTHaptik = 'gt-haptik-regular';
const GTHaptikRotalics = 'gt-haptik-rotalic';
const CourierSans = 'courier-sans';

const H1a = styled.h1`
    font-family: 'gt-haptik-regular';
    font-size: 2.5em;
    font-weight: 400;
    line-height: 3rem;

    em {
        font-family: ${GTHaptikRotalics};
        font-style: normal;
    }
`;

const H1b = styled(H1a)`
    font-family: ${GTHaptikRotalics};
`;

const H2a = styled.h2`
    font-family: ${GTHaptik};
    font-size: 2em;
    font-weight: 400;
    line-height: 2.375rem;

    em {
        font-family: ${GTHaptikRotalics};
        font-style: normal;
    }
`;

const H2b = styled(H2a)`
    font-family: ${GTHaptikRotalics};
`;

const H3a = styled.h3`
    font-family: ${GTHaptik};
    font-size: 1.5em;
    font-weight: 400;
    line-height: 1.8125rem;

    em {
        font-family: ${GTHaptikRotalics};
        font-style: normal;
    }
`;

const H3b = styled(H3a)`
    font-family: ${GTHaptikRotalics};
`;

const H4a = styled.h4`
    font-family: ${GTHaptik};
    font-size: 1.125em;
    font-weight: 400;
    line-height: 1.375rem;

    em {
        font-family: ${GTHaptikRotalics};
        font-style: normal;
    }
`;

const H4b = styled(H4a)`
    font-family: ${GTHaptikRotalics};
`;

const H5a = styled.h5`
    font-family: ${GTHaptik};
    font-size: 1em;
    font-weight: 400;
    line-height: 1.1875rem;

    em {
        font-family: ${GTHaptikRotalics};
        font-style: normal;
    }
`;

const H5b = styled(H5a)`
    font-family: ${GTHaptikRotalics};
`;

const H6a = styled.h5`
    font-family: ${GTHaptik};
    font-size: 0.875em;
    font-weight: 400;
    line-height: 1.0625rem;

    em {
        font-family: ${GTHaptikRotalics};
        font-style: normal;
    }
`;

const H6b = styled(H6a)`
    font-family: ${GTHaptikRotalics};
`;

const P1a = styled.p`
    font-family: ${CourierSans};
    font-size: 1em;
    font-weight: 400;
    line-height: 1.5625rem;
`;

const P1b = styled(P1a)`
    font-weight: bold;
`;

const P2a = styled.p`
    font-family: ${CourierSans};
    font-size: 0.75em;
    font-weight: 400;
    line-height: 1.375rem;
`;

const P2b = styled(P2a)`
    font-weight: bold;
`;

const P3a = styled.p`
    font-family: ${CourierSans};
    font-size: 0.625em;
    font-weight: 400;
    line-height: 1.125rem;
`;

const P3b = styled(P3a)`
    font-weight: bold;
`;

const CAPS1 = styled.p`
    font-family: ${CourierSans};
    font-size: 0.875em;
    line-height: 1.125rem;
    text-transform: uppercase;
`;

const CAPS2 = styled.p`
    font-family: ${CourierSans};
    font-size: 0.75em;
    line-height: 1rem;
    text-transform: uppercase;
`;

const CAPS3 = styled.p`
    font-family: ${CourierSans};
    font-size: 0.625em;
    line-height: 0.8125rem;
    text-transform: uppercase;
`;

const CAPS4 = styled.p`
    font-family: ${CourierSans};
    font-size: 0.5em;
    line-height: 0.625rem;
    text-transform: uppercase;
`;

const R1a = styled(H1a)`
    ${media.medium`
        font-size: 6em;
        line-height: 6rem;
    `}
`;

const R1b = styled(R1a)`
    font-family: ${GTHaptikRotalics};
`;

const R2a = styled(H2a)`
    ${media.medium`
        font-size: 4em;
        line-height: 4rem;
    `}
`;

const R2b = styled(R2a)`
    font-family: ${GTHaptikRotalics};
`;

const R3a = styled(H3a)`
    ${media.medium`
        font-size: 3em;
        line-height: 3rem;
    `}
`;

const R3b = styled(R3a)`
    font-family: ${GTHaptikRotalics};
`;

const typography = {
    H1a,
    H1b,
    H2a,
    H2b,
    H3a,
    H3b,
    H4a,
    H4b,
    H5a,
    H5b,
    H6a,
    H6b,
    P1a,
    P1b,
    P2a,
    P2b,
    P3a,
    P3b,
    CAPS1,
    CAPS2,
    CAPS3,
    CAPS4,
    R1a,
    R1b,
    R2a,
    R2b,
    R3a,
    R3b,
};

export default typography;
