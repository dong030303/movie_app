import React from 'react';
import './login.css';

const Login = () => {
    return (
        <div className="App">
            <header id="loginHeader">
                <div id="headIcon"></div>
                <h1 id="title">트위터 로그인</h1>
            </header>
            <div id="inputField">
                <form>
                    <div id="idContainer">
                        <label for="inputId" id="idLabel">이메일</label><br></br>
                        <input type="email" id="inputId"></input><br></br>
                    </div>
                    <div id="blank"></div>
                    <div id="pwContainer">
                        <label for="inputPw" id="pwLabel">비밀번호</label><br></br>
                        <input type="password" id="inputPw"></input>
                    </div>
                </form>

            </div>
            <div>
                <input type="button" id="summitBtn" value="로그인"></input>
                <p id="signUp">트위터 가입하기</p>
            </div>
        </div>
    );
};

export default Login;