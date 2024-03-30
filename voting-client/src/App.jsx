import Voting from './components/Voting';
import './App.css'

function App() {
  const pair = ['Trainspotting', '28 Days Later']

  return (
    <div>
      <Voting pair={pair} />
    </div>
  )
}

export default App
