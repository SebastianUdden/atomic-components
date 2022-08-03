import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from "styled-components";
import FlexLayout from "./FlexLayout";

const Child = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  font-size: 20px;
  line-height: 20px;
  color: #ffe8c3;
  background-color: #222;
  border: 10px solid #444;
  width: 100%;
`;

export default {
  title: "Organisms/FlexLayout",
  component: FlexLayout,
} as ComponentMeta<typeof FlexLayout>;

const Template: ComponentStory<typeof FlexLayout> = (args) => (
  <FlexLayout {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  header: <Child>Header</Child>,
  sidebar: <Child>Sidebar</Child>,
  content: <Child>Content</Child>,
  footer: <Child>Footer</Child>,
};
