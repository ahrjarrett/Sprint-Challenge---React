# Answers

1. What is React JS? How does it differ from other JavaScript frameworks?

ReactJS is a framework for the frontend that encourages developers to be disiplined about state. A key feature that it uses is the virtual DOM, which wraps the DOM and creates consistency across different browsers.

2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.

The React component lifecycle is an abstraction interface for the different phases of a React component's mounting, updating and unmounting timeline. They are essentially hooks that allow us to perform various operations depending on where in the lifecycle a component is; for example, `componentDidMount` is a lifecycle method that allows us to perform operations/computations after a component has mounted, but before it has rendered. So far, we have used this particular lifecycle method to perform API calls and assign the result of the call to a component's state.

Three lifecycle methods: `componentDidMount`, `componentWillUpdate`, and `componentWillUnmount`.

3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

A class/stateful component can be created using the ES6 class syntax; in this case, a `render` method **is** required. We can also initialize state inside the `constructor` method, create custom methods, and access component lifecycle methods.

A functional/presentational component can be created by simply creating a function that takes an optional `props` argument. These components simply return JSX.

The main philosophical difference is that presentational components can access data dynamically via their props component, but have no access to state directly. That means they cannot modify/mutate state. They also have no access to lifecycle methods. Their only responsibility is rendering JSX, hence their "presentational" status. Stateful components, on the other hand, can access, change, and pass state down to other components.

4. Briefly describe PropTypes and what we use them for when building react applications.

PropTypes allow us to create type-checking/validation for React components. We use them to create a runtime check to make sure we're getting the kind of data that we're expecting. PropTypes are not used in production.

