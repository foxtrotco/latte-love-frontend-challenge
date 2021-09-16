import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { colors } from '@utils';
import Lottie from 'react-lottie';
import loading from './loadingAnimation.json';

const fontSizeCalculator = ({ kind }) => {
    switch (kind) {
        case 'primary':
            return '0.75em';
        case 'secondary':
            return '0.75em';
        case 'tertiary':
            return '0.625em';
        default:
            return '0.5em';
    }
};

const paddingCalculator = ({ kind }) => {
    switch (kind) {
        case 'primary':
            return '0.75rem 1.5rem';
        case 'secondary':
            return '0.5rem 1rem';
        case 'tertiary':
            return '0.25rem 0.75rem';
        default:
            return '0.75rem 1.5rem';
    }
};

const backgroundColorCalculator = ({ color, inverse, disabled }) => {
    if (disabled) {
        return colors.concrete;
    }
    if (inverse) {
        return 'transparent';
    }
    return color;
};

const textColorCalculator = ({ color, inverse, disabled }) => {
    if (disabled) {
        return colors.storm;
    }
    if (color === colors.overcast) {
        return colors.oreo;
    }

    if (inverse) {
        return color;
    }

    return colors.coconut;
};

const hoverBackgroundColorCalculator = ({ color, inverse, disabled }) => {
    if (disabled) {
        return colors.concrete;
    }
    if (color === colors.blue) {
        return colors.white;
    }
    if (!inverse) {
        return 'transparent';
    }

    return color;
};

const hoverTextColorCalculator = ({ color, inverse, disabled }) => {
    if (disabled) {
        return colors.storm;
    }
    if (color === colors.overcast) {
        return colors.oreo;
    }

    if (!inverse) {
        return color;
    }

    return colors.coconut;
};

const ButtonComponent = styled.button`
    ${(props) =>
        props.width === 'full' &&
        css`
            width: 100%;
        `}
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    appearance: none;
    box-sizing: border-box;
    background-color: ${(props) =>
        backgroundColorCalculator({ color: props.color, inverse: props.inverse, disabled: props.disabled })};
    border-color: ${(props) => (props.disabled ? 'transparent' : props.color)};
    border-radius: 100px;
    border-style: solid;
    border-width: 1px;
    color: ${(props) => textColorCalculator({ color: props.color, inverse: props.inverse, disabled: props.disabled })};
    font-family: 'courier-sans';
    font-size: ${(props) => fontSizeCalculator({ kind: props.kind })};
    padding: ${(props) => paddingCalculator({ kind: props.kind })};
    text-transform: uppercase;
    transition: all 0.3s cubic-bezier(0.32, 0.94, 0.6, 1);
    position: relative;

    &:hover {
        background-color: ${(props) =>
            hoverBackgroundColorCalculator({ color: props.color, inverse: props.inverse, disabled: props.disabled })};
        color: ${(props) =>
            hoverTextColorCalculator({ color: props.color, inverse: props.inverse, disabled: props.disabled })};
    }
`;
const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading,
};
const Text = styled.span`
    opacity: ${(props) => (props.isLoading ? 0 : 1)};
`;
const AnimationContainer = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
`;
const Button = (props) => {
    const ref = React.useRef(null);
    const [width, setWidth] = React.useState(0);
    React.useEffect(() => {
        if (ref.current && ref.current.getBoundingClientRect().width) {
            setWidth(ref.current.getBoundingClientRect().width);
        }
    }, [props.children]);
    return (
        <ButtonComponent {...props}>
            <Text isLoading={props.isLoading} ref={ref}>
                {props.children}
            </Text>
            {props.isLoading && (
                <AnimationContainer>
                    <Lottie width={width} options={defaultOptions} />
                </AnimationContainer>
            )}
        </ButtonComponent>
    );
};
const ButtonLink = styled(ButtonComponent).attrs({
    as: 'a',
})``;

Button.propTypes = {
    color: PropTypes.oneOf(Object.values(colors)),
    inverse: PropTypes.bool,
    kind: PropTypes.oneOf(['primary', 'secondary', 'tertiary']).isRequired,
    isLoading: PropTypes.bool,
};

ButtonLink.propTypes = {
    color: PropTypes.oneOf(Object.values(colors)),
    inverse: PropTypes.bool,
    kind: PropTypes.oneOf(['primary', 'secondary', 'tertiary']).isRequired,
};

export { Button, ButtonLink };
