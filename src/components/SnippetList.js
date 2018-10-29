import React, { Component } from 'react';
import Highlighter from './Highlighter';

export default class SnippetList extends Component {
  render() {
    const filtersApplied = this.props.snippets.map(snippet => {
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
    const searchString = this.props.searchString;
    const searchApplied = filtersApplied.filter(obj => {
      if (!obj.props) return ''; // this is undefined when filters are applied?
      if (
        obj.props.snippet.name
          .toLowerCase()
          .includes(searchString.toLowerCase())
      ) {
        return obj;
      }
      return '';
    });
    const headingColor = !this.props.theme ? 'white' : '#1a1a1a';
    const searchIsFiltering =
      this.props.snippets.length !== searchApplied.length;
    const filterText =
      this.props.filteredLanguages.length || searchIsFiltering ? (
        <div style={{ marginTop: '50px' }}>
          <h6 style={{ color: headingColor }}>
            Showing <strong>{searchApplied.length}</strong> snippets.
          </h6>
        </div>
      ) : (
        ''
      );

    return (
      <React.Fragment>
        {filterText}
        {searchApplied}
      </React.Fragment>
    );
  }
}
