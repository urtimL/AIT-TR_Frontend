import { ActionSandwich } from "../types/Action";
import { SandwicState } from "../types/State";

const initialState: SandwicState = {
    ingredients: ''
}

export default function sandwichReducertsts(
    state = initialState, 
    action: ActionSandwich): SandwicState {
        switch (action.type) {
            case 'sandwich/addIngredient':
                return {...state, ingredients: `${state.ingredients} ${action.payload}`}
            case 'sandwich/clear' :
                return {...state, ingredients: ''}
            default:
                return state;
        }
}