import { useState } from 'react'
export default function SearchForm({ handleSearch }) {
    const initialNameState = '';
    const [name, setName] = useState(initialNameState)
    const handleChange = e => setName(e.target.value)
    const handleSubmit = e => {
        e.preventDefault()
        handleSearch(name)
        setName(initialNameState) 
    }

    return (
    <form className="p-3" onSubmit={(e) => handleSubmit(e, name)}>
        <input className="mr-3 p-1 shadow focus:outline-none focus:ring focus:ring-pink-300" type="text" id="name" onChange={handleChange} placeholder="Find a charity..." value={name} />
        <button className="p-1 bg-gray-200 hover:border hover:border-gray-300  focus:outline-none focus:border focus:border-gray-300" type="submit">Search</button>
     </form>
    )
}