export const Person = ({ person }) => {
    return (
        <li>
            {person.name} <span style={{marginLeft: '10px'}}>{person.number}</span>
        </li>
    )
}