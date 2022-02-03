import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { CounterButton, CounterButtonProps } from '../components/CounterButton';

const Story = {
   title: 'Components/CounterButton',
   component: CounterButton,
   argTypes: {},
} as ComponentMeta<typeof CounterButton>;

const Template: ComponentStory<typeof CounterButton> = (args: CounterButtonProps) => (
   <CounterButton {...args} />
);

export const WithoutInitialValue = Template.bind({});
WithoutInitialValue.args = {};

export const WithInitialValue = Template.bind({});
WithInitialValue.args = {
   initialValue: 10,
};

export default Story;
