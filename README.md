# Dev Stack

Dev Stack Builder is a React-based website where users can explore different development technologies and create their own technology stack. The project uses JSON data to display technology information and provides an interactive stack-building experience.

## Technologies Used

- React.js
- JavaScript
- Tailwind CSS
- React-Toastify
- JSON
- Vite

## Features

- Explore different development technologies with their category, difficulty, rating, and description.
- Add technologies to a personal stack and remove them when needed.
- Responsive design for desktop, tablet, and mobile devices with toast notifications for user actions.

## React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript. It makes React components easier to write and understand.

### 2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component. State is data managed inside a component that can change over time.

### 3. What does `useState` do, and where did you use it in the project?

`useState` lets a component store and update data. I used it to keep track of the technologies selected in the user's stack.

### 4. What does `useEffect` do, and why is it needed for loading JSON?

`useEffect` runs code after a component renders. I used it to fetch the technology data from the JSON file when the app loads.

### 5. Why does each item in `.map()` need a unique `key`?

A unique `key` helps React identify each item in a list. It helps React update the list correctly when something changes.

### 6. What is conditional rendering? Where did you use it in the project?

Conditional rendering means showing different content based on a condition. I used it to show the empty stack message when no technology is selected and the selected technologies when the stack has items.

### 7. How does parent → child data and child → parent communication work?

The parent sends data to a child using props. For child → parent communication, the parent passes a function as a prop, and the child calls that function to send data or an action back to the parent.

## Project Links

- GitHub Repository:
- Live Site: 

## Project Purpose

This project was built to practice React fundamentals such as components, props, state management, `useState`, `useEffect`, conditional rendering, list rendering with `.map()`, and communication between React components.