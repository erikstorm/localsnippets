import React from 'react';

export default props => {
  return (
    <header>
      <div id="navMenu" className="btn-group">
        <button onClick={props.showListing} className="btn btn-info btn-sm">
          &#x00023; View snippets
        </button>
        <button onClick={props.showForm} className="btn btn-success btn-sm">
          &#43; New Snippet
        </button>
        {props.theme ? (
          <button
            onClick={props.toggleTheme}
            className="btn btn-primary btn-sm"
          >
            Dark Theme
          </button>
        ) : (
          <button
            onClick={props.toggleTheme}
            className="btn btn-secondary btn-sm"
          >
            Light Theme
          </button>
        )}
        <a
          href="https://github.com/erikstorm/localsnippets"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary btn-sm"
        >
          <img alt="github" style={{ height: '20px' }} src="../github.svg" />
        </a>
      </div>
    </header>
  );
};
