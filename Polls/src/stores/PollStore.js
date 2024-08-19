//this is a store for data
import { writable } from "svelte/store";
//a store is more or less like useEffect in react
//it is a way to store data that can be accessed by multiple components
//writeable is a function that creates a store

const PollStore = writable([
    {
        id: 1,
        question: 'Python or Javascript',
        answerA: 'Python',
        answerB: 'Javascript',
        votesA: 10,
        votesB:15,
    }
])

export default PollStore;