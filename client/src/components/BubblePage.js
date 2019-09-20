import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

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




  return (
    <>
      <ColorList 
        deleteColor={deleteColor} 
        colors={colorList} 
        updateColors={setColorList} 
        saveEdit={saveEdit}
      />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
