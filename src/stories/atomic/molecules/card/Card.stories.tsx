import { ComponentStory, ComponentMeta } from "@storybook/react";
import Card from "./Card";

export default {
  title: "Molecules/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  onClick: undefined,
  bgColor: "magenta",
  color: "white",
  height: "200px",
  width: "200px",
  center: true,
  children: <>This is a card</>,
};

export const Button = Template.bind({});
Button.args = {
  onClick: () => alert("Success! You've clicked a button."),
  bgColor: "teal",
  color: "white",
  height: "200px",
  width: "200px",
  center: true,
  children: <>Click me I'm a button</>,
};
