import { ComponentStory, ComponentMeta } from "@storybook/react";

import { AccountInputField } from "./accountInputField";

export default {
  title: "Components/inputs/AccountDetails/AccountInputField",
  component: AccountInputField,
  argTypes: {},
} as ComponentMeta<typeof AccountInputField>;

const Template: ComponentStory<typeof AccountInputField> = (args) => (
  <AccountInputField {...args} />
);

export const AccountInputFieldComponent = Template.bind({});

AccountInputFieldComponent.args = {
  type: "text",
  id: "firstName",
  label: "First Name",
  verified: false,
};
