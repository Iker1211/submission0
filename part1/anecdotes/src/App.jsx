import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0)) // Convertir votes en estado
  const [selected, setSelected] = useState(0)

const generateRandomNumber = () => {
  let randomNumber = Math.round(Math.random() * anecdotes.length) 
  if (randomNumber === anecdotes.length) {
    randomNumber = 0 
  }
  return randomNumber
} 

const handleNextAnecdote = () => { 
  let randomNumber = generateRandomNumber()
  setSelected([randomNumber])
}

const handleUpvote = () => {
  const updatedVotes = [...votes] // Crear una copia del array de votos
  updatedVotes[selected] += 1 // Incrementar el voto del anecdote seleccionado
  setVotes(updatedVotes)
}

const Winner = () => {
  return (
    <div>
      <p>{anecdotes[[...votes].indexOf(Math.max(...votes))]}</p>
      <p>has {votes[[...votes].indexOf(Math.max(...votes))]}</p>
    </div>
  )
}

  return (
    <div>
      <h1>Anecdote of the Day</h1>
      {anecdotes[selected]}
      <br></br>
      <p>has {votes[selected]} votes</p>
      <br></br>
      <button onClick={ () => handleUpvote()}>upvote</button>
      <button onClick={ () => handleNextAnecdote()}>next anecdote</button>
      <h2>Anecdote with most Upvotes</h2>
      <Winner />
    </div>
  )
}

export default App
