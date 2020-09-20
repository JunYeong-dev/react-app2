import React from 'react';
import PropTypes from "prop-types";

// react는 자동적으로 class component의 render method를 실행
class App extends React.Component{
  // state는 object로서 component의 데이터를 넣는 공간
  // 바꿀 데이터를 state안에 넣음
  state = {
    count: 0
  }

  render() {
  return <h1>The number is: { this.state.count }</h1>
  }
}

export default App;
