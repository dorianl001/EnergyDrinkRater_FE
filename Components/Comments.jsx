import React from 'react';
import Comment from './Comment';


function Comments(comments) {
    console.log(comments)
    return (
        <div>
           {comments.comments.map((item) => (
               <Comment key={item._id} comment={item} />
           ))} 
        </div>
    );
}

export default Comments;