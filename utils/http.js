export const fetchCharities = async ({
    name,
    page = 1,
    fields = 'id,name,abstract,address,publicURL'
}) => {
    try {
      const query = await fetch(`/api/search?name=${name}&results=10&page=${page}&fields=${fields}`)
      const data = await query.json()
      //parse the data
      data.page = parseInt(data.page)
      return data
    } catch (err) {
      console.error(err)
    }
  }