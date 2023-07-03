import { ADD_CATEGORY } from '../utils/mutations';
import { useMutation, gql } from '@apollo/client';
import { useState } from 'react';

function NewCategory(client) {
    const [categoryName, setCategoryName] = useState('');
    const [addCategory, {data, loading, error}] = useMutation(ADD_CATEGORY);

    const handleSubmit = async (e) =>{
         e.preventDefault()
        console.log(categoryName)

        addCategory({variables: {categoryName: categoryName}})
            .then(response => {
                console.log('Category added: ' + categoryName, response )
            })
            .catch(error => console.log(error))

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