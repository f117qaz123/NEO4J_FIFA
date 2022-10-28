import { useQuery, gql } from "@apollo/client";

export const GET_CLUBS = gql`
query {
  clubs ( where: { Name_NOT: null, AND: { LeagueId_NOT: 78 } } options: { sort: [ { Overall: DESC } ],   limit: 50 } ) {
    Name
    ID
    Overall
    Attack
    Midfield
    Defence
  }
}
`

export const useClubs = () => {
  const { error, data, loading } = useQuery(GET_CLUBS);

  return {
    error,
    data,
    loading
  };
};
