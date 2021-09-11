# Getting Started With My Project!

## Week 1

In week 1, we discussed the basics of React. I want to introduce to you a project that I am doing for COMP-3330 in week 1. I am going to build a simple app that uses typescript, ternary oporators, state, and a button to change dark theme to light theme!

### ES6 Usage Examples

the latest Ecma Script update, EC6, brought with it a range of really cool new features to use in our javascript, or in some cases, typescript programming. In this project, I used the following EC6 features:

Arrow Function: <pre><code>const changeTheme = () => {
    lightThemed ? isLightThemed(false) : isLightThemed(true)
  }</code></pre>

### Typescript

Typescript is involved in the project, but do not worry, simply using ```npm install``` when you enter the project solves any sort of dependency problems. To install typescript in a react-app of your own, visit this [link.](https://create-react-app.dev/docs/adding-typescript/)

### Ternary

[Ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) is used to check a condition that returns a boolean, and then executes code based on whether it is true or false. Ternary can look at a boolean directly, or it can look at a comparison, as it always resorts to a boolean. In my code, I did not use a comparison, just a straight boolean. 

In the code ``` const theme = lightThemed ? 'dark' : 'light' ``` I am asking javascript to evaluate the first statement, <code>lightThemed</code>, and if its true, return 'dark'. If <code>lightThemed</code> is false, return 'light'. I am using it in this instance to assign a string to a variable depending on the falsity of <code>lightThemed</code>. I use this code to change which word is use in a sentence, which I explain in my ternary-state section.

### State

State is used to update a component. Updating a component re-renders it, but with the re-rendered value. </br>
For example, in the following code, we will destructure our state variable and our component-updating function (as described in the [docs](https://reactjs.org/docs/hooks-state.html)) and give it an initial value of a boolean.
</br>

<code>const [lightThemed, isLightThemed] = React.useState(true)</code>

<code>lightThemed</code> is a boolean, and <code>isLightThemed</code> takes in a boolean, and sets <code>lightThemed</code> as such. 

Like this: <code>isLightThemed(false)</code>

### Ternary + State

Ternary and state work very well together for various reasons, but I want to go over what I am using in this app. I use ternary and state because when you use state to re-render a component, the entire component is reloaded, thus re-running whatever code is inside it. When we change the <code>lightThemed</code> to false and back to true using <code>isLightThemed(false)</code> and <code>isLightThemed(true)</code> , we reload the function, but with <code>lightThemed</code> changed to the variable we set. This means the when ``` const theme = lightThemed ? 'dark' : 'light' ``` is read, depending on what the state variable is at the time, true or false, a different word will be put into the variable ``` theme ```.

My app has a button that you press that changes the theme from light to dark. Not only do the colours change, but so do the words! This is the power of ternary and state, mixed with css transitions.


Please feel free to check out my website too, which is currently just a work in progress. [RyanColl](https://rcoll-fullstack-dev.web.app/)