import React from 'react';
import { InputGroup as InputGroupStory, Field, Label } from '@components';

export default {
    title: 'Atoms/Form/Input Group',
    disabled: {
        control: {
            type: 'boolean',
        },
    },
};

const Template = (args) => (
    <InputGroupStory>
        <Label htmlFor={args.label}>{args.label}</Label>
        <Field type="text" name={args.label} disabled={args.disabled} {...args} />
    </InputGroupStory>
);

export const InputGroup = Template.bind({});
InputGroup.args = {
    disabled: false,
    label: 'Name',
    placeholder: 'Ted Lasso',
};
