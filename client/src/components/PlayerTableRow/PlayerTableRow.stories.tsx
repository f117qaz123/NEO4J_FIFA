import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import PlayerTableRow from "./PlayerTableRow";

export default {
  title: 'PlayerTableRow',
  component: PlayerTableRow,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof PlayerTableRow>;

const Template: ComponentStory<typeof PlayerTableRow> = (args) => <PlayerTableRow {...args} />;
export const Default = Template.bind({});
Default.args = {
  playerData: {
    "sofifa_id":158023,
    "short_name":"L. Messi",
    "player_positions":"RW, ST, CF",
    "age":33,
    "overall":93,
    "potential":93,
    "clubs":{
      "ID":241,
      "Name":"FC Barcelona",
    }
  }
};
