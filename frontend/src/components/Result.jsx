import React, { useEffect, useState } from "react";
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

function Result() {
  const [email, setEmail] = useState("");
  const [name, setname] = useState("");
  const [feedback, setFeedback] = useState("");
  
  useEffect(()=>{
    const user_id = cookies.get("user_id")
    if (user_id == undefined) {
      window.alert("Please login to view this page");
      window.location = "/"
    }
    const url = '/list?' + 'id=' + user_id.toString()
    axios.get(url).then(response => {
      console.log("SUCCESS", response.data.email)
      setEmail(response.data.email)
      setname(response.data.name)
      console.log(response.data.feedback)
      let fb = response.data.feedback["feedback"].map( ( {cell, value} ) => {
        return <tr> <td>{cell}</td> <td>{value}</td> </tr>

    });
    setFeedback(fb)
    }).catch(error => {
      console.log(error)
    })

  }, [])

  return (
    <div className="contact">
      <div className="container">
        <div className="row align-items-center">
          <div><br/><br/><br/><br/> </div>
            <h1 className="font-weight-light">Feedback given by user <b>{name}</b></h1>
        </div>
        <div className="row justify-content-center">
          <div className="col-auto">
            <table className="tg row align-items-center">
            <thead>
              <tr>
                <td><b>Cell</b></td>
                <td><b>Value</b></td>
              </tr>
              {feedback}
            </thead>
          </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
