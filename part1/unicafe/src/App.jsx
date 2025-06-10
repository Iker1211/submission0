import { useState } from 'react'

const Button = ({handleClick, text}) =>  <button onClick={handleClick}>{text}</button>

const StatisticLine = ({text, value}) => {

  return (
    <table>
      <tbody>
        <tr><td style={{minWidth: "75px"}} >{text}</td><td>{value}</td></tr>
      </tbody>
  </table>
  )
}

const Statistics = ({good, neutral, bad, all, average, positivePercentage})  => {

  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>
        <h2>Statistics</h2>
        <StatisticLine text="No feedback given" />
      </div>
    )
  }

  return (
    <div>
      <h2>Statistics</h2>
          <StatisticLine text="Good: "  value={good}/>
          <StatisticLine text="Neutral: "  value={neutral}/>
          <StatisticLine text="Bad: "  value={bad}/>
          <StatisticLine text="All: "  value={all}/>
          <StatisticLine text="Average: " value={average.reduce((sum, current) => sum + current, 0) / average.length}/>
          <StatisticLine text="Positive: " value={((positivePercentage.length / all ) * 100) + '%'}/>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState([])
  const [positivePercentage, setPositivePercentage] = useState([]);

  const handleGoodClick = () => {
    setGood(good + 1);
    setAll(all + 1);
    setAverage(average.concat(1));
    setPositivePercentage(positivePercentage.concat(1));
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
    setAll(all + 1);
    setAverage(average.concat(0));
  }

  const handleBadClick = () => {
    setBad(bad + 1);
    setAll(all + 1);
    setAverage(average.concat(-1));
  }

  return (
    <div>
      <h1>Give feedback</h1>

      <Button handleClick={handleGoodClick} text="good"/>
      <Button handleClick={handleNeutralClick} text="neutral"/>
      <Button handleClick={handleBadClick} text="bad"/>

      <Statistics 
        good={good} 
        neutral={neutral} 
        bad={bad} 
        all={all} 
        average={average} 
        positivePercentage={positivePercentage}
      />
    </div>
  )
}

export default App
