import React from 'react';
// Hello를 불러옴
import Hello from './Hello';

// JSX : JavaScript + HTML

/* 
html에서 보낸 값을 component에서 받음
Movie(props)와 같이 보낸 모든 값을 받는 방법도 있음 - 이 경우 props는 object
아래와 같은 방법은 title만 뽑아서 받는 방법
*/
function Movie({ title, image }){
  return (
    <div>
      <h1>{ title }</h1>
      <img src={ image } />
    </div>
  );
}

const MoviesObj = [
  {
    title: "Iron Man",
    image: "http://images1.fanpop.com/images/image_uploads/new-wallpaper-iron-man-948765_1680_1050.jpg"
  },
  {
    title: "Doctor Strange",
    image: "https://mondrian.mashable.com/uploads%252Fcard%252Fimage%252F256764%252F597ddb0335d4402d8d440e7e3bb960d1.jpg%252F950x534__filters%253Aquality%252880%2529.jpg?signature=q0i1-OQQJ6aOkf7kOD2Aa4DBbig=&source=https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com"
  },
  {
    title: "Thor",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdhgywazgeek0d.cloudfront.net%2Fwatcha%2Fimage%2Fupload%2Fc_fill%2Ch_1080%2Cq_80%2Cw_1920%2Fv1463389977%2Fme47yc-4770.jpg&f=1&nofb=1"
  }
]

function App() {
  return (
    <div>
      <Hello /> {/* Hello를 넣어줌 */}
      {/* Movie라는 component에 title이라는 이름의 prop(property)을 Iron Man이라는 value로 넘겨준 것 */}
      {/* <Movie title="Iron Man"/> */}
      
      {/* 
        JavaScript의 map함수를 통해 배열안에 있는 각각의 object에 접근 
        MoviesObj.map(function(movie){  }) <-이 형식과 같은 예전 JavaScript 형식을 써도 됨
      */}
      { MoviesObj.map(movie => 
        <Movie title={ movie.title } image={ movie.image }/>
      ) }
    </div>
  );
}

export default App;
