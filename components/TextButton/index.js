import styled from 'styled-components';
import PropTypes from 'prop-types';
import { colors } from '@utils';

const fontSizeCalculator = ({ kind }) => {
    switch (kind) {
        case 'primary':
            return '0.875em';
        case 'secondary':
            return '0.75em';
        default:
            return '0.875em';
    }
};

const TextButton = styled.button`
    display: flex;
    flex-direction: ${(props) => (props.reverseIcon ? 'row-reverse' : 'row')};
    appearance: none;
    box-sizing: border-box;
    background-color: transparent;
    border: none;
    color: ${(props) => props.color};
    cursor: pointer;
    font-family: 'courier-sans';
    font-size: ${(props) => fontSizeCalculator({ kind: props.kind })};
    padding: 0;
    position: relative;
    text-transform: uppercase;
    transition: all 0.3s cubic-bezier(0.32, 0.94, 0.6, 1);
    &:before {
        content: ${(props) => (props.iconSrc ? `url(${props.iconSrc})` : '')};
        padding: ${(props) => (props.reverseIcon ? `0 0 0 10px` : '0 10px 0 0')};
    }
    &:after {
        content: '';
        background-color: ${(props) => props.color};
        bottom: 0;
        height: 1px;
        left: 0;
        position: absolute;
        width: 100%;
        transform: ${(props) => (props.reverse ? `scaleX(1)` : `scaleX(0)`)};
        transition: transform 0.3s cubic-bezier(0.32, 0.94, 0.6, 1);
    }

    &:hover {
        &:after {
            content: '';
            transform: ${(props) => (props.reverse ? `scaleX(0)` : `scaleX(1)`)};
        }
    }
`;

const TextButtonLink = styled(TextButton).attrs({
    as: 'a',
})``;

TextButton.propTypes = {
    color: PropTypes.oneOf(Object.values(colors)),
    inverse: PropTypes.bool,
    kind: PropTypes.oneOf(['primary', 'secondary', 'tertiary']).isRequired,
    iconSrc: PropTypes.string,
    reverseIcon: PropTypes.bool,
};

TextButtonLink.propTypes = {
    color: PropTypes.oneOf(Object.values(colors)),
    inverse: PropTypes.bool,
    reverse: PropTypes.bool,
    kind: PropTypes.oneOf(['primary', 'secondary', 'tertiary']).isRequired,
    iconSrc: PropTypes.string,
    reverseIcon: PropTypes.bool,
};

export { TextButton, TextButtonLink };
