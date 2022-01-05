const postsResolvers = require('./posts');
const userResolvers = require('./user')

module.exports={
    Query: {
        ...postsResolvers.Query
    },
    Mutation:{
        ...userResolvers.Mutation,
        ...postsResolvers.Mutation
    }
}