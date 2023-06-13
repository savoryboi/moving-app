const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type Item {
        _id: ID!
        itemName: String!
        itemCategory: ID!
    }
    type Category {
        _id: ID!
        categoryName: String!
        categoryItems: [Item]
    }

    type Query {
        getAllItems: [Item]
        getOneItem(id: ID!): Item
        getAllCategories: [Category]
        getOneCategory(id:ID!): Category
    }

    type Mutation {
        addItem(itemName: String!, itemCategory: ID!): Item! 
        addCategory(categoryName: String!): Category!
   
    }
`;

module.exports = typeDefs;