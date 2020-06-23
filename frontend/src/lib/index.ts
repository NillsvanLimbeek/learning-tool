import { Firebase } from './Firebase/firebase';
import { client } from './Graphql/client';
import {
    AuthProvider,
    useAuthDispatch,
    useAuth,
} from './Context/Auth/AuthContext';

// export types
export * from './Types/User';

export { Firebase, client, AuthProvider, useAuth, useAuthDispatch };
