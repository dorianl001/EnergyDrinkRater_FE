import React from 'react';
import Date from './Date';

function Comment({ comment }) {
    return (
        <div className="card-body">
        <div className="Date">
          <p>Created on:</p>
          <Date />
        </div>
        <div>
          <p className="card-text">username: {comment.username}</p>
        </div>
        <div>
          <p className="card-text">comment id: {comment._id}</p>
        </div>
        <div>
          <p className="card-title">{comment.title}</p>
        </div>
        <div>
          <p className="card-text">{comment.body}</p>
        </div>
      </div>  
    );
}

export default Comment;
