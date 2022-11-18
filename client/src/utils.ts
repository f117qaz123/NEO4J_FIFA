export interface TableCategory {
  label: string;
}

export const tableCategories: TableCategory[] = [
  {
    label: 'Age'
  },
  {
    label: 'Position'
  },
  {
    label: 'Overall'
  },
  {
    label: 'Potential'
  }
];

const stringSplice = (original: string, idx: number, rem: number, str: string) => {
  return original.slice(0, idx) + str + original.slice(idx + Math.abs(rem));
};

const getPlayerIdString = (idString: string) => {
  if (idString.length === 5) {
    return '0'.concat(idString);
  }
  return idString;
}


export function getPlayerSrc (id: number) {
  const idString = stringSplice(getPlayerIdString(id.toString()), 3, 0, '/');
  return `https://cdn.sofifa.net/players/${idString}/23_60.png`;
}

export function getClubSrc (id: number) {
  return`https://cdn.sofifa.net/teams/${id}/60.png`
}

export function getPowerRadarData (obj: object, name: string) {
  const dataSet = [];

  for (const [category, value] of Object.entries(obj)) {
    dataSet.push({category, [name]: value});
  }

  return dataSet;
}
