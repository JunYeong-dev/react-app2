import React from 'react';
import PropTypes from "prop-types";

/*
  component의 life cycle
  Mounting - 가장 처음 로드 될 때
  1. constructor()
  2. static getDerivedStateFromProps() - 거의 사용하지 않음
  3. render()
  4. componentDidMount()
  이 순서로 Mounting됨
*/

// react는 자동적으로 class component의 render method를 실행
class App extends React.Component{
  // state는 object로서 component의 데이터를 넣는 공간
  // 바꿀 데이터를 state안에 넣음
  state = {
    count: 0
  };
  // JavaScript 코드 함수
  add = () => {
    // this.state.count += 1; : 이와 같이 state를 직접 변경하면 안됨 - setState()를 사용해야 함
    // setState()는 state값을 변경하면서 rendering을 다시 해줌
    // minus처럼 state를 변경하는 방법도 있지만, current함수를 사용하여 변경할 수 있음
    this.setState(current =>({count: current.count + 1}));
  };
  minus = () => {
    this.setState({count: this.state.count - 1});
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
