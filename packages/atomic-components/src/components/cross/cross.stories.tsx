import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Cross } from "./cross";

export default {
  title: "Components/Cross",
  component: Cross,
  argTypes: {},
} as ComponentMeta<typeof Cross>;

const Template: ComponentStory<typeof Cross> = (args) => <Cross {...args} />;

export const CrossComponent = Template.bind({});

CrossComponent.args = {
  extraClass: "h-6 w-6",
};
