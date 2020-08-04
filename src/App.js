import React from 'react';

function Food({fav}){
  return <h1>I like {fav}</h1>;
}

function App() {
  return(
  <div>
    <h1>안녕</h1>
    <Food fav="kimchi" />
    <Food fav="사람" />
    <Food fav="라면" />
    <Food fav="음식" />
  </div>
  )
}

export default App;
