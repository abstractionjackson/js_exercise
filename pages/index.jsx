import { useState } from "react"
import { fetchCharities } from "../utils/http"

export default function Home() {

  // Search Input
  const initialInputState = ''
  const [input, setInput] = useState(initialInputState)
  const handleChange = e => setInput(e.target.value)
  const handleSubmit = e => {
    e.preventDefault()
    fetchCharities({
      name: input,
      cb: setData
    })
  }

  // Search Results
  const initialDataState = {
    charities: [],
    num_charities: 0,
    page: undefined,
    has_next_page: undefined
  }
  const [data, setData] = useState(initialDataState)

  // Page Change
  const handlePageChange = page => fetchCharities({
    name: input,
    page,
    cb: setData
  })
  return (
   <div>Hello, world!
     <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} placeholder="Find a charity..." value={input} />
     </form>
     <div>
       <button onClick={() => handlePageChange(data.page - 1)} disabled={data.page === 1}>Prev.</button>
       <p>{data.page}</p>
       <button onClick={() => handlePageChange(data.page + 1)} disabled={!data.has_next_page}>Next</button>
     </div>
     <ul>
       {data.charities.map(({
         name,
         address: {
           city,
           state
         },
         id,
         abstract: {
           text
         }
       }) => (
         <li key={id}>
           <h1>{name}</h1>
           <p>{city}, {state}</p>
           <p>{text.length < 120 ? text : `${text.slice(0,120)}...`}</p>
         </li>
       ))}
     </ul>
   </div>
   
  )
}
