import { ComponentStory, ComponentMeta } from "@storybook/react";
import Logo from "./Logo";

export default {
  title: "Atoms/Logo",
  component: Logo,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  src: "Logo",
};
