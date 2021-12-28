export default function SearchResultNav({
    data: {
        name,
        num_charities,
        page,
        has_next_page
    },
    handlePageChange
}) {
    const CHARITIES_PER_PAGE = 10;

    const getNumPages = () => Math.ceil(num_charities/CHARITIES_PER_PAGE)

    const getNextPages = () => {
        //return an array of link data
        //eg { page: int }
        //to be passed to a mapping fn that renders nav links
        const arr = []
        for (let i = page + 1; i <= getNumPages(); i++) {
            arr.push(i)
        }
        if (arr.length > 3) {
            arr.splice(2,arr.length - 3)
        }
        return arr;
    }

    const getPrevPages = () => {
        const arr = [];
        for (let i = page - 1; i >= 1; i--) {
            arr.unshift(i)
        }
        if (arr.length > 3) {
            arr.splice(1, arr.length - 3)
        }
        return arr
    }

    const transformPages = (cur_page, i, arr) => {
        return (
            <>
                {cur_page - page > 3 ? <span>...</span> : null}
                <p className="text-xl mx-2 text-gray-500 hover:text-gray-800" onClick={()=>handlePageChange(cur_page)}>{cur_page}</p>
                {page - cur_page > 3 ? <span>...</span> : null}
            </>
        )
    }

    return (
        <nav className="flex flex-col pt-3">
            <h1 className="text-lg mx-auto">Found  <b>{num_charities}</b> named <i className="text-pink-400">{name}</i>...</h1>
            <ul className="flex justify-center">
                <button className="text-xl font-bold text-blue-400 hover:text-blue-500" onClick={() => handlePageChange(page - 1)} disabled={page <= 1}>{"< Previous"}</button>
                {
                    getPrevPages().map(transformPages)
                }
                <p className="text-xl underline mx-2 text-gray-500">{page}</p>
                {
                    getNextPages().map(transformPages)
                }
                <button className="text-xl font-bold text-blue-400 hover:text-blue-500" onClick={() => handlePageChange(page + 1)} disabled={!has_next_page}>{"Next >"}</button>
            </ul>
        </nav>
    )
}