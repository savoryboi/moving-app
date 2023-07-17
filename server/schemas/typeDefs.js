const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type Item {
        _id: ID!
        itemName: String!
        itemCategory: ID!
        itemTag: String!
    }
    type Category {
        _id: ID!
        categoryName: String!
        categoryItems: [Item]
    }

    type User {
        _id: ID!
        username: String!
        password: String!
        myCategories: [Category]
        household: ID
    }

    type Query {
        getAllItems: [Item]
        getOneItem(id: ID!): Item
        getAllCategories: [Category]
        getOneCategory(id:ID!): Category
        getOneUser:(id: ID!): User
        getAllUsers: [User]
    }

    type Mutation {
        addItem(itemName: String!, itemCategory: ID!): Item! 
        addCategory(categoryName: String!): Category!
        addUser(username: String!, password: String!, household: ID): User!
    }
`;

module.exports = typeDefs;