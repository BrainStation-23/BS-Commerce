import { ComponentStory, ComponentMeta } from "@storybook/react";

import { InputField } from "./inputField";

export default {
  title: "Components/inputs/Manage-Addresses/InputField",
  component: InputField,
  argTypes: {},
} as ComponentMeta<typeof InputField>;

const Template: ComponentStory<typeof InputField> = (args) => (
  <InputField {...args} />
);

export const InputFieldComponent = Template.bind({});

InputFieldComponent.args = {
  type: "text",
  id: "firstName",
  label: "First Name",
};
