# Getting Started With My Project!

## Week 1

In week 1, we discussed the basics of React. I want to introduce to you a project that I am doing for COMP-3330 in week 1. I am going to build a simple app that uses typescript, ternary oporators, state, and a button to change dark theme to light theme!

### Typescript

Typescript is involved in the project, but do not worry, simply using npm install when you enter the project solves any sort of dependency problems. To install a react-app in a typescript project of your own, visit this [link.](https://create-react-app.dev/docs/adding-typescript/)

### Ternary

Ternary operator is used to check a condition that returns a boolean, and then executes code based on whether it is true or false. Ternary can look at a boolean directly, or it can look at a comparison, as it always resorts to a boolean. In my code, I did not use a comparison, just a straight boolean. 

In the code ``` const theme = !lightThemed ? 'light' : 'dark' ```

### State

State is used to update a component. Updating a component re-renders it, but with the re-rendered value. </br>
For example, in the following code, we will destructure our state variable and our component-updating function (as described in the [docs](https://reactjs.org/docs/hooks-state.html)) and give it an initial value of a boolean.
</br>

<code>const [lightThemed, isLightThemed] = React.useState(true)</code>

<code>lightThemed</code> is a boolean, and <code>isLightThemed</code> takes in a boolean, and sets <code>lightThemed</code> as such. 

Like this: <code>isLightThemed(false)</code>
