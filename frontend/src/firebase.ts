import * as firebase from 'firebase/app';
import 'firebase/auth';

// TODO .env file
const firebaseConfig = {
    apiKey: 'AIzaSyCXxtZO1hJDFih_Y6HDiKpTWUC3RCfFwWQ',
    authDomain: 'learning-tool-22eb6.firebaseapp.com',
    databaseURL: 'https://learning-tool-22eb6.firebaseio.com',
    projectId: 'learning-tool-22eb6',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
