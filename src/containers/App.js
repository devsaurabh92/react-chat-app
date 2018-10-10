import React from 'react';
import Sidebar from '../components/Sidebar';
import Main from '../components/Main';
import store from "../store";
import  _ from 'lodash';
import './App.css';

const App = () => {
//console.log(store.getState().activeUserId);
//const { contacts } = store.getState().contacts;
//const { user } = store.getState().user;
//const activeUserId = store.getState().activeUserId;
const { contacts, user, activeUserId  } = store.getState();
//console.log(contacts.contacts);
  return (
    <div className="App">
      <Sidebar contacts={_.values(contacts.contacts)} />
      <Main user={user} activeUserId={activeUserId} />
    </div>
  );
};

export default App;
