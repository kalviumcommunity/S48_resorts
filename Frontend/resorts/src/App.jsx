import './App.css'
import Landingpage from './Components/Landingpage'
import ResortsListspage from './Components/ResortsListspage'
import { Route,Routes} from 'react-router-dom';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/resortslist" element={<ResortsListspage />} />
      </Routes>
    
    </>
  )
}

export default App
