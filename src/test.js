const React = {
    render: (Component) => {
        const exampleProps = {unit: "likes"}
        const compo = Component(exampleProps)
        compo.render()
        return compo
    }
}


let Component = (props) => {
    return {
        render: () => {
            console.log("render", {
                type: "div",
                inner: props.unit
            })
        }
    }
}


let App = React.render(Component)    // render
// logs: render { type: 'div', inner: 'likes' }

Component = (props) => {
    return {
        render: () => {
            console.log("render", {
                type: "p",
                inner: props.unit
            })
        }
    }
}

App = React.render(Component)    // re-render
// logs: render { type: 'div', inner: 'likes' }
