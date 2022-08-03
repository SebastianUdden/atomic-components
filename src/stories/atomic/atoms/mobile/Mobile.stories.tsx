import { ComponentStory, ComponentMeta } from "@storybook/react";
import Mobile from "./Mobile";

export default {
  title: "Atoms/Mobile",
  component: Mobile,
} as ComponentMeta<typeof Mobile>;

const Template: ComponentStory<typeof Mobile> = (args) => <Mobile {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: <>Show this on mobile</>,
};
