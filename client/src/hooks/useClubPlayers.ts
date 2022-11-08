import { useQuery, gql } from "@apollo/client";

export const GET_CLUB_PLAYERS = gql`
  query GetClub($ID: Int!) {
  clubs (where: { ID: $ID }) {
    players {
    sofifa_id,
    short_name,
    player_positions,
    age,
    overall,
    potential,
    clubs {
      ID
    }
    }
  }
}
`

export const useClubPlayers = (ID: number) => {
  const { error, data, loading } = useQuery(GET_CLUB_PLAYERS, {
    variables: {
      ID,
    },
  });

  return {
    error,
    data,
    loading
  };
};
