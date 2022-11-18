import { useQuery, gql } from "@apollo/client";

export const GET_PLAYER = gql`
 query GetPlayer($sofifa_id: Int!) {
  players (where: { sofifa_id: $sofifa_id }) {
    age,
    clubs {
      ID
      Name
    },
    defending,
    dribbling,
    gk_diving,
    gk_handling,
    gk_kicking,
    gk_positioning,
    gk_reflexes,
    gk_speed,
    height_cm,
    overall,
    pace,
    passing,
    physic,
    player_positions,
    player_tags,
    potential,
    short_name,
    sofifa_id,
    value_eur,
    wage_eur,
    weight_kg
  }
}
`;

export const usePlayer = (sofifa_id: number) => {
  const { error, data, loading } = useQuery(GET_PLAYER, {
    variables: {
      sofifa_id,
    },
  });

  return {
    error,
    data,
    loading
  };
};
