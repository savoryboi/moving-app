import { ADD_CATEGORY } from '../utils/mutations';
import { useMutation, gql } from '@apollo/client';
import { useState } from 'react';

function NewCategory(client) {
    const [categoryName, setCategoryName] = useState('');
    const [addNewCategory, {loading, error}] = useMutation(ADD_CATEGORY);

    const handleSubmit = (e) =>{
         e.preventDefault()
        console.log(categoryName)
        
        addNewCategory( { variables: {categoryName} } )
        .then((response) => {
            // Handle successful mutation
            console.log('Category added:', response);
          })
          .catch((error) => {
            // Handle mutation error
            console.error('Mutation error:', error);
          });

          setCategoryName('');
        };

    return (
        <div className='new_category_wrapper'>
            <h1>Add New List Category</h1>
            <form className='new_category_form' onSubmit={handleSubmit}>
                <label>Category Name</label>
                <input 
                    type="text"
                    value={categoryName}
                    onChange={(e)=> setCategoryName(e.target.value)}
                    ></input>
                <button type='submit'>Add Category</button>
            </form>
        </div>
    )
}

export default NewCategory;