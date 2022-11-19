import { useQuery, gql } from "@apollo/client";

export const GET_SIMILAR_PLAYERS_HIGH = gql`
  query GetSimilarPlayers($player_positions: String!, $short_name: String!) {
  players (where: { overall_GTE: 84, AND: { potential_GTE: 84, AND: { short_name_NOT_CONTAINS: $short_name, AND: {player_positions_CONTAINS: $player_positions, AND: {clubs_NOT: null}}}}} options: { limit: 10 }) {
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

export const useSimilarPlayerHigh = (player_positions: string, short_name: string) => {
  const { error, data, loading } = useQuery(GET_SIMILAR_PLAYERS_HIGH, {
    variables: {
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
