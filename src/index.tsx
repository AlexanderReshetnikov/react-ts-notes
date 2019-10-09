import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.scss';
//import App from './App';
import ListHelpPanel from './ListHelpPanel';
import List from './List';
import WorkPanel from './WorkPanel';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<ListHelpPanel />, document.getElementById('listHelpPanel'));
ReactDOM.render(<List />, document.getElementById('listNotes'));
//ReactDOM.render(<WorkPanel isReadOnly={true} id_note={-1}/>, document.getElementById('noteWorkPanel'));
//ReactDOM.render(<WorkPanel incomingNote="obj2"/>, document.getElementById('noteWorkPanel'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
