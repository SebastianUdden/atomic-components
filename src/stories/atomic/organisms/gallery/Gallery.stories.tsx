import { ComponentStory, ComponentMeta } from "@storybook/react";
import Card from "../../molecules/card/Card";
import Gallery from "./Gallery";

export default {
  title: "Organisms/Gallery",
  component: Gallery,
} as ComponentMeta<typeof Gallery>;

const Template: ComponentStory<typeof Gallery> = (args) => (
  <Gallery {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  items: [
    <Card center bgColor="magenta" color="white">
      Card 1
    </Card>,
    <Card center bgColor="teal" color="white">
      Card 2
    </Card>,
    <Card center bgColor="steelblue" color="white">
      Card 3
    </Card>,
    <Card center bgColor="darkgray" color="white">
      Card 4
    </Card>,
    <Card center bgColor="maroon" color="white">
      Card 5
    </Card>,
    <Card center bgColor="forestgreen" color="white">
      Card 6
    </Card>,
    <Card center bgColor="skyblue" color="white">
      Card 7
    </Card>,
    <Card center bgColor="gray" color="white">
      Card 8
    </Card>,
    <Card center bgColor="orange" color="white">
      Card 9
    </Card>,
  ],
};

export const Three = Template.bind({});
Three.args = {
  items: [
    <Card center>Card 1</Card>,
    <Card center>Card 2</Card>,
    <Card center>Card 3</Card>,
  ],
};

export const TwentyTwo = Template.bind({});
TwentyTwo.args = {
  items: [
    <Card center>Card 1</Card>,
    <Card center>Card 2</Card>,
    <Card center>Card 3</Card>,
    <Card center>Card 4</Card>,
    <Card center>Card 5</Card>,
    <Card center>Card 6</Card>,
    <Card center>Card 7</Card>,
    <Card center>Card 8</Card>,
    <Card center>Card 9</Card>,
    <Card center>Card 10</Card>,
    <Card center>Card 11</Card>,
    <Card center>Card 12</Card>,
    <Card center>Card 13</Card>,
    <Card center>Card 14</Card>,
    <Card center>Card 15</Card>,
    <Card center>Card 16</Card>,
    <Card center>Card 17</Card>,
    <Card center>Card 18</Card>,
    <Card center>Card 19</Card>,
    <Card center>Card 20</Card>,
    <Card center>Card 21</Card>,
    <Card center>Card 22</Card>,
  ],
};
