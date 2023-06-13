import { gql } from "@apollo/client";

export const ADD_CATEGORY = gql`
    mutation addCategory ($categoryName: String!){
        addCategory(categoryName: $categoryName) {
            _id
            categoryName
            categoryItems
        }
    }
`;

