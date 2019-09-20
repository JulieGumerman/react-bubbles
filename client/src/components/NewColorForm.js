import React, { useState } from "react";

const NewColorForm = ({ newColors }) => {

    const [newColorName, setNewColorName] = useState("");
    const [newColorHex, setNewColorHex] = useState("");

    const handleHex = e => {
        setNewColorHex(e.target.value);
        console.log(newColorHex);
    }

    const handleColor = e => {
        setNewColorName(e.target.value)
    }

    return (
        <>
        <h3>Add new colors.</h3>
        <form onSubmit={e => newColors(e, newColorName, newColorHex)}>
            <input type="text" placeholder="name" value={newColorName} onChange={e => handleColor(e)}/>
            <input type="text" placeholder="hex code" value={newColorHex} onChange={e => handleHex(e)}/>
            <button></button>
        </form>
        </>
    );
}

export default NewColorForm;