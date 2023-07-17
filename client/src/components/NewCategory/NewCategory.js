import { ADD_CATEGORY } from '../../utils/mutations';
import { useMutation, gql } from '@apollo/client';
import { useState } from 'react';
import './NewCategory.css';

function NewCategory(client) {
    const [categoryName, setCategoryName] = useState('');
    const [addCategory, {data, loading, error}] = useMutation(ADD_CATEGORY);

    const handleSubmit = async (e) =>{
         e.preventDefault()
        console.log(categoryName)

        addCategory({variables: {categoryName: categoryName}})
            .then(response => {
                console.log('Category added: ' + categoryName, response.data )
            })
            .catch(error => console.log(error))

        setCategoryName('');
        
    };

    return (
        <div className='new_category_wrapper'>
            <form className='new_category_form' onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={categoryName}
                    placeholder='New List Category...'
                    onChange={(e)=> setCategoryName(e.target.value)}
                    ></input>
                <button type='submit'>Create</button>
            </form>
        </div>
    )
}

export default NewCategory;