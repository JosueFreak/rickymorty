import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import Locationinfo from './components/Locationinfo'
import Pagination from './components/Pagination'
import ResidentForm from './components/ResidentForm'
import ResidentList from './components/ResidentList'
import { numbersPage } from './utils/handlePaginations'
import { getRandomNumber } from './utils/handleRandom'

const RESIDENTS_PERPAGE = 12;

function App() {

  const [location, setLocation] = useState()
  const [nameLocation, setNameLocation] = useState("")
  const [page, setPage] = useState(1)

  const handleSubmit = (e) => {
    e.preventDefault()
    setNameLocation(e.target.idLocation.value)
  }

  const pagination = () => {
    const maxLimit = page * RESIDENTS_PERPAGE;
    const minLimit = maxLimit - RESIDENTS_PERPAGE;
    const newResidents = location?.residents.slice(minLimit, maxLimit);
    return newResidents
  }

  useEffect(() => {
    setPage(1)
    const dimension = nameLocation === '' ? getRandomNumber(126) : nameLocation
    const URL = `https://rickandmortyapi.com/api/location/${dimension}`
    axios.get(URL)
      .then((res) => setLocation(res.data))
      .catch((err) => console.log(err))
  }, [nameLocation])

  return (
    <div className="App">
      <header className='imagendefondo'></header>
      <ResidentForm handleSubmit={handleSubmit}/>
      <Locationinfo location={location} />
      <Pagination location={location} RESIDENTS_PERPAGE={RESIDENTS_PERPAGE} numbersPage={numbersPage} setPage={setPage} />
      <ResidentList pagination={pagination} />
      <Pagination location={location} RESIDENTS_PERPAGE={RESIDENTS_PERPAGE} numbersPage={numbersPage} setPage={setPage} />
    </div>
  )
}

export default App
