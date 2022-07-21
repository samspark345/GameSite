function FilterGame(props) {

    function onFilter(event) {
        props.filterselected(event.target.value)
    }

    return (  

        <div className="filterArea">
            <select name="gameType" onChange={onFilter}>
                <option value="none">choose filter</option>
                <option value="sport">Sports</option>
                <option value="action">Action</option>
            </select>
        </div>
    );
}

export default FilterGame;

