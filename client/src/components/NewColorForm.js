import React, { useState } from "react";

const NewColorForm = ({ newColors }) => {

    const [newColorName, setNewColorName] = useState("");
    const [newColorHex, setNewColorHex] = useState("");

    const handleHex = e => {
        setNewColorHex(e.target.value);
    }

    const handleColor = e => {
        setNewColorName(e.target.value)
    }

    return (
        <div className="add-color">
        <h3>Add new colors.</h3>
        <form onSubmit={e => newColors(e, newColorName, newColorHex)}>
            <label>Name: 
                <input type="text" placeholder="name" value={newColorName} onChange={e => handleColor(e)}/>
            </label>
            <label>Hex code: 
                <input type="text" placeholder="hex code" value={newColorHex} onChange={e => handleHex(e)}/>
            </label>
            <button className="add-submit">Submit your color!</button>
        </form>
        </div>
    );
}

export default NewColorForm;