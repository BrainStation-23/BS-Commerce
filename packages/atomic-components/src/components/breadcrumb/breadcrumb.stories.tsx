import { ComponentStory, ComponentMeta } from "@storybook/react";

import { BreadCrumb } from "./breadcrumb";

export default {
  title: "Components/BreadCrumb",
  component: BreadCrumb,
  argTypes: {},
} as ComponentMeta<typeof BreadCrumb>;

const Template: ComponentStory<typeof BreadCrumb> = (args) => (
  <BreadCrumb {...args} />
);

export const BreadCrumbComponent = Template.bind({});

BreadCrumbComponent.args = {
  linkArray: ["http://localhost:3002/", "http://localhost:3002/cart"],
  pathArray: ["Home", "Cart"],
  title: "Cart",
};
