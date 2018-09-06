import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import "../packages/orgdot-fixed-bold";
import "../packages/orgdot-fixed-v01";
import "../packages/orgdot-fixed-v02";
import "../packages/orgdot-fixed-v03";
import "../packages/orgdot-fixed-v05";
import "../packages/orgdot-gab-net-bold";
import "../packages/orgdot-gab-net-plain";
import "../packages/orgdot-genown";
import "../packages/orgdot-kharon4a-bold";
import "../packages/orgdot-kharon4amini";
import "../packages/orgdot-kharon4a";
import "../packages/orgdot-org-v01";
import "../packages/orgdot-pixelpunch";
import "../packages/orgdot-serif-v01";
import "../packages/orgdot-swfitslmfw";
import "../packages/orgdot-swft-v01";
import "../packages/orgdot-swft-v02";
import "../packages/orgdot-teachers-pet";
import "../packages/orgdot-teachers-pet-bold";
import "../packages/orgdot-teachers-pet-sans-serif";
import "../packages/orgdot-teachers-pet-sans-serif-bold";

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
