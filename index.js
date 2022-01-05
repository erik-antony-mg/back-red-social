const {ApolloServer} = require("apollo-server");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();


//
require('dotenv').config({path:'.env'});
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({req}) => ({req})
});

//
const host=process.env.HOST || '0.0.0.0'; 
const port=process.env.PORT || 5000;



mongoose
    .connect(process.env.MONGODB, {
        useNewUrlParser: true
    })
    .then(() => {
        console.log("MongoDB connected");
        return server.listen(port);
    })
    .then((res) => {
        console.log(`Server running at ${res.url}`);
    });