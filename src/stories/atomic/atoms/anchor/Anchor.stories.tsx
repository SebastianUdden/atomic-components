import { ComponentStory, ComponentMeta } from "@storybook/react";
import Anchor from "./Anchor";

export default {
  title: "Atoms/Anchor",
  component: Anchor,
  argTypes: {},
} as ComponentMeta<typeof Anchor>;

const Template: ComponentStory<typeof Anchor> = (args) => <Anchor {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  href: "#anchor-test",
  children: "Anchor",
};
