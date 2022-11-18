const { Neo4jGraphQL } = require ("@neo4j/graphql");
const { ApolloServer, gql } = require ("apollo-server");
const neo4j = require ("neo4j-driver");
require ('dotenv').config ();

// (You may need to replace your connection details, username and password)
const AURA_ENDPOINT = process.env.NEO4J_URI;
const USERNAME = process.env.NEO4J_USERNAME;
const PASSWORD = process.env.NEO4J_PASSWORD;

// Create Neo4j driver instance
const driver = neo4j.driver (AURA_ENDPOINT, neo4j.auth.basic (USERNAME, PASSWORD));

const typeDefs = gql`
type players {
  sofifa_id: Int!
  short_name: String!
  height_cm: Int!
  weight_kg: Int!
  pace: Int
  shooting: Int
  passing: Int
  dribbling: Int
  defending: Int
  physic: Int
  gk_diving: Int
  gk_handling: Int
  gk_kicking: Int
  gk_reflexes: Int
  gk_speed: Int
  gk_positioning: Int
  age: Int!
  value_eur: Int!
  wage_eur: Int!
  player_positions: String!
  overall: Int!
  potential: Int!
  player_tags: String!
  clubs: clubs! @relationship(type: "FROM", direction: OUT)
}

type clubs {
  Name: String!
  ID: Int!
  Overall: Int!
  Attack: Int!
  Midfield: Int!
  Defence: Int!
  LeagueId: Int!
  players: [players!]! @relationship(type: "FROM", direction: IN)
}

`;

// Create instance that contains executable GraphQL schema from GraphQL type definitions
const neo4jGraphQL = new Neo4jGraphQL ({
  typeDefs,
  driver
});

// Generate schema
neo4jGraphQL.getSchema ().then ((schema) => {
  // Create ApolloServer instance to serve GraphQL schema
  const server = new ApolloServer ({
    schema,
    context: { driverConfig: { database: 'neo4j' } }
  });

  // Start ApolloServer
  server.listen ().then (({ url }) => {
    console.log (`GraphQL server ready at ${url}`);
  });
});
