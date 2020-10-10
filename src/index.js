import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// import 'semantic-ui-css/semantic.min.css';
import 'semantic-ui-less/semantic.less';

import './i18n/i18n';

ReactDOM.render(
  <Suspense fallback={<p>Load</p>}>
    <App />
  </Suspense>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
