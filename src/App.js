import React from "react";
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
function FuncComp(num) {
  return (
    <div className="container">
      <h2>function style component</h2>
      <p>Number : {num.initNumber}</p>
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
  };
  render() {
    return (
      <div className="container">
        <h2>class style component</h2>
        {/* state 사용 */}
        <p>Number : {this.state.number}</p>
        <input
          type="button"
          value="random"
          onClick={function () {
            // state의 변경
            this.setState({ number: Math.random() });
          }.bind(this)}
        ></input>
      </div>
    );
  }
}

export default App;
