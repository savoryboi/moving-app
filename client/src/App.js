import { useQuery, gql } from '@apollo/client';
import './App.css';
import List from './components/List';
import { GET_ALL_ITEMS, GET_ALL_CATEGORIES } from './utils/queries';


function App() {
  const { error, loading, data } = useQuery(GET_ALL_CATEGORIES);
  data ? console.log(data.getAllCategories) : console.log(error.message);

  const categoryData = data.getAllCategories;

  return (
    <div className="App">
      {
        categoryData.map((cat) => {
          return (
            <div key={cat._id} className='category_wrapper'>
              <h1>{cat.categoryName}</h1>
              <ul className='list'>
              {cat.categoryItems.map((item) => {
                return (
                      <li key={item._id}>{item.itemName}</li>
                      )
                    })}
                    </ul>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
