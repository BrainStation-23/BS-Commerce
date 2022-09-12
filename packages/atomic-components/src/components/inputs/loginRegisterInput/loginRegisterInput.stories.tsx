import { ComponentStory, ComponentMeta } from "@storybook/react";

import { LoginRegisterInput } from "./loginRegisterInput";

export default {
  title: "Components/inputs/LoginRegisterFormInput/LoginRegisterInput",
  component: LoginRegisterInput,
  argTypes: {},
} as ComponentMeta<typeof LoginRegisterInput>;

const Template: ComponentStory<typeof LoginRegisterInput> = (args) => (
  <LoginRegisterInput {...args} />
);

export const LoginRegisterInputComponent = Template.bind({});

LoginRegisterInputComponent.args = {
  type: "text",
  id: "email",
  name: "username",
  placeholder: "Enter email or phone number",
};
