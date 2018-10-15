import React, { Component } from 'react';
import SnippetTagItem from './SnippetTagItem';

export default class SnippetTagList extends Component {
  render() {
    let countTags = this.props.snippets
      .map(snip => {
        return snip.language;
      })
      .reduce((acc, index) => {
        if (!acc[index]) {
          acc[index] = 1;
        } else {
          acc[index] = acc[index] + 1;
        }
        return acc;
      }, {});

    return Object.entries(countTags).map(([name, val], idx) => {
      return (
        <SnippetTagItem
          key={idx}
          val={val}
          name={name}
          langFilter={this.props.langFilter}
        />
      );
    });
  }
}
