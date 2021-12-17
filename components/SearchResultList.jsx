export default function SearchResultList({ data }) {
    return (
            <ul className="container sm:w-full md:w-2/3 border-x p-3">
                {data.charities.map(({
                name,
                address: {
                    city,
                    state
                },
                id,
                abstract: {
                    text
                },
                publicURL
                }) => (
                <li key={id} className="py-3 border-b-4">
                    <a className="text-xl text-blue-400 underline hover:text-blue-500" href={publicURL} >{name}</a>
                    <p className="text-md text-gray-400 italic">{city}, {state}</p>
                    <p>{text.length < 120 ? text : `${text.slice(0,120)}...`}</p>
                </li>
                ))}
            </ul>
    )
}