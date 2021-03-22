import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Cards, { Props } from "./Cards";

export default {
  title: "Common/Cards",
  component: Cards,
} as Meta;

const Template: Story<Props> = (args) => <Cards {...args} />;

export const Trackcard = Template.bind({});
Trackcard.args = {
  likebutton: true,
  title: "Title",
  artist: "Artist",
  image: "/lovell3.jpeg",
};
