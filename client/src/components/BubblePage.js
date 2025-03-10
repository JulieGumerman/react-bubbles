import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import NewColorForm from "./NewColorForm";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  const accessColors = () => {
     axiosWithAuth()
      .get("/colors")
      .then(res => setColorList(res.data))
      .catch(err => console.log(err));
  }

  useEffect(() => {
      accessColors();
  }, []);


  const deleteColor = (color) => {
    // make a delete request to delete this color
    axiosWithAuth().delete(`/colors/${color.id}`)
      .then(res => {
        console.log(res);
        accessColors();
      })
      .catch(err => console.log(err));

  };

  const saveEdit = (e, color) => {
    e.preventDefault();
    axiosWithAuth().put(`/colors/${color.id}`, color)
      .then(res => accessColors())
      .catch(err => console.log(err))
  };

  const newColors = (e, name, hex) => {
    e.preventDefault();
    axiosWithAuth().post("/colors", {code: {hex: hex}, color: name})
      .then(res => {
        accessColors();
      })
      .catch(err => console.log(err));
  }



  return (
    <div className="container">
      <ColorList 
        deleteColor={deleteColor} 
        colors={colorList} 
        updateColors={setColorList} 
        saveEdit={saveEdit}
      />
      <Bubbles colors={colorList} />
      <NewColorForm newColors={newColors}/>
    </div>
  );
};

export default BubblePage;
