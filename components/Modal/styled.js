import styled, { css, keyframes } from 'styled-components';
import { colors, media, typography, zIndexMap } from '@utils';

const ModalFadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

export const Container = styled.div`
    background-color: ${colors.coconut};
    cursor: pointer;
    display: flex;
    height: 100%;
    justify-content: center;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: ${zIndexMap.modal};

    ${media.medium`
        align-items: center;
        background-color: rgba(0,0,0, 0.3);
    `}

    ${(props) =>
        props.shouldModalAnimate &&
        css`
            animation: ${ModalFadeIn} 0.3s ease-in-out;
        `}
`;

export const FormContainer = styled.div`
    background-color: ${colors.coconut};
    cursor: default;
    position: relative;
    width: 100%;

    ${media.medium`
        border-radius: 4px;
        max-width: ${(props) => (props.maxWidth ? props.maxWidth : '440px')};
    `}

    ${(props) =>
        props.dark &&
        css`
            background-color: ${colors.oreo};
            color: ${colors.coconut};
        `}
`;

export const TopContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    height: 64px;
    position: relative;
    padding: 0 24px;

    ${(props) =>
        props.border &&
        css`
            border-bottom: 1px solid ${colors.concrete};
        `}
`;

export const ContentContainer = styled.div`
    max-height: calc(100% - 64px);
    overflow-y: auto;
    padding: 16px;

    ${(props) =>
        props.noPaddingBottom &&
        css`
            padding-bottom: 0;
        `}

    ${(props) =>
        props.noPadding &&
        css`
            padding: 0;
        `}

    ${(props) =>
        props.noOverflow &&
        css`
            overflow: visible !important;
        `}
`;

export const Title = styled(typography.H3a)`
    color: ${colors.oroe};
    margin: 0;
`;

export const CloseButton = styled.div`
    appearance: none;
    background-color: transparent;
    cursor: pointer;
    position: absolute;
    right: 23px;
    top: 50%;
    transform: translateY(-50%);

    &:hover,
    &:focus {
        outline: none;
    }
`;
