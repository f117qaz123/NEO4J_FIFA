import { useQuery, gql } from "@apollo/client";

export const GET_SIMILAR_PLAYERS = gql`
  query GetSimilarPlayers($overall: Int!, $potential: Int!, $player_positions: String!, $short_name: String!) {
  players (where: { overall_GTE: $overall, AND: { potential_GTE: $potential, AND: { short_name_NOT_CONTAINS: $short_name, AND: {player_positions_CONTAINS: $player_positions, AND: {clubs_NOT: null}}}}} options: { sort: [ { overall: ASC } ], limit: 10 }) {
    age,
    clubs {
      Name
      ID
    },
    player_positions,
    player_tags,
    potential,
    short_name,
    sofifa_id,
    overall
  }
}
`

export const useSimilarPlayer = (overall: number, potential: number, player_positions: string, short_name: string) => {
  const { error, data, loading } = useQuery(GET_SIMILAR_PLAYERS, {
    variables: {
      overall,
      potential,
      player_positions,
      short_name
    },
  });

  return {
    error,
    data,
    loading
  };
};
