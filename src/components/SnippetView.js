import React from 'react';
import SnippetTagList from './SnippetTagList';
import SearchInput from './SearchInput';
import SnippetList from './SnippetList';

export default props => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-6">
          <SnippetTagList
            snippets={props.snippets}
            langFilter={props.langFilter}
            filteredLanguages={props.filteredLanguages}
          />
        </div>
        <SearchInput
          value={props.value}
          searchStringInput={props.searchStringInput}
        />
      </div>
      <SnippetList
        key={1}
        deleteSnippet={props.deleteSnippet}
        snippets={props.snippets}
        theme={props.theme}
        showEdit={props.showEdit}
        filteredLanguages={props.filteredLanguages}
        searchString={props.value}
      />
    </div>
  );
};
