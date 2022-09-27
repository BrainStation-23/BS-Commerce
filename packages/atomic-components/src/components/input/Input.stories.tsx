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
	icon: (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth="1.5"
			stroke="currentColor"
			className="h-4 w-4"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
			/>
		</svg>
	),
	id: "username",
	type: "text",
	placeholder: "Username",
	required: true,
};

export const dropdownInput = Template.bind({});
dropdownInput.args = {
	icon: (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth="1.5"
			stroke="currentColor"
			className="h-4 w-4"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
			/>
		</svg>
	),
	id: "dropdownInput",
	type: "text",
	placeholder: "Please Select One",
	required: true,
	as: "select",
	options: ["a", "b", "c"],
};
