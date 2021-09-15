import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'; //내장함수 쓸게

function App() {

    let [subject,alertSubject] = useState(['남자 코트 추천','성남 맛집 추천','node-js이해'])
    let [subjectIdx,alertSubjectIdx] = useState(0)
    let [likeCount, alertLikeCount] = useState(0)
    let [modal,alertModal] = useState(0)
    let [inputText,alertInputText] = useState('')


    return (
        <div className="App">
            <div className={"black-nav"}>
                개발 Blog
            </div>
            {
                subject.map( (sub,i) => {
                    return(
                        <div className={"list"} key={i}>
                            <h2 onClick={
                                ()=>{
                                    alertModal(!modal)
                                    alertSubjectIdx(i)
                                }
                            }>{sub} </h2>
                            <h2>
                            <span onClick ={
                                () => {
                                    alertLikeCount(likeCount+1)
                                }
                            }>♥</span>
                            <span>{likeCount}</span>
                            </h2>
                            <h3>날짜</h3>
                            <hr/>
                        </div>
                    )
                })
            }

            <div>
                <input onChange={
                    (e)=>{
                        alertInputText(e.target.value)
                    }
                } />
                <button onClick={
                    ()=>{
                        let arrayCopy = [...subject];
                        arrayCopy.unshift(inputText);
                        alertSubject(arrayCopy);
                        //alertSubject((subject) => [inputText,...subject])
                    }
                }>저장</button>
           </div>

            {/*Modal 부분*/}
            {
                modal === true
                    ? <Modal sub={subject} idx={subjectIdx}></Modal>
                    : null
            }
        </div>
    )

    function Modal(props) {
        return(
            <div className={"modal"}>
                <h1>{props.sub[props.idx]}</h1>
                <h4>내용</h4>
            </div>
        )
    }
}

export default App;



{/*<div className={"list"}>*/}
{/*    <h4> { subject[1] } <span onClick={//function*/}
{/*        () => {*/}
{/*            alertLikeNum(likeNum + 1)*/}
{/*        }*/}
{/*    }> ♥ </span> {likeNum} </h4>*/}
{/*    <p>2월 17일 발행</p>*/}
{/*    <button onClick = {*/}
{/*        () => {*/}
{/*            const newArray = [...subject]; //deep copy*/}
{/*            newArray[0] = '여자코트 추천';*/}
{/*            alertSubject(newArray);*/}
{/*        }*/}
{/*    }>alert</button>*/}
{/*    <hr/>*/}
{/*</div>*/}
{/*<div className={"list"}>*/}
{/*    <h4> { subject[0] } </h4>*/}
{/*    <p>2월 17일 발행</p>*/}
{/*    <hr/>*/}
{/*</div>*/}
{/*<div className={"list"}>*/}
{/*    <h4 onClick={*/}
{/*        () => {*/}
{/*            let bool = true*/}
{/*            alertModal(bool);*/}
{/*        }*/}
{/*    }> { subject[2] } </h4>*/}
{/*    <p>2월 17일 발행</p>*/}
{/*    <hr/>*/}
{/*</div>*/}




{/*{*/}
{/*    function repeatedUi() {*/}

{/*        let arraay = [];*/}
{/*        for (let i = 0; i < 3; i++) {*/}
{/*            arraay.push(<div>안녕</div>);*/}
{/*        }*/}
{/*        return arraay*/}
{/*    }*/}
{/*}*/}