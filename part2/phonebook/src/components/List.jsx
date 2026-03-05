import { Person } from './Person'

export const List = ({ persons }) => {
    return (
        <ul>
            {persons.map(person => (
                <Person key={person.id} person={person} />
            ))}
        </ul>
    )
};