export const fetchCharities = async ({
    name,
    page = 1,
    cb
}) => {
    try {
      const query = await fetch(`/api/search?name=${name}&results=10&page=${page}`)
      const data = await query.json()
      //parse the data
      data.page = parseInt(data.page)
      cb(data)
    } catch (err) {
      console.error(err)
    }
  }