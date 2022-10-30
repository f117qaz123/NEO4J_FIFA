import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import PlayersTableRow from "./PlayersTableRow";

export default {
  title: 'PlayersTableRow',
  component: PlayersTableRow,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof PlayersTableRow>;

const Template: ComponentStory<typeof PlayersTableRow> = (args) => <PlayersTableRow {...args} />;
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
