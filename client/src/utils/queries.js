import { gql } from "@apollo/client";

export const GET_ALL_ITEMS = gql`
    query getAllItems {
        getAllItems {
            _id
            itemName
            itemCategory
        }
    }
`;

export const GET_ALL_CATEGORIES = gql`
    query getAllCategories {
        getAllCategories {
            _id
            categoryName
            categoryItems {
                _id
                itemName
                itemCategory
            }  
    }
}
`;

export const GET_ONE_ITEM = gql`
    query getOneItem($itemId: ID!) {
        getOneItem (id: $itemId){
            _id
            itemName
            itemCategory
        }
    }
`;

export const GET_ONE_CATEGORY = gql`
    query getOneCategory($id: ID!) {
        getOneCategory(id: $id) {
            _id
            categoryItems
            categoryName
        }
    }
`;
