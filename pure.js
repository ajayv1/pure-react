const Person = props => {
  return React.createElement(
    "div",
    {},
    [
      React.createElement("h1", {className: "person"}, props.name),
      React.createElement("h1", {className: "tech"}, props.developer),
    ]
  )
};

// using class component
class App extends React.Component {
  render() {
    return React.createElement(
      "div", 
      {},
      [
        React.createElement("h1", {className: "pure"}, "Not using Create-react-app"),
        React.createElement(Person, {name: "Ajay", developer: "javascript"}, "")
      ] 
    ) 
  }
}


// using functional component
// const App = () => {
//   return React.createElement(
//     "div", 
//     {},
//     [
//       React.createElement("h1", {className: "pure"}, "Not using Create-react-app"),
//       React.createElement(Person, {name: "Ajay", developer: "javascript"}, "")
//     ] 
//   )
// }

ReactDOM.render(
  React.createElement(App),
  document.getElementById('root')
);