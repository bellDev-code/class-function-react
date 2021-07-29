import React, { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>hello world!</h1>
      {/* initNumber을 컴포넌트에 넣어줌 */}
      <FuncComp initNumber={2}></FuncComp>
      <ClassComp initNumber={2}></ClassComp>
    </div>
  );
}

// 자기 자신이 render 된다.
function FuncComp(props) {
  // useState를 쓰면 2개의 값을 가진 배열이 선언된다. 인자로 초기값
  // const numberState = useState(props.initNumber);
  // const number = numberState[0];
  // const setNumber = numberState[1];

  // 위의 코드의 축약형이다.
  const [number, setNumber] = useState(props.initNumber);

  // const dateState = useState(new Date().toString());
  // const date = dateState[0];
  // const setDate = dateState[1];

  // 위의 코드의 축약형이다.
  const [date, setDate] = useState(new Date().toString());

  return (
    <div className="container">
      <h2>function style component</h2>
      <p>Number : {number}</p>
      <p>Date : {date}</p>
      <input
        type="button"
        value="random"
        onClick={function () {
          setNumber(Math.random());
        }}
      ></input>
      <input
        type="button"
        value="date"
        onClick={function () {
          setDate(new Date().toString());
        }}
      ></input>
    </div>
  );
}

// render method를 정의해서 리턴 값이 UI가 된다.
// function component에서 state 초기화, 사용, 변경이 안됐다.
// 그러나, hook을 통해 function component에서도 쓸 수 있다.
class ClassComp extends React.Component {
  // state 초기화
  state = {
    number: this.props.initNumber,
    date: new Date().toString(),
  };
  componentWillMount() {
    console.log("class => componentWillMount");
  }
  componentDidMount() {
    console.log("class => componentDidMount");
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("class => shouldComponentUpdate");
    return true;
  }
  render() {
    console.log("class => render");
    return (
      <div className="container">
        <h2>class style component</h2>
        {/* state 사용 */}
        <p>Number : {this.state.number}</p>
        <p>Date: {this.state.date}</p>
        <input
          type="button"
          value="random"
          onClick={function () {
            // state의 변경
            this.setState({ number: Math.random() });
          }.bind(this)}
        ></input>
        <input
          type="button"
          value="date"
          onClick={function () {
            this.setState({ date: new Date().toString() });
          }.bind(this)}
        ></input>
      </div>
    );
  }
}

export default App;
