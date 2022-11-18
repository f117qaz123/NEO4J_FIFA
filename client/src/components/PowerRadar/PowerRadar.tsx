import React from 'react';
import { ResponsiveRadar } from '@nivo/radar'

const PowerRadar = ({data, name}: { data: Record<string, unknown>[], name: string }) => (
  <ResponsiveRadar
  data={data}
  keys={[ name ]}
  indexBy="category"
  maxValue={100}
  valueFormat=">-.2f"
  margin={{ top: 70, right: 100, bottom: 40, left: 10 }}
  borderColor={{ from: 'color' }}
  enableDotLabel={true}
  dotSize={10}
  dotColor={{ theme: 'background' }}
  dotBorderWidth={2}
  colors={{ scheme: 'nivo' }}
/>
);

export default PowerRadar;
