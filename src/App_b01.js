import React from 'react';
import propTypes from 'prop-types';
// git init
// git remote add origin https://~~~
// git add .
// git status
// git commit -m ""
// git push origin master

// props로 가져와서 그 안에 있는 속성값을 사용하기
/*
function Tomato(props){
    return(
        <div>
            <h1>I Love {props.test}!!!</h1>
        </div>
    )
}
*/
const foodILike = [
    {
        id:1,
        name: "hong",
        image: "http://placeimg.com/320/320/1",
        rating: 5,
    },
    {
        id:2,
        name: "kim",
        image: "http://placeimg.com/320/320/2",
        rating: 4.6,
    },
    {
        id:3,
        name: "park",
        image: "http://placeimg.com/320/320/3",
        rating: 5,
    },
    {
        id:4,
        name: "seo",
        image: "http://placeimg.com/320/320/4",
        rating: 4.7,
    },
    {
        id:5,
        name: "nam",
        image: "http://placeimg.com/320/320/5",
        rating: 5,
    }

    ]

//jsx 사용법 = javascript + HTML
// props 안에 있는 값을 바로 사용하기
function Food({name, picture, rating}){
    return(
        <div>
            <h1>I Love {name}!!!</h1>
            <p>{rating}</p>
            <img src={picture} />
        </div>
    )
}

Food.propTypes = {
    name: propTypes.string.isRequired,
    picture: propTypes.string.isRequired,
    rating: propTypes.number.isRequired,

}

function App() {
  return (
      <div>
          {foodILike.map(dish => (
              <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
          ))}
      </div>
  );
}

export default App;
