import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { twilight, coy } from 'react-syntax-highlighter/styles/prism';
import HighlighterButtons from './HighlighterButtons';

export default class Highlighter extends Component {
  render() {
    const anchorLink =
      '#' + this.props.snippet.name.replace(/ /g, '-').toLowerCase();
    return (
      <div className="code-container">
        <div className="container">
          <a style={{ color: '#e83e8c' }} href={anchorLink}>
            {anchorLink}
          </a>
          <h5>
            {this.props.snippet.name}{' '}
            <span className="badge badge-pill badge-info">
              {this.props.snippet.language}
            </span>
          </h5>
          <p>{this.props.snippet.notes}</p>
        </div>
        <SyntaxHighlighter
          language={this.props.snippet.language}
          style={this.props.theme ? coy : twilight}
          showLineNumbers
        >
          {this.props.snippet.text}
        </SyntaxHighlighter>
        <HighlighterButtons
          showEdit={this.props.showEdit}
          deleteSnippet={this.props.deleteSnippet}
          snippet={this.props.snippet}
        />
      </div>
    );
  }
}
