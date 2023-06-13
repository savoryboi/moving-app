import { ApolloError, useQuery } from '@apollo/client';
import { GET_ALL_ITEMS, GET_ALL_CATEGORIES } from '../utils/queries';


function List () {
    const { error, loading, data } = useQuery(GET_ALL_CATEGORIES);
    console.log(data);
}

export default List;