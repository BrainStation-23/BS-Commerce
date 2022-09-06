import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Image } from "./image";

export default {
  title: "Components/image",
  component: Image,
  argTypes: {},
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const ImageComponent = Template.bind({});

ImageComponent.args = {
  src: "https://cdn.shopify.com/s/files/1/0359/6350/2651/products/productbig4_d99ef24e-b01e-466f-8835-b631234ed01c_1024x1024.jpg?v=1587984476",
  height: 100,
  width: 100,
  alt: "Vegies",
};
