import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// index.html의 id값이 root인 곳에 App을 rendering(하나의 component만 rendering할 수 있음)
// 2개 이상의 component를 rendering하고 싶을 경우 main component안에 다른 component를 불러오면 됨
// 만약 App과 Hello를 root에 rendering하고 싶을 경우 App을 먼저 rendering한 후 App에서 Hello를 불러서 넣어줌 - App.js참고
ReactDOM.render(<App />, document.getElementById("root"));
