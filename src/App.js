import React from 'react';
// Hello를 불러옴
import Hello from './Hello';

// JSX : JavaScript + HTML

/* 
html에서 보낸 값을 component에서 받음
Movie(props)와 같이 보낸 모든 값을 받는 방법도 있음 - 이 경우 props는 object
아래와 같은 방법은 title만 뽑아서 받는 방법
*/
function Movie({ title }){
  return <h1>{ title }</h1>;
}

function App() {
  return (
    <div>
      <Hello /> {/* Hello를 넣어줌 */}
      {/* Movie라는 component에 title이라는 이름의 prop(property)을 Iron Man이라는 value로 넘겨준 것 */}
      <Movie title="Iron Man"/>
    </div>
  );
}

export default App;
