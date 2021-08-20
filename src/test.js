// const React = {
//     render: (Component) => {
//         const exampleProps = {unit: "likes"}
//         const compo = Component(exampleProps)
//         compo.render()
//         return compo
//     }
// }
// // React is a JS object with a render() method
// // Component is a function that takes in props as parameter, and also has a render() method
// // Invoking React.render() involves:
//     // A (Component) parameter in the render() call
//     // 


// let Component = (props) => {
//     return {
//         render: () => {
//             console.log("render", {
//                 type: "div",
//                 inner: props.unit
//             })
//         }
//     }
// }


// let App = React.render(Component)    // render
// // logs: render { type: 'div', inner: 'likes' }

// App = React.render(Component)    // re-render
// // logs: render { type: 'div', inner: 'likes' }


