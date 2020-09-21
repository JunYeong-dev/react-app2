import React from 'react';
import PropTypes from "prop-types";

// react는 자동적으로 class component의 render method를 실행
class App extends React.Component{
  // state는 object로서 component의 데이터를 넣는 공간
  // 바꿀 데이터를 state안에 넣음
  state = {
    count: 0
  };
  // JavaScript 코드 함수
  add = () => {
    console.log('add');
  };
  minus = () => {
    console.log('minus');
  };
  render() {
  return (
  <div>
    <h1>The number is: { this.state.count }</h1>
    {/* 
      this.add() : 이렇게 쓰게 되면 버튼을 클릭할 때 함수가 호출되는 것이 아닌,
      화면이 로드 되면서 함수가 호출됨
     */}
    <button onClick={this.add}>Add</button>
    <button onClick={this.minus}>Minus</button>
  </div>
  )};
}

export default App;
