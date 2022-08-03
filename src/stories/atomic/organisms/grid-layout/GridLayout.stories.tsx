import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from "styled-components";
import GridLayout from "./GridLayout";

const Child = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  padding: 20px;
  font-size: 20px;
  line-height: 20px;
  color: #ffe8c3;
  background-color: #222;
  border: 10px solid #444;
  width: 100%;
  height: 100%;
`;

export default {
  title: "Organisms/GridLayout",
  component: GridLayout,
} as ComponentMeta<typeof GridLayout>;

const Template: ComponentStory<typeof GridLayout> = (args) => (
  <GridLayout {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  header: <Child>Header</Child>,
  sidebar: <Child>Sidebar</Child>,
  content: <Child>Content</Child>,
  footer: <Child>Footer</Child>,
};
