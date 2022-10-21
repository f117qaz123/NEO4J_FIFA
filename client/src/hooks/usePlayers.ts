import { useQuery, gql } from "@apollo/client";

export const GET_PLAYERS = gql`
 query {
  players ( options: { limit: 100 } ) {
    sofifa_id,
    short_name,
    player_positions,
    age,
    overall,
    potential,
    clubs {
      ID
      Name
    }
  }
 }
`

export const usePlayers = () => {
  const { data, loading } = useQuery(GET_PLAYERS);

  return {
    data,
    loading
  };
};
