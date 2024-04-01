import { Routes, Route } from 'react-router-dom'
import Voting from './components/Voting'
import './App.css'
import Results from './components/Results'

function App() {
  const pair = ['Trainspotting', '28 Days Later']
  const tally = {'Trainspotting': 5, '28 Days Later': 4}

  return (
    <div>
      <Routes>
        <Route path='/' element={<Voting pair={pair} tally={tally} />} />
        <Route path='/results' element={<Results />} />
      </Routes>
    </div>
  )
}

export default App
