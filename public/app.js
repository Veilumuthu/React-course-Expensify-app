'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _IndecisionApp = require('./components/IndecisionApp.js');

var _IndecisionApp2 = _interopRequireDefault(_IndecisionApp);

require('./styles/styles.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const template = <p>This is JSX from webpack</p>;
// ReactDOM.render(template, document.getElementById('app'));

// class Header extends React.Component{
//     render(){
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subTitle}</h2>
//             </div>
//         );
//     }
// }


// class Action extends React.Component{
//     render(){
//         return(
//             <div>
//                 <button onClick={this.props.handlePick} disabled={!this.props.hasOptions}>What Should I Do?</button>
//             </div>
//         );
//     }
// }


// class Options extends React.Component{
//     render(){
//         return(
//             <div>
//             <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//             {
//                 this.props.options.map((option) => <Option key={option} optionText={option} />)
//             }
//             </div>
//         );
//     }
// }


// class Option extends React.Component{
//     render(){
//         return (
//             <div>
//                 <p>{this.props.optionText}</p>
//             </div>
//         )
//     }
// }

//Stateless Functional Componets
// Instead of using this.props here we use props only, bcz at statelss
// functional components have no access to this

// const User = (props) => {
//     return (
//         <div>
//             <h1>Name : {props.name}</h1>
//             <h2>Age : {props.age}</h2>
//         </div>
//     )
// }
// import './utils.js';
// import subtract, { square, add } from './utils.js'

// console.log(square(4));
// console.log(add(5,5));
// console.log(subtract(100,50));

// import Senior , { Adult, canDrink } from './person.js'

// console.log(Adult(15));
// console.log(canDrink(25));
// console.log(Senior(65));

// impot from third party

// import validator from 'validator';
// console.log(validator.isEmail('test@gmail.com'));

_reactDom2.default.render(_react2.default.createElement(_IndecisionApp2.default, null), document.getElementById('app'));
