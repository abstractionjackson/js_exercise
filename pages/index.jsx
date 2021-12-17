import { useState } from "react"
import PageHeader from "../components/PageHeader"
import SearchForm from "../components/SearchForm"
import SearchResultList from "../components/SearchResultList"
import Layout from '../components/Layout'
import SearchResultNav from "../components/SearchResultNav"
import { fetchCharities } from "../utils/http"

export default function Home() {

  const initialDataState = {
    charities: [],
    num_charities: 0,
    page: undefined,
    has_next_page: undefined,
    name: undefined
  }
  const [data, setData] = useState(initialDataState)
  
  const handleSearch = async (name) => {
    const newData = await fetchCharities({ name })
    setData({...data, ...newData, name})
  }
  
  const handlePageChange = async page => {
    const newData = await fetchCharities({
      name: data.name,
      page
    })
    setData({...data, ...newData})
  }

  return (
   <Layout>
     <div className="sticky top-0 border w-screen bg-gray-50 flex flex-col items-center pt-12 pb-3 shadow-sm">
      <PageHeader text="Charity!" onClick={() => setData(initialDataState)} /> 
      <SearchForm handleSearch={handleSearch} />
      { data.page !== undefined ? <SearchResultNav data={data} handlePageChange={handlePageChange} /> : null }
     </div>
     <SearchResultList data={data} handlePageChange={handlePageChange} />
   </Layout>
   
  )
}
