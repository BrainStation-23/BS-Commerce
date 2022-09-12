import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CheckoutInputField } from "./checkoutInputField";

export default {
  title: "Components/inputs/CheckoutFormInput/CheckoutInputField",
  component: CheckoutInputField,
  argTypes: {},
} as ComponentMeta<typeof CheckoutInputField>;

const Template: ComponentStory<typeof CheckoutInputField> = (args) => (
  <CheckoutInputField {...args} />
);

export const CheckoutInputFieldComponent = Template.bind({});

CheckoutInputFieldComponent.args = {
  type: "text",
  id: "firstName",
  label: "First Name",
  placeholder: " ",
};
