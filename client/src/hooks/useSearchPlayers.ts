import { gql, useLazyQuery } from "@apollo/client";

export const GET_SEARCH_PLAYERS = gql`
 query GetSearchPlayers($searchText: String!){
   players ( where: { long_name_CONTAINS: $searchText } ) {
    long_name,
    short_name,
    sofifa_id
   }
 }
`

export const useSearchPlayers = (searchText: string) => {
  const [getSearchPlayers, { data, loading }] = useLazyQuery(GET_SEARCH_PLAYERS, {
    variables: {
      searchText
    }
  });

  return {
    getSearchPlayers,
    data,
    loading
  }
};
