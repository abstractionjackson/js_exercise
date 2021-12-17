export default function SearchResultNav({
    data: {
        name,
        num_charities,
        page,
        has_next_page
    },
    handlePageChange
}) {
    return (
        <nav className="flex flex-col pt-3">
            <h1 className="text-lg">Found  <b>{num_charities}</b> named <i className="text-pink-400">{name}</i>...</h1>
            <ul className="flex justify-center">
                <button className="text-xl font-bold text-blue-400 hover:text-blue-500" onClick={() => handlePageChange(page - 1)} disabled={page <= 1}>{"< Previos"}</button>
                <p className="text-xl mx-2 text-gray-500">{page}</p>
                <button className="text-xl font-bold text-blue-400 hover:text-blue-500" onClick={() => handlePageChange(page + 1)} disabled={!has_next_page}>{"Next >"}</button>
            </ul>
        </nav>
    )
}