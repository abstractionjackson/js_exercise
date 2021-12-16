export default async function search({ query: {
    name,
    results = 20,
    page = 1,
    fields = 'id,name,address,abstract'
}}, res) {
    try {
        const query = await fetch(`${process.env.API_URL}/search?name=${name}&results=${results}&page=${page}&fields=${fields}`, {
            headers: {
                'x-api-key': process.env.API_KEY
            }
        })
        res.json(query.body)
    } catch (err) {
        console.error(err)
    }
}