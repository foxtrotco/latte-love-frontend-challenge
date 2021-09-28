import React from 'react';
import { Select as SelectStory } from '../components/FormElements/index';

export default {
    title: 'Atoms/Form/Select',
    disabled: {
        control: {
            type: 'boolean',
        },
    },
};

const Template = (args) => (
    <SelectStory {...args}>
        <option value="ted">Ted</option>
        <option value="rebecca">Rebecca</option>
        <option value="roy">Roy</option>
    </SelectStory>
);

export const Select = Template.bind({});
Select.args = {
    disabled: false,
};
