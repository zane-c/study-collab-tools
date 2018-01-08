import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import styles from './app.scss';


// Initialize Firebase
const config = {
  apiKey: 'AIzaSyD4dhVUak1Ye3AD-6Y8pNZGct9ILd-_Suc',
  authDomain: 'study-share-316ef.firebaseapp.com',
  databaseURL: 'https://study-share-316ef.firebaseio.com',
  projectId: 'study-share-316ef',
  storageBucket: 'study-share-316ef.appspot.com',
  messagingSenderId: '993631764347',
};
firebase.initializeApp(config);

const App = ({ children }) => (
  <div className={styles.app}>
    {children}
  </div>
);

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
