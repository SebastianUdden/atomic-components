import { ComponentStory, ComponentMeta } from "@storybook/react";
import Image from "./Image";

export default {
  title: "Atoms/Image",
  component: Image,
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  src: "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTPHP956i_CLtzgJ4RmC45ICp82u9kvGuQPuPnJE6D8RUPlBVEsdePCtWAtNICD2vvdGLxixpsx81qpSFMw2UY",
};
