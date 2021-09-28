import React from 'react';
import { Button as ButtonStory } from './index';
import { colors } from '@utils';

export default {
    title: 'Atoms/Buttons/Button',
    argTypes: {
        kind: {
            control: {
                type: 'select',
                options: ['primary', 'secondary', 'tertiary'],
            },
        },
        color: {
            control: {
                type: 'select',
                options: Object.values(colors),
            },
        },
        disabled: {
            control: {
                type: 'boolean',
            },
        },
        isLoading: {
            control: {
                type: 'boolean',
            },
        },
        width: {
            control: {
                type: 'select',
                options: ['full'],
            },
        },
    },
};

const Template = (args) => <ButtonStory {...args} />;

export const Button = Template.bind({});
Button.args = {
    color: colors.oreo,
    children: 'Button',
    inverse: false,
    kind: 'primary',
    disabled: false,
    isLoading: false,
};
