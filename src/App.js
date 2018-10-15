import React, { Component } from 'react';
import './index.css';
import './bootstrap.min.css';
import '../node_modules/react-notifications/dist/react-notifications.css';
import {
  NotificationContainer,
  NotificationManager
} from 'react-notifications';
import DefaultSnippets from './data/DefaultSnippets';
import Header from './components/Header';
import SnippetCreator from './components/SnippetCreator';
import SnippetEditor from './components/SnippetEditor';
import SnippetList from './components/SnippetList';
import Intro from './components/Intro';
import SnippetTagList from './components/SnippetTagList';

class App extends Component {
  constructor(props) {
    super();

    if (!localStorage.getItem('snippets')) {
      localStorage.setItem('snippets', JSON.stringify(DefaultSnippets));
    }
    if (!localStorage.getItem('theme')) {
      localStorage.setItem('theme', true);
    }
    this.state = {
      snippets: JSON.parse(localStorage.getItem('snippets')),
      SnippetCreator: false,
      SnippetEditor: false,
      currentSnippet: '',
      filteredLanguages: [],
      theme: JSON.parse(localStorage.getItem('theme'))
    };
  }
  componentDidUpdate() {
    localStorage.setItem('snippets', JSON.stringify(this.state.snippets));
    localStorage.setItem('theme', JSON.stringify(this.state.theme));
  }

  toggleTheme = () => {
    this.setState({
      theme: !this.state.theme
    });
  };
  langFilter = language => {
    let newLanguages = this.state.filteredLanguages;
    if (!newLanguages.includes(language)) {
      newLanguages.push(language);
    } else {
      newLanguages = newLanguages.filter(a => a !== language);
    }

    this.setState({ filteredLanguages: newLanguages });
  };

  deleteSnippet = id => {
    window.confirm(`Are you sure you wish to delete this snippet?`) &&
      this.setState(
        {
          snippets: this.state.snippets.filter(snippet => {
            return snippet.id !== id;
          })
        },
        NotificationManager.success('Snippet was deleted.')
      );
  };
  showListing = () => {
    this.setState({
      SnippetCreator: false,
      SnippetEditor: false,
      filteredLanguages: []
    });
  };
  showForm = () => {
    this.setState({
      SnippetCreator: true,
      SnippetEditor: false
    });
  };
  showEdit = snippet => {
    this.setState({
      SnippetCreator: false,
      SnippetEditor: true,
      currentSnippet: snippet
    });
  };
  createSnippet = createdSnippet => {
    if (createdSnippet.valid) {
      NotificationManager.success('New snippet created.');
      this.setState(prevState => ({
        snippets: [
          {
            id: this.getNewItemKey(),
            text: createdSnippet.text,
            name: createdSnippet.name,
            notes: createdSnippet.notes,
            language: createdSnippet.language
          },
          ...this.state.snippets
        ]
      }));
      this.setState({
        SnippetCreator: false
      });
    } else {
      NotificationManager.warning(
        'Something went wrong. Please fill out all required fields.'
      );
    }
  };
  editSnippet = editedSnippet => {
    if (editedSnippet.valid) {
      NotificationManager.success('Snippet edited.');
      this.setState(prevState => ({
        snippets: [
          {
            id: editedSnippet.id,
            text: editedSnippet.text,
            name: editedSnippet.name,
            notes: editedSnippet.notes,
            language: editedSnippet.language
          },
          ...this.state.snippets.filter(snippet => {
            return snippet.id !== editedSnippet.id;
          })
        ]
      }));
      this.setState({
        SnippetEditor: false,
        SnippetCreator: false
      });
    } else {
      NotificationManager.warning(
        'Something went wrong. Please fill out all required fields.'
      );
    }
  };
  getNewItemKey() {
    // https://gist.github.com/jed/982883
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
    );
  }
  render() {
    let snippetList, editor;
    if (this.state.SnippetCreator || this.state.SnippetEditor) {
      editor = this.state.SnippetCreator ? (
        <SnippetCreator
          createSnippet={this.createSnippet}
          theme={this.state.theme}
        />
      ) : (
        <SnippetEditor
          editSnippet={this.editSnippet}
          theme={this.state.theme}
          currentSnippet={this.state.currentSnippet}
        />
      );
    } else {
      snippetList = (
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <SnippetTagList
                snippets={this.state.snippets}
                langFilter={this.langFilter}
              />
            </div>
          </div>
          <SnippetList
            key={1}
            deleteSnippet={this.deleteSnippet}
            snippets={this.state.snippets}
            theme={this.state.theme}
            showEdit={this.showEdit}
            filteredLanguages={this.state.filteredLanguages}
          />
        </div>
      );
    }
    return (
      <div>
        <div className="container">
          <Intro />
          <Header
            toggleTheme={this.toggleTheme}
            showListing={this.showListing}
            showForm={this.showForm}
            theme={this.state.theme}
          />
        </div>
        {editor}
        {snippetList}
        <NotificationContainer />
      </div>
    );
  }
}

export default App;
