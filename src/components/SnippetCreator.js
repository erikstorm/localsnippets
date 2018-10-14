import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { darcula, coy } from 'react-syntax-highlighter/styles/prism';

export default class SnippetEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      name: '',
      language: '',
      notes: '',
      valid: false
    };
  }
  updateFormState(event) {
    console.log(event.target.id);
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
      this.props.createSnippet(this.state);
    };
    return (
      <div className="container">
        <h5>Create new snippets</h5>
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
            selected="javascript"
          >
            <option value="abap">abap</option>
            <option value="actionscript">actionscript</option>
            <option value="ada">ada</option>
            <option value="apacheconf">apacheconf</option>
            <option value="apl">apl</option>
            <option value="applescript">applescript</option>
            <option value="arduino">arduino</option>
            <option value="arff">arff</option>
            <option value="asciidoc">asciidoc</option>
            <option value="asm6502">asm6502</option>
            <option value="aspnet">aspnet</option>
            <option value="autohotkey">autohotkey</option>
            <option value="autoit">autoit</option>
            <option value="bash">bash</option>
            <option value="basic">basic</option>
            <option value="batch">batch</option>
            <option value="bison">bison</option>
            <option value="brainfuck">brainfuck</option>
            <option value="bro">bro</option>
            <option value="c">c</option>
            <option value="clike">clike</option>
            <option value="clojure">clojure</option>
            <option value="coffeescript">coffeescript</option>
            <option value="cpp">cpp</option>
            <option value="crystal">crystal</option>
            <option value="csharp">csharp</option>
            <option value="csp">csp</option>
            <option value="cssExtras">cssExtras (css-extras)</option>
            <option value="css">css</option>
            <option value="d">d</option>
            <option value="dart">dart</option>
            <option value="diff">diff</option>
            <option value="django">django</option>
            <option value="docker">docker</option>
            <option value="eiffel">eiffel</option>
            <option value="elixir">elixir</option>
            <option value="elm">elm</option>
            <option value="erb">erb</option>
            <option value="erlang">erlang</option>
            <option value="flow">flow</option>
            <option value="fortran">fortran</option>
            <option value="fsharp">fsharp</option>
            <option value="gedcom">gedcom</option>
            <option value="gherkin">gherkin</option>
            <option value="git">git</option>
            <option value="glsl">glsl</option>
            <option value="go">go</option>
            <option value="graphql">graphql</option>
            <option value="groovy">groovy</option>
            <option value="haml">haml</option>
            <option value="handlebars">handlebars</option>
            <option value="haskell">haskell</option>
            <option value="haxe">haxe</option>
            <option value="hpkp">hpkp</option>
            <option value="hsts">hsts</option>
            <option value="http">http</option>
            <option value="ichigojam">ichigojam</option>
            <option value="icon">icon</option>
            <option value="inform7">inform7</option>
            <option value="ini">ini</option>
            <option value="io">io</option>
            <option value="j">j</option>
            <option value="java">java</option>
            <option value="javascript">javascript</option>
            <option value="jolie">jolie</option>
            <option value="json">json</option>
            <option value="jsx">jsx</option>
            <option value="julia">julia</option>
            <option value="keyman">keyman</option>
            <option value="kotlin">kotlin</option>
            <option value="latex">latex</option>
            <option value="less">less</option>
            <option value="liquid">liquid</option>
            <option value="lisp">lisp</option>
            <option value="livescript">livescript</option>
            <option value="lolcode">lolcode</option>
            <option value="lua">lua</option>
            <option value="makefile">makefile</option>
            <option value="markdown">markdown</option>
            <option value="markupTemplating">
              markupTemplating (markup-templating)
            </option>
            <option value="markup">markup</option>
            <option value="matlab">matlab</option>
            <option value="mel">mel</option>
            <option value="mizar">mizar</option>
            <option value="monkey">monkey</option>
            <option value="n4js">n4js</option>
            <option value="nasm">nasm</option>
            <option value="nginx">nginx</option>
            <option value="nim">nim</option>
            <option value="nix">nix</option>
            <option value="nsis">nsis</option>
            <option value="objectivec">objectivec</option>
            <option value="ocaml">ocaml</option>
            <option value="opencl">opencl</option>
            <option value="oz">oz</option>
            <option value="parigp">parigp</option>
            <option value="parser">parser</option>
            <option value="pascal">pascal</option>
            <option value="perl">perl</option>
            <option value="phpExtras">phpExtras (php-extras)</option>
            <option value="php">php</option>
            <option value="plsql">plsql</option>
            <option value="powershell">powershell</option>
            <option value="processing">processing</option>
            <option value="prolog">prolog</option>
            <option value="properties">properties</option>
            <option value="protobuf">protobuf</option>
            <option value="pug">pug</option>
            <option value="puppet">puppet</option>
            <option value="pure">pure</option>
            <option value="python">python</option>
            <option value="q">q</option>
            <option value="qore">qore</option>
            <option value="r">r</option>
            <option value="reason">reason</option>
            <option value="renpy">renpy</option>
            <option value="rest">rest</option>
            <option value="rip">rip</option>
            <option value="roboconf">roboconf</option>
            <option value="ruby">ruby</option>
            <option value="rust">rust</option>
            <option value="sas">sas</option>
            <option value="sass">sass</option>
            <option value="scala">scala</option>
            <option value="scheme">scheme</option>
            <option value="scss">scss</option>
            <option value="smalltalk">smalltalk</option>
            <option value="smarty">smarty</option>
            <option value="soy">soy</option>
            <option value="sql">sql</option>
            <option value="stylus">stylus</option>
            <option value="swift">swift</option>
            <option value="tcl">tcl</option>
            <option value="textile">textile</option>
            <option value="tsx">tsx</option>
            <option value="twig">twig</option>
            <option value="typescript">typescript</option>
            <option value="vbnet">vbnet</option>
            <option value="velocity">velocity</option>
            <option value="verilog">verilog</option>
            <option value="vhdl">vhdl</option>
            <option value="vim">vim</option>
            <option value="visualBasic">visualBasic (visual-basic)</option>
            <option value="wasm">wasm</option>
            <option value="wiki">wiki</option>
            <option value="xeora">xeora</option>
            <option value="xojo">xojo</option>
            <option value="yaml">yaml</option>
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
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
          />
          <button
            onClick={submitForm}
            id="saveNewSnippet"
            type="submit"
            className="btn btn-success"
          >
            Save
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
