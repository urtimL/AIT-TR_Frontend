import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'

const Sandwich: React.FC = (): JSX.Element => {

    const ingredients = useSelector((state: RootState) => state.sandwich.ingredients);
    const dispatch = useDispatch();


    const handleAddBread = (): void => {
        dispatch({type: 'sandwich/addIngredient', payload: 'Bread'});
    }

    const handleAddCheese = (): void => {
        dispatch({type: 'sandwich/addIngredient', payload: 'Cheese'});
        
    }

    const handleAddSalami = (): void => {
        dispatch({type: 'sandwich/addIngredient', payload: 'Salami'});
        
    }

    const handleDelete = (): void => {
        dispatch({type: 'sandwich/clear'}); 
    }

  return (
    <>
      <h1>Choose your sandwich:</h1>
      <p>Sandwich: { ingredients }</p>
      <button onClick={handleAddBread}>Add Bread</button>
      <button onClick={handleAddCheese}>Add Cheese</button>
      <button onClick={handleAddSalami}>Add Salami</button>
      <button onClick={handleDelete}>Delete</button>
    </>
  )
}

export default Sandwich;
