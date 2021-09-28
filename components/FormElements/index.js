import styled, { css } from 'styled-components';
import { colors, media } from '@utils';

export const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
    position: relative;
    width: 100%;
`;

export const InputRow = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    & > div {
        margin-bottom: 16px;
    }

    ${media.medium`
        flex-direction: row;
        justify-content: space-between;
        
        & > div {
            flex-basis: ${(props) => (props.fullWidth ? 'auto' : 'calc(50% - 8px);')};
        }
    `}
`;

export const Label = styled.label`
    color: ${colors.oreo};
    font-family: 'gt-haptik-regular';
    font-size: 12px;
    font-weight: 400;
    display: block;
    line-height: 16px;
    margin-bottom: 4px;

    ${(props) =>
        props.body &&
        css`
            font-size: 16px;
            line-height: 24px;
        `}
`;

export const Field = styled.input`
    appearance: none;
    border-color: ${colors.concrete};
    border-radius: 4px;
    border-style: solid;
    border-width: 1px 1px 1px 1px;
    box-sizing: content-box;
    display: block;
    height: 48px;
    padding: 0 8px;
    transition: border-color 0.3s ease-in-out;
    width: calc(100% - 16px);

    &:hover,
    &:focus {
        border-color: ${colors.oreo};
    }

    &:disabled {
        background-color: ${colors.concrete};
        color: ${colors.oreo};
        pointer-events: none;
    }
`;

export const Textarea = styled.textarea`
    appearance: none;
    border-color: ${colors.concrete};
    border-radius: 4px;
    border-style: solid;
    border-width: 1px 1px 1px 1px;
    height: 144px;
    padding: 8px;
    transition: border-color 0.3s ease-in-out;

    &:hover,
    &:focus {
        border-color: ${colors.oreo};
    }
`;

export const Select = styled.select`
    appearance: none;
    background-color: ${colors.coconut};
    background-image: url('/images/modal-drop-down-icon.svg');
    background-position: right 16px center;
    background-repeat: no-repeat;
    border: 1px solid ${colors.concrete};
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    height: 50px;
    padding: 0 8px;
    transition: 0.3s ease-in-out;

    &:hover,
    &:focus {
        border-color: ${colors.oreo};
        font-size: 16px;
        outline: none;
    }

    ${media.medium`
        font-size: 14px;

        &:hover, &:focus {
            font-size: 14px;
        }
    `}
`;

export const Checkbox = styled.input`
    @supports (-webkit-appearance: none) or (-moz-appearance: none) {
        -webkit-appearance: none;
        -moz-appearance: none;
        height: 21px;
        outline: none;
        display: inline-block;
        vertical-align: top;
        position: relative;
        margin: 0;
        cursor: pointer;
        border: 1px solid ${colors.concrete};
        border-radius: 4px;
        background: ${colors.coconut};
        transition: background 0.3s, border-color 0.3s, box-shadow 0.2s;
        width: 21px;

        &:after {
            content: '';
            display: block;
            left: 0;
            top: 0;
            position: absolute;
            transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
            width: 4px;
            height: 7px;
        }

        &:hover {
            background-color: ${colors.concrete};
        }

        &:checked {
            background-color: ${colors.oreo};
            border-color: ${colors.oreo};
            &:after {
                content: '';
                border: 2px solid ${colors.coconut};
                border-top: 0;
                border-left: 0;
                left: 7px;
                top: 4px;
                transform: rotate(45deg);
            }
        }
    }
`;

export const Radio = styled.input`
    @supports (-webkit-appearance: none) or (-moz-appearance: none) {
        -webkit-appearance: none;
        -moz-appearance: none;
        height: 21px;
        outline: none;
        display: inline-block;
        vertical-align: top;
        position: relative;
        margin: 0;
        cursor: pointer;
        border: 1px solid ${colors.border};
        border-radius: 50%;
        background: ${colors.white};
        transition: background 0.3s, border-color 0.3s, box-shadow 0.2s;
        width: 21px;

        &:after {
            content: '';
            display: block;
            left: 5.5px;
            top: 5.7px;
            position: absolute;
            transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out, background-color 0.3s ease-in-out;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background-color: transparent;
        }

        &:hover {
            background-color: ${colors.border};
        }

        &:checked {
            background-color: ${colors.blue};
            border-color: ${colors.blue};

            &:after {
                content: '';
                background-color: ${colors.white};
                transform: rotate(45deg);
            }
        }
    }
`;
