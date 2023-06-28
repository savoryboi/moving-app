import { useQuery, gql } from '@apollo/client';
import './App.css';
import List from './components/List';
import { GET_ALL_ITEMS, GET_ALL_CATEGORIES } from './utils/queries';
import NewCategory from './components/NewCategory';


function App(props) {
  const client = props.client
  const { error, loading, data } = useQuery(GET_ALL_CATEGORIES);
  data ? console.log(data.getAllCategories) : console.log(error);

  const categoryData = data.getAllCategories;

  return (
    <div className="App">
      <NewCategory></NewCategory>
      <div className='list_container'>
      {
        categoryData ?
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
        : <div id='noCategoriesYet'> 
          <h1>You have not created any categorues yet!</h1>
          </div>
      }
      </div>
    </div>
  );
}

export default App;
