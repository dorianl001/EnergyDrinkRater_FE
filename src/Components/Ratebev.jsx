import React, { useState, useEffect } from 'react';
import Comments from './Comments';



function Ratebev(props) {
    const [comments, setComments] = useState([]);
  let http = "https://energydrinkrater-be.herokuapp.com/comment";

  useEffect(() => {
    const getComments = () => {
      fetch(http)
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          setComments(res);
        })
        .catch((error) => {
        //   console.log(error);
        });
    };
    getComments();
  },[http]);



    return (
        <div className="ratebev">
            <h1>Ratebev</h1>
        <div className="jumbotron">
            <img src="#" alt="energy drink"/>
        </div>    

        <div id="main-container">
        <header>

          <div id = "create-comment">
            <h3 className="crud-heading">Create comment</h3>
            <form action="https://energydrinkrater-be.herokuapp.com/comment" method="post" className="postForm">
                <input type="text" placeholder="username" name="username"></input>
                <input type="text" placeholder="title" name="title"></input>
                <input type="text" placeholder="body" name="body"></input>
                <input type="submit" value="Submit"></input>
            </form>
          </div>

          <div id = "update-comment">
            <h3 className="crud-heading">Edit comment</h3>
            <form action="https://energydrinkrater-be.herokuapp.com/comment?_method=PUT" method="post" className="postForm">
                <input type="text" placeholder="id" name="id"></input>
                <input type="text" placeholder="title" name="title"></input>
                <input type="text" placeholder="body" name="body"></input>
                <input type="submit" value="Submit"></input>
            </form>
          </div>

          <div id = "Delete-comment">
            <h3 className="crud-heading">Delete Comment</h3>
            <form action="https://energydrinkrater-be.herokuapp.com/comment?_method=DELETE" method="post" className="postForm">
                <input type="text" placeholder="ID" name="id"></input>
                <input type="submit" value="Submit"></input>
            </form>
          </div>
        </header>

        <div id="content-wrap">
          <h1>
            <u>EnergyDrinkRater Timeline</u>
          </h1>
        <div>
          <Comments comments={comments}/>
        </div>
        
        </div>
      </div>
        </div>
    );
}

export default Ratebev;
