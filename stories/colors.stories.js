import React from 'react';
import { colors } from '../utils/index';
import styled from 'styled-components';

export default {
    title: 'Atoms/Colors',
};

const ColorHolder = ({ color }) => {
    const Container = styled.div`
        background-color: ${color};
        height: 800px;
        width: 800px;
    `;
    return <Container />;
};

const Template = (args) => <ColorHolder {...args} />;

export const oreo = Template.bind({});
oreo.args = {
    color: colors.oreo,
};
export const coconut = Template.bind({});
coconut.args = {
    color: colors.coconut,
};
export const storm = Template.bind({});
storm.args = {
    color: colors.storm,
};
export const concrete = Template.bind({});
concrete.args = {
    color: colors.concrete,
};
export const overcast = Template.bind({});
overcast.args = {
    color: colors.overcast,
};
export const spirulina = Template.bind({});
spirulina.args = {
    color: colors.spirulina,
};
export const merlot = Template.bind({});
merlot.args = {
    color: colors.merlot,
};
export const matcha = Template.bind({});
matcha.args = {
    color: colors.matcha,
};
export const banana = Template.bind({});
banana.args = {
    color: colors.banana,
};
export const hibiscus = Template.bind({});
hibiscus.args = {
    color: colors.hibiscus,
};
export const brambleberry = Template.bind({});
brambleberry.args = {
    color: colors.brambleberry,
};
export const mirrorball = Template.bind({});
mirrorball.args = {
    color: colors.mirrorball,
};
export const lavender = Template.bind({});
lavender.args = {
    color: colors.lavender,
};
export const willow = Template.bind({});
willow.args = {
    color: colors.willow,
};
export const august = Template.bind({});
august.args = {
    color: colors.august,
};
export const blush = Template.bind({});
blush.args = {
    color: colors.blush,
};
export const bubblegum = Template.bind({});
bubblegum.args = {
    color: colors.bubblegum,
};
export const cafe = Template.bind({});
cafe.args = {
    color: colors.cafe,
};
