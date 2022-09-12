import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Icons } from "./icons";

export default {
  title: "Components/Icons",
  component: Icons,
  argTypes: {},
} as ComponentMeta<typeof Icons>;

const Template: ComponentStory<typeof Icons> = (args) => <Icons {...args} />;

export const IconsComponent = Template.bind({});

IconsComponent.args = {
  classes: "h-6 w-6",
  iconName: "cross",
};

IconsComponent.args = {
  iconName: "chevron-left",
  classes: "h-9 w-9 cursor-pointer",
  fill: "#40a944",
};

IconsComponent.args = {
  iconName: "chevron-right",
  classes: "h-3 w-3",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.5",
};

IconsComponent.args = {
  iconName: "heart",
  classes: "h-10 w-10",
  fill: "green",
  stroke: "green",
  strokeWidth: "1",
};
