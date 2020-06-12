import { State, Action } from './authTypes';

export default function AuthReducer(state: State, action: Action) {
    switch (action.type) {
        case 'SET_FIREBASE_USER': {
            return { ...state, firebaseUser: action.payload };
        }
        case 'SET_USER': {
            return { ...state, user: action.payload };
        }
        case 'SET_ERROR': {
            return { ...state, error: action.payload };
        }
    }
}
