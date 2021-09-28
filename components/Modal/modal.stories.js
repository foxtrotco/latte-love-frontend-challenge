import React from 'react';
import { Modal as ModalStory } from '@components';

export default {
    title: 'Atoms/Modal',
};

const Template = (args) => <ModalStory {...args}>hi</ModalStory>;

export const Modal = Template.bind({});
Modal.args = {
    title: 'Title',
    hideHeader: false,
};
