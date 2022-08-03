import { ComponentStory, ComponentMeta } from "@storybook/react";
import Desktop from "./Desktop";

export default {
  title: "Atoms/Desktop",
  component: Desktop,
} as ComponentMeta<typeof Desktop>;

const Template: ComponentStory<typeof Desktop> = (args) => (
  <Desktop {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  children: <>Show this on desktop</>,
};
