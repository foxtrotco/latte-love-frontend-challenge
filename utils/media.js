import { css } from 'styled-components';

const mediaQuery =
    (...queryFeatures) =>
    (...rules) =>
        css`
            @media ${css(...queryFeatures)} {
                ${css(...rules)}
            }
        `;

export const breakpoint = {
    small: 600,
    medium: 768,
    large: 1025,
    xlarge: 1920,
};

const media = {
    small: mediaQuery`(min-width: ${breakpoint.small}px)`,
    medium: mediaQuery`(min-width: ${breakpoint.medium}px)`,
    large: mediaQuery`(min-width: ${breakpoint.large}px)`,
    xlarge: mediaQuery`(min-width: ${breakpoint.xlarge}px)`,
};

export default media;
