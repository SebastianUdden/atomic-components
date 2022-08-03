import { ComponentStory, ComponentMeta } from "@storybook/react";
import Navbar from "./Navbar";

export default {
  title: "Organisms/Navbar",
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  bgColor: "magenta",
  color: "white",
  links: ["Home", "About", "Contact"],
};

export const SelectedFirst = Template.bind({});
SelectedFirst.args = {
  bgColor: "magenta",
  color: "white",
  selectedLink: "Home",
  links: ["Home", "About", "Contact"],
};

export const SelectedMiddle = Template.bind({});
SelectedMiddle.args = {
  bgColor: "magenta",
  color: "white",
  selectedLink: "About",
  links: ["Home", "About", "Contact"],
};

export const SelectedLast = Template.bind({});
SelectedLast.args = {
  bgColor: "magenta",
  color: "white",
  selectedLink: "Contact",
  links: ["Home", "About", "Contact"],
};

export const SixItems = Template.bind({});
SixItems.args = {
  bgColor: "magenta",
  color: "white",
  links: ["Home", "About", "Events", "Gallery", "Dodgeball", "Contact"],
};
