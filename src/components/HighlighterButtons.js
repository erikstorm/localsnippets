import React from 'react';

export default props => {
  return (
    <div className="btn-group">
      <button
        onClick={() => props.showEdit(props.snippet)}
        className="btn btn-warning btn-sm"
      >
        &#x0002A; Edit
      </button>
      <button
        onClick={() => props.deleteSnippet(props.snippet.id)}
        className="btn btn-danger btn-sm"
      >
        &#x02717; Delete
      </button>
    </div>
  );
};
