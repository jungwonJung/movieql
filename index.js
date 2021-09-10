import {GraphQLServer} from "graphql-yoga"
import resolver from "./graphql/resolvers"


const server = new GraphQLServer({
    typeDefs : "./graphql/schema.graphql",
    resolvers : resolver
})

server.start(() => console.log("서버 동작중"))