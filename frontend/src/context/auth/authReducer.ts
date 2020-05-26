import { State, Action } from './authTypes';

export default function AuthReducer(state: State, action: Action) {
    switch (action.type) {
        case 'SET_USER': {
            return { ...state, user: action.payload };
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
}
