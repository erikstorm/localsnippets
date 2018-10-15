import React, { Component } from 'react';
import Highlighter from './Highlighter';

export default class SnippetList extends Component {
  render() {
    const listedSnippets = this.props.snippets.map(snippet => {
      if (
        !this.props.filteredLanguages.length ||
        this.props.filteredLanguages.includes(snippet.language)
      ) {
        return (
          <Highlighter
            key={snippet.id}
            deleteSnippet={this.props.deleteSnippet}
            showEdit={this.props.showEdit}
            snippet={snippet}
            theme={this.props.theme}
          />
        );
      }
      return '';
    });
    const filterCount = this.props.snippets.filter(snippet => {
      if (
        !this.props.filteredLanguages.length ||
        this.props.filteredLanguages.includes(snippet.language)
      ) {
        return snippet;
      }
      return '';
    }).length;
    const filterText = this.props.filteredLanguages.length ? (
      <div style={{ marginTop: '50px' }}>
        <h6>
          Showing <strong>{filterCount}</strong> snippets.
        </h6>
      </div>
    ) : (
      ''
    );

    return (
      <React.Fragment>
        {filterText}
        {listedSnippets}
      </React.Fragment>
    );
  }
}
