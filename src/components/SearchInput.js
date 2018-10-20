import React from 'react';

export default props => {
  return (
    <div className="col-xs-12 col-sm-6">
      <div className="form-group">
        <div className="form-group">
          <div className="input-group mb-3">
            <div className="input-group-prepend" style={{ height: '47px' }}>
              <span className="input-group-text" role="img" aria-label="Search">
                &#128269;
              </span>
            </div>
            <input
              style={{ height: '47px' }}
              id="searchSnippetInput"
              className="form-control"
              aria-label="Search"
              type="text"
              value={props.value}
              onChange={event => props.searchStringInput(event.target.value)}
              onBlur={event => props.searchStringInput(event.target.value)}
              onFocus={event => props.searchStringInput(event.target.value)}
              onKeyDown={event => props.searchStringInput(event.target.value)}
              onKeyUp={event => props.searchStringInput(event.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
