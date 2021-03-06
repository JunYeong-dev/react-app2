import React from 'react';
// Hello를 불러옴
import Hello from './Hello';
// prop-types : 전달받은 props가 내가 우너하는 props인지 확인해 줌
import PropTypes from "prop-types";

// JSX : JavaScript + HTML

/* 
html에서 보낸 값을 component에서 받음
Movie(props)와 같이 보낸 모든 값을 받는 방법도 있음 - 이 경우 props는 object
아래와 같은 방법은 title만 뽑아서 받는 방법
*/
function Movie({ title, image, rating }){
  return (
    <div>
      <h1>{ title }</h1>
      <h5>{ rating }</h5>
      <img src={ image } alt={ title }/>
    </div>
  );
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  // rating: PropTypes.string.isRequired : rating은 숫자기 때문에 에러 발생(web의 console에서 확인 가능)
  rating: PropTypes.number.isRequired
};

const MoviesObj = [
  {
    id: 1,
    title: "Iron Man",
    image: "http://images1.fanpop.com/images/image_uploads/new-wallpaper-iron-man-948765_1680_1050.jpg",
    rating: 4.9
  },
  {
    id: 2,
    title: "Doctor Strange",
    image: "https://mondrian.mashable.com/uploads%252Fcard%252Fimage%252F256764%252F597ddb0335d4402d8d440e7e3bb960d1.jpg%252F950x534__filters%253Aquality%252880%2529.jpg?signature=q0i1-OQQJ6aOkf7kOD2Aa4DBbig=&source=https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com",
    rating: 4.8
  },
  {
    id: 3,
    title: "Thor",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdhgywazgeek0d.cloudfront.net%2Fwatcha%2Fimage%2Fupload%2Fc_fill%2Ch_1080%2Cq_80%2Cw_1920%2Fv1463389977%2Fme47yc-4770.jpg&f=1&nofb=1",
    rating: 4.8
  }
]

function renderMovie(MoviesObj){
  return <Movie key={ MoviesObj.id } title={ MoviesObj.title } image={ MoviesObj.image } />
}

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
        <Movie key={ movie.id } title={ movie.title } image={ movie.image } rating={ movie.rating } />
      ) }
      {/*
        아래 처럼 함수를 만들어 사용할 수도 있음 
        { MoviesObj.map(renderMovie) } 
      */}
    </div>
  );
}

export default App;
