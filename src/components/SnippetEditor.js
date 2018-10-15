import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { darcula, coy } from 'react-syntax-highlighter/styles/prism';
import LanguageOptions from './LanguageOptions';

export default class SnippetEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.currentSnippet.id,
      text: this.props.currentSnippet.text,
      name: this.props.currentSnippet.name,
      language: this.props.currentSnippet.language,
      notes: this.props.currentSnippet.notes,
      valid: false
    };
  }
  updateFormState(event) {
    if (this.state.text.length < 1 || this.state.name.length < 1) {
      this.setState({
        valid: false
      });
    } else {
      this.setState({
        valid: true
      });
    }

    switch (event.target.id) {
      case 'snippetName':
        this.setState({
          name: event.target.value
        });
        break;
      case 'snippetNotes':
        this.setState({
          notes: event.target.value
        });
        break;
      case 'snippetTextArea':
        this.setState({
          text: event.target.value
        });
        break;
      case 'snippetLanguageSelect':
        this.setState({
          language: event.target.value
        });
        break;
      default:
        break;
    }
  }

  render() {
    const submitForm = () => {
      if (this.state.text.length < 1 || this.state.name.length < 1) {
        this.setState({
          valid: false
        });
      } else {
        this.setState({
          valid: true
        });
      }
      this.props.editSnippet(this.state);
    };
    return (
      <div className="container">
        <h5>Edit snippet</h5>
        <div className="form-group">
          <label htmlFor="snippetName">Name *</label>
          <input
            className="form-control"
            id="snippetName"
            aria-describedby="snippet name"
            placeholder="Enter Snippet name"
            type="text"
            value={this.state.name}
            onChange={evt => this.updateFormState(evt)}
            onBlur={evt => this.updateFormState(evt)}
            onFocus={evt => this.updateFormState(evt)}
            onKeyDown={evt => this.updateFormState(evt)}
            onKeyUp={evt => this.updateFormState(evt)}
          />
          <label htmlFor="languageSelect">Language</label>
          <select
            onChange={evt => this.updateFormState(evt)}
            className="form-control"
            id="snippetLanguageSelect"
            selected={this.state.language}
          >
            <LanguageOptions />
          </select>
          <label htmlFor="snippetNotes">Notes</label>
          <textarea
            className="form-control"
            id="snippetNotes"
            aria-describedby="snippet notes"
            placeholder="Add additional notes explaining this snippet."
            type="text"
            value={this.state.notes}
            onChange={evt => this.updateFormState(evt)}
            onBlur={evt => this.updateFormState(evt)}
            onFocus={evt => this.updateFormState(evt)}
            onKeyDown={evt => this.updateFormState(evt)}
            onKeyUp={evt => this.updateFormState(evt)}
          />
          <label htmlFor="snippetTextArea">Code *</label>
          <textarea
            className="form-control"
            id="snippetTextArea"
            rows="3"
            value={this.state.text}
            placeholder="Paste your code snippet here"
            onChange={evt => this.updateFormState(evt)}
            onBlur={evt => this.updateFormState(evt)}
            onFocus={evt => this.updateFormState(evt)}
            onKeyDown={evt => this.updateFormState(evt)}
            onKeyUp={evt => this.updateFormState(evt)}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
          />
          <button
            onClick={submitForm}
            id="saveNewSnippet"
            type="submit"
            className="btn btn-success"
          >
            Save Changes
          </button>
        </div>
        <h5>Preview</h5>
        <SyntaxHighlighter
          language="javascript"
          style={this.props.theme ? coy : darcula}
          showLineNumbers
        >
          {this.state.text}
        </SyntaxHighlighter>
      </div>
    );
  }
}
