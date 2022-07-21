function ChooseLang(props) {

    function onNewLang(event) {
        props.handleLang(event.target.value)
    }

    return (  

        <div className="filterArea">
            <select name="languages" onChange={onNewLang}>
                <option value="en">En</option>
                <option value="fr">Fr</option>
            </select>
        </div>
    );
}

export default ChooseLang;

