import React, { useState, useEffect } from 'react';
import Comments from './Comments';



function Ratebev(props) {
    const [comments, setComments] = useState([]);
  let http = "https://energydrinkrater-be.herokuapp.com";

    const [body, setBody] = useState({body: " ", title: " ", username: " "});

    const [id, setId] = useState({id: ""})

    const bodyChange = (event) => {
        setBody({...body, [event.target.className]: event.target.value})
    }

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


  async function createComment(event) {
    event.preventDefault();
    await fetch("https://energydrinkrater-be.herokuapp.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      id: id.id,
      title: body.title,
      body: body.body
    })  
    })
    .then ((res) => res.json())
    .then ((res) => {
        setComments(res);
    }) 
    .catch((error) => {
      // console.log(error);
    })
    console.log(body)
  } 


  async function editComment(event) {
    event.preventDefault();
    await fetch("https://energydrinkrater-be.herokuapp.com", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)  
    })
    .then ((res) => res.json())
    .then ((res) => {
        setId(res);
    }) 
    .catch((error) => {
      // console.log(error);
    })
    console.log(body)
  } 


  async function deleteComment(event) {
    event.preventDefault();
    await fetch("https://energydrinkrater-be.herokuapp.com", {
    method: "delete",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)  
    })
    .then ((res) => res.json())
    .then ((res) => {
        setId(res);
    }) 
    .catch((error) => {
      // console.log(error);
    })
    console.log(body)
  } 


    return (
        <div className="ratebev">
            <h1>Ratebev</h1>

        <div id="main-container">
        <header>

          <div id = "create-comment">
            <h3 className="crud-heading">Create comment</h3>
            <form method="post" className="postForm">
                <input className="username" onChange={bodyChange} type="text" placeholder="username"></input>
                <input className="title" onChange={bodyChange} type="text" placeholder="title"></input>
                <textarea className="body" onChange={bodyChange} type="text" placeholder="body"></textarea>
                <input onClick={createComment} type="submit" value="Submit"></input>
            </form>
          </div>

          <div id = "edit-comment">
            <h3 className="crud-heading">Edit comment</h3>
            <form action="https://energydrinkrater-be.herokuapp.com/?_method=PUT" method="post" className="postForm">
                <input className="id" onChange={bodyChange} type="text" placeholder="id"></input>
                <input className="title" onChange={bodyChange} type="text" placeholder="title"></input>
                <textarea className="body" onChange={bodyChange} type="text" placeholder="body"></textarea>
                <input onClick={editComment} type="submit" value="Submit"></input>
            </form>
          </div>

          <div id = "Delete-comment">
            <h3 className="crud-heading">Delete Comment</h3>
            <form action="https://energydrinkrater-be.herokuapp.com/comment?_method=DELETE" method="post" className="postForm">
                <input className="id" onClick={deleteComment} onChange={bodyChange} type="text" placeholder="ID"></input>
                <input type="submit" value="Submit"></input>
            </form>
          </div>
        </header>

        <div id="content-wrap">
        <div>
          <Comments comments={comments}/>
        </div>
        
        </div>
      </div>
        </div>
    );
}

export default Ratebev;
