import React from 'react';
import { typography } from '../utils/index';

export default {
    title: 'Atoms/Typography',
    argTypes: {
        style: {
            control: {
                type: 'select',
                options: Object.keys(typography.typography),
            },
        },
    },
};

const TypographyHolder = ({ style, text, ...props }) => {
    const FinalTag = typography[style];
    return <FinalTag {...props}>{text}</FinalTag>;
};

const Template = (args) => <TypographyHolder {...args} />;

export const TangoStyles = Template.bind({});
TangoStyles.args = {
    style: 'H1a',
    text: 'The quick brown fox jumps over the lazy dog',
};
