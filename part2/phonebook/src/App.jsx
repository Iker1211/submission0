import { Filter } from './components/Filter'
import { Form } from './components/Form'
import { List } from './components/List'
import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', id: "1", number: "040-123456" },
    { name: 'Ada Lovelace', id: 2, number: '39-44-5323523' },
    { name: 'Dan Abramov', id: 3, number: '12-43-234345' },
    { name: 'Mary Poppendieck', id: 4, number: '39-23-6423122' }
  ]) 

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setNewFilter] = useState('')

  const personToShow  = persons.filter(person =>
    person.name.toLowerCase().includes(filter)
  );

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilter =(event) => {
    let value = event.target.value
    setNewFilter(value.toLowerCase())
  }

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber,
      id: String(persons.length + 1)
    }

    if (persons.some((person) => person.name === nameObject.name)) {
      alert(`${nameObject.name} is already added to phonebook`)
      return
    }

    if (persons.some((person) => person.number === nameObject.number)) {
      alert(`${nameObject.number} is already added to phonebook`)
      return
    }

    setPersons(persons.concat(nameObject))
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter  handleFilter={handleFilter} />
      <Form 
        addName={addName}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>
      <List persons={personToShow} />
    </div>
  )
}

export default App