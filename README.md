# Monster Rolodex Project

This project was created in the course provided by the ZTM academy. In this project I learned the basics and fundamentals for React and how it works under the hood. This project was the prerequisite to the project Crown Clothing which is a React ecommerce application. 

In this Monster Rolodex project, we fetch from the [JSON Placeholder API (users)](https://jsonplaceholder.typicode.com/users) to grab a list of names and emails. In conjunction with this, we used the [Robohash API](https://robohash.org/) to generate unique images for each user it was given. Each user was displayed as a card to where we then used a search field to filter the monsters to the matching string.

Even though it was very basic, many things were learned. For example:

- Props and the Virtual Dom
- How React has a one way data flow
- Component based structure
- Class components vs functional components with hooks
- How React renders and rerenders based off of state and props.
- `useState` to handle the array of users and input.
- Shallow merge in setting the state
- `useEffect` to create side effects to initiate a rerender after the users have finished being fetched. 
- Empty arrays as useEffect dependencies as to only run the method once.
- Immutability, by creating a new object of filtered monsters as to always have an original copy of the data.
- PropTypes for type enforcing.