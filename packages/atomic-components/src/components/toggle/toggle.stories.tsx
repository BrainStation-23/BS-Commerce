import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Toggle } from "./toggle";

export default {
  title: "Components/Toggle",
  component: Toggle,
  argTypes: {},
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = (args) => <Toggle {...args} />;

export const ToggleComponent = Template.bind({});

ToggleComponent.args = {
  labelClass: "absolute right-0 inline-flex cursor-pointer items-center",
  labelText: "toggle",
};
