import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { NewTabLink, NewTabLinkProps } from '../components/NewTabLink';

const Story = {
   title: 'Components/NewTabLink',
   component: NewTabLink,
   argTypes: {},
} as ComponentMeta<typeof NewTabLink>;

const Template: ComponentStory<typeof NewTabLink> = (args: NewTabLinkProps) => (
   <NewTabLink {...args} />
);

export const LinkToGoogle = Template.bind({});
LinkToGoogle.args = {
   children: 'Go to Google',
   href: 'https://www.google.fr',
};

export const LinkToStarter = Template.bind({});
LinkToStarter.args = {
   children: 'Go to Starter',
   href: 'https://github.com/matthieu-locussol/starter-turborepo-react-express-mui',
};

export default Story;
