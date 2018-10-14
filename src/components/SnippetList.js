import React, { Component } from 'react';
import Highlighter from './Highlighter';

export default class SnippetList extends Component {
  render() {
    return this.props.snippets.map(snippet => {
      return (
        <Highlighter
          key={snippet.id}
          deleteSnippet={this.props.deleteSnippet}
          showEdit={this.props.showEdit}
          snippet={snippet}
          theme={this.props.theme}
        />
      );
    });
  }
}
