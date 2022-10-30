import { useQuery, gql } from "@apollo/client";

export const GET_CLUB = gql`
 query GetClub($ID: Int!) {
  clubs (where: { ID: $ID }) {
    ID
    Name
    Attack
    Defence
    Midfield
    Overall
  }
}
`;

export const useClub = (ID: number) => {
  const { error, data, loading } = useQuery(GET_CLUB, {
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
