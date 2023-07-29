import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./graphql/schema";
import { AppDataSource } from "./data-source";
import resolvers from "./graphql/resolvers";

AppDataSource.initialize()
  .then(() => {})
  .catch((error) => console.log(error));

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

startStandaloneServer(server, {
  listen: { port: 4000 },
}).then((serverInfo) => {
  console.log(`🚀  Server ready at: ${serverInfo.url}`);
});
