import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SaleOrDiscountComponent } from "./sale-or-discount-component";

export default {
  title: "Components/SaleOrDiscountComponent",
  component: SaleOrDiscountComponent,
  argTypes: {},
} as ComponentMeta<typeof SaleOrDiscountComponent>;

const Template: ComponentStory<typeof SaleOrDiscountComponent> = (args) => (
  <SaleOrDiscountComponent {...args} />
);

export const Sale = Template.bind({});
export const Discount = Template.bind({});

Sale.args = {
  extraClass: "top-3 left-3 px-3 py-1",
  text: "sale",
};

Discount.args = {
  extraClass: "top-3 right-3 px-3 py-1 font-semibold",
  text: "-$10",
};
