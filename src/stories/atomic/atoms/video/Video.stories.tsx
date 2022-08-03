import { ComponentStory, ComponentMeta } from "@storybook/react";
import Video from "./Video";
import videoSrc from "../../assets/balance-video.mp4";

export default {
  title: "Atoms/Video",
  component: Video,
} as ComponentMeta<typeof Video>;

const Template: ComponentStory<typeof Video> = (args) => <Video {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  src: videoSrc,
};

export const Contained = Template.bind({});
Contained.args = {
  src: videoSrc,
  width: "320",
  height: "240",
};
