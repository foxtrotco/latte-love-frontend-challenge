import React from 'react';
import { Field as FieldStory } from '../components/FormElements/index';

export default {
    title: 'Atoms/Form/Field',
    disabled: {
        control: {
            type: 'boolean',
        },
    },
};

const Template = (args) => <FieldStory {...args} />;

export const Field = Template.bind({});
Field.args = {
    disabled: false,
};
