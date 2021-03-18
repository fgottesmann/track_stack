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
  image:
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.MXfbaPUL5B4z3WE6zcJxSgAAAA%26pid%3DApi&f=1",
};
