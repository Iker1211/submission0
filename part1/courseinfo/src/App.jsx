const App = () => {
  const course = {
    name: 'Half Stack application development',

    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ]
  } 
  
  return (
    <>
      <Header course={course} />
      <Content course={course}/>
      <Total course={course}/>
    </>
  )
}

const Header = (props) => {
  return <h1>{props.course.name}</h1> 
}

const Content = (props) => {
  return (
    <>
      <Part1 course={props.course} /> 
      <Part2 course={props.course}/> 
      <Part3 course={props.course}/> 
    </>
  )
}

const Part1 = (props) => {
  return <p>{props.course.parts[0].name} {props.course.parts[0].exercises}</p>
}

 const Part2 = (props) => {
  return <p>{props.course.parts[1].name} {props.course.parts[1].exercises}</p> 
}

 const Part3 = (props) => {
  return <p>{props.course.parts[2].name} {props.course.parts[2].exercises}</p>
}

const Total = (props) => {
  return (
    <>
       <p>
          Number of exercises { props.course.parts[0].exercises
                               + props.course.parts[1].exercises
                               + props.course.parts[2].exercises }
        </p> 
    </>
  )
}

// la petición que hago es una propiedad del objeto props, en el siguiente nivel de la jerarquía de componentes.
// En ese sentido, props es un objeto que contiene las propiedades que se le pasan al componente.
// En ese sentido, mira de arriba hacia abajo, desde el componente padre al hijo, y no al revés.

export default App
