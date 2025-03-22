const SearchBar = () => {
    return (
        <>
            <div className="search-bar">
                <h1>
                    Find <span>Movies</span> You’ll Love Without the Hassle
                </h1>
                <form>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Search through 300+ movies online" />
                    </div>
                </form>
            </div>
        </>
    )
}

export default SearchBar;
