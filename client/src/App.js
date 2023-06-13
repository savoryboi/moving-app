import { useQuery, gql } from '@apollo/client';
import './App.css';
import List from './components/List';
import { GET_ALL_ITEMS, GET_ALL_CATEGORIES } from './utils/queries';


function App() {
  const { error, loading, data } = useQuery(GET_ALL_CATEGORIES);
  data ? console.log(data) : console.log(error);

  const categoryData = data.getAllCategories;

  return (
    <div className="App">
      {
        categoryData.map((cat) => {
          return (
            <div key={cat._id} className='category_wrapper'>
              <h1>{cat.categoryName}</h1>
              {cat.categoryItems.map((item) => {
                return (
                  <div key={item._id}>
                    <ul>
                      <li>{item.itemName}</li>
                    </ul>
                  </div>
                )
              })}
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
