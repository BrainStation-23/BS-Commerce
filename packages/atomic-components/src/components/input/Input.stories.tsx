import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Input } from "./Input";
import withFormik from "@bbbtech/storybook-formik";

export default {
	title: "Components/Input",
	component: Input,
	decorators: [withFormik],
	argTypes: {},
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const regularInput = Template.bind({});
regularInput.args = {
	icon: <></>,
	id: "username",
	type: "text",
	placeholder: "Username",
	required: true,
};

export const dropdownInput = Template.bind({});
dropdownInput.args = {
	icon: <></>,
	id: "dropdownInput",
	type: "text",
	placeholder: "Please Select One",
	required: true,
	as: "select",
	options: ["a", "b", "c"],
};
