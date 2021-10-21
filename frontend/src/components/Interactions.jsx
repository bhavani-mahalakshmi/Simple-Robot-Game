import React, { useState, useEffect } from "react";
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();


function Interactions() {
  let [currCell, setCurrCell] = useState(1);
  let [feedback, setFeedback] = useState([
    {cell: 1, value: ""}, 
    {cell: 2, value: ""}, 
    {cell: 3, value: ""}, 
    {cell: 4, value: ""}, 
    {cell: 5, value: ""}, 
    {cell: 6, value: ""},
    {cell: 7, value: ""}
  ])
  let [imageUrl, setImageUrl] = useState("images/1.png");

  
  useEffect(() => {
    const user_id = cookies.get("user_id")
    if (user_id == undefined) {
      window.alert("Please login to view this page");
      window.location = "/"
    }
  });

  const goToPrevState = () => {
    let currCellTemp = currCell - 1
    if (currCellTemp >= 1 && currCellTemp <= 7){
      setCurrCell(currCellTemp);
      setImageUrl("images/" + currCellTemp.toString() + ".png")
      console.log(imageUrl)
    }
  }

  const goToNextState = () => {
    let currCellTemp = currCell + 1
    if (currCellTemp >= 1 && currCellTemp <= 7){
      setCurrCell(currCellTemp);
      setImageUrl("images/" + currCellTemp.toString() + ".png")
      }
  }

  const submitState = () => {
    const user_id = cookies.get("user_id")
    let req = {
      "feedback": feedback
    }
    console.log(feedback)
    let url = '/update?' + 'id=' + user_id.toString()
    axios.post(url, req).then(response => {
      window.location = "/result"
    });
  }

  const increaseFeedback = () => {
    if (currCell >= 1 && currCell <= 7){
      let currCellTemp = currCell - 1
      feedback[currCellTemp]["value"] = "+"
    }
  }

  const decreaseFeedback = () => {
    if (currCell >= 0 && currCell < 7){
      let currCellTemp = currCell - 1
      feedback[currCellTemp]["value"] = "-"
    }
  }
  return (
    <div className="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src={imageUrl}
              id="board"
              alt=""
            />
          </div>
          <div>
            <p>Feedback</p>
            <button type="button" className="btn btn-primary fb-btns" onClick={() => increaseFeedback()}>+</button>
            <button type="button" className="btn btn-primary fb-btns" onClick={() => decreaseFeedback()}>-</button>
          </div>
        </div>
        <div className="mx-auto btn-toolbar col-md-10">
          <button type="button" className="btn btn-primary state-btns" onClick={() => goToPrevState()}>Previous State</button>
          <button type="button" className="btn btn-primary state-btns" onClick={() => goToNextState()}>Next State</button>
          <button type="button" className="btn btn-primary state-btns" onClick={() => submitState()}>Submit</button>
        </div>
      </div>
      
    </div>
  );
}

export default Interactions;
