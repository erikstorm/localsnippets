import SupportedLanguages from '../data/SupportedLanguages';
import React, { Component } from 'react';

export default class LanguageOptions extends Component {
  render() {
    return SupportedLanguages.map((lang, index) => {
      return (
        <option key={index} value={lang}>
          {lang}
        </option>
      );
    });
  }
}
