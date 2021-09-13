import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'; //내장함수 쓸게

function App() {

    let [subject, alertSubject] = useState(['남자 코트 추천','강남 우동 맛집','성남 맛집']); // [a(string),b(함수)]
    let [likeNum, alertLikeNum] = useState(0);
    let posts = '맛집';

    function hundread(){
        return 100
    }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
        <div className={"list"}>
            <h4> { subject[1] } <span onClick={//function
                () => {
                    alertLikeNum(likeNum + 1)
                }
            }> ♥ </span> {likeNum} </h4>
            <p>2월 17일 발행</p>
            <button onClick = {
                () => {
                    const newArray = [...subject]; //deep copy
                    newArray[0] = '여자코트 추천';
                    alertSubject(newArray);
                }
            }>alert</button>
            <hr/>
        </div>
        <div className={"list"}>
            <h4> { subject[0] } </h4>
            <p>2월 17일 발행</p>
            <hr/>
        </div>
        <div className={"list"}>
            <h4> { subject[2] } </h4>
            <p>2월 17일 발행</p>
            <hr/>
        </div>

    </div>
  );
}

export default App;
