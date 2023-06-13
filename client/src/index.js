import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, ApolloProvider, gql }  from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:3333/graphql', 
  cache: new InMemoryCache(),
});

// retrieving api data from client side
client
  .query({
    query: gql`
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
    `,
  })
  .then((result) => console.log(result));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App client={client} />
    </React.StrictMode>
  </ApolloProvider>
);

reportWebVitals();
