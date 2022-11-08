import React from 'react';
import { ResponsiveRadar } from '@nivo/radar'

const ClubPowerRadar = ({data, name}: { data: Record<string, unknown>[], name: string }) => (
  <ResponsiveRadar
    data={data}
    keys={[ name ]}
    indexBy="category"
    valueFormat=">-.2f"
    margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
    borderColor={{ from: 'color' }}
    dotSize={10}
    dotColor={{ theme: 'background' }}
    dotBorderWidth={2}
    colors={{ scheme: 'nivo' }}
  />
);

export default ClubPowerRadar;
