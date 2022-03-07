# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is `this` in JavaScript?

  Your answer: "This" refers to the object that you are working within. What that means is that you can target properties and methods within your object. For an example, if you wanted to you could define an object and have a key value of {first: "Rick"} and assign a new key value pair of {fullName: this.first + " Sanchez"}. We would then have {fullName: "Rick Sanchez"} in our object.

  Researched answer: The "this" keyword refers to an object. When used alone and in a function, "this" refers to the global object. You can use dot notation to access properties and methods on "this" because it is referencing an object. It's an important notice that "this" is not a variable, it's a keyword.

2. What is React? Why would you use it?

  Your answer: React is a javascript frontend library that was made by Facebook. It is very useful for "scaling" apps. This is because you can make reusable components. Another reason React is so popular is because you can render changes to the webpage without refreshing the entire page. React has three life cycles that include mounting, unmounting, and updating.

  Researched answer: An interesting thing I learned is that JSX is not required for React. React is open source and is good for single page applications. It is used for handling apps for the web and mobile apps. React allows the process of creating reusable UI components.

3. Which lifecycle method is required in a React class component?

  Your answer: The render method is required. This render method needs a return of what to render from the component to the webpage.

  Researched answer: You will see the render() method is all React class components. The render method is the only required method in a class.

4. What is JSX? What is one notable difference between HTML and JSX?

  Your answer: JSX differs from HTML mainly because you can write JavaScript code within it. Sort of like a mix of HTML and JavaScript. More things you can do in JSX include adding empty fragments, adding components and using self-closing tags.

  Researched answer: JSX stands for JavaScript Syntax Extension. It allows developers to write JavaScript code directly into HTML. Since the reserved keywords of html need to be kept intact, this is why we use "className" for class attributes and "HTMLFor" instead of for attributes. The most notable difference is that JSX expects a single return of a parent element.

5. What is yarn? What file(s) are modified in a React application when you run yarn?

  Your answer: Yarn is a package manager that allows you to install additional dependencies from outside sources. A yarn.lock file will be generated as well as a package.json file when you use `$ yarn add <dependency-name>`. All the installed additional code will be put inside of the node_modules folder. When you clone a repository from Github and it already contains a package.json file, you can use `$yarn` to install all the dependencies that are listed in that file.

  Researched answer: Yarn is a package manager for JavaScript. Whenever yarn installs a package it caches it, which makes for quicker installations over other package managers such as npm.

6. STRETCH: What is an anonymous function in JavaScript?

  Your answer: I believe an anonymous function is a function that is not defined by a variable name. An example of this could be a callback function. It's a function that is used in only one place so it does not need a name to be called anywhere else.

  Researched answer: An anonymous function is a function without a name. Anonymous functions need to be wrapped in parentheses or you'll get a syntax error. Anonymous functions are not accessible after creation, therefore no need to assign it to a variable.

## Looking Ahead: Terms for Next Week

1. Conditional rendering: Rendering something to the webpage based on a condition. Such as login/logout button depending on if the user is logged in or out.

2. Props: Arguments that are passed into React components. Props stand for properties.

3. JavaScript Events: Events provide dynamic interface to a webpage. Events are bound to elements in the DOM.

4. Object-oriented programming: Programming that relies on the concept of objects. These objects are the cross section of behavior and data.

5. Ruby: Ruby is an object-oriented scripting language primarily used for web applications. It is thought to be similar to Python.
