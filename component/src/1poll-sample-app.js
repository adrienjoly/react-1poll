(function(){
  'use strict';
  // inpired by: https://github.com/callemall/material-ui/blob/master/examples/webpack-example/src/app/app.jsx
  
  var React = require('react');
  var ReactDOM = require('react-dom');
  var Paper = require('material-ui/Paper').default;
  var Checkbox = require('material-ui/Checkbox').default;
  var RaisedButton = require('material-ui/RaisedButton').default;
  var injectTapEventPlugin = require('react-tap-event-plugin');
  var Poll = require('./1poll-react-component.js');

  // Needed for React Developer Tools
  window.React = React;

  // Needed for onTouchTap
  // Can go away when react 1.0 release, cf https://github.com/zilverline/react-tap-event-plugin
  injectTapEventPlugin();

  var appDiv = document.getElementById('app');

  function getSelectedItems(form) {
    var selected = [];
    for (var i=0; i<form.elements.length; ++i) {
      if (form.elements[i].name == 'selected' && form.elements[i].checked) {
        selected.push(form.elements[i].value);
      }
    }
    return selected;
  }

  function onSubmit(evt) {
    var selected = getSelectedItems(document.getElementsByTagName('form')[0]);
    alert('selected items:\n' + selected.join('\n'));
  }

  var DEFAULT_ITEMS = [
    { name: 'monday, after school' },
    { name: 'tuesday, before "the arrival"' },
    { name: '\'<happy-hours> wednesday\'' }
  ];

  var paperProps = {
    style: {
      padding: '16px',
      paddingTop: '1px'
    }
  };

  var App = React.createClass({
    getInitialState: function() {
      return {
        entryToggle: true,
        options: DEFAULT_ITEMS
      };
    },
    render: function() {
      return React.createElement(Paper, paperProps,
        React.createElement(Checkbox, {
          name: 'entryToggle',
          label: 'Allow entry of additional options',
          checked: this.state.entryToggle,
          onCheck: this._onToggleEntry,
          labelStyle: { color: 'white' },
          style: { margin: '16px 0', backgroundColor: 'black' }
        }),
        React.createElement(Poll, {
          options: this.state.options,
          allowNewEntries: this.state.entryToggle,
          onNewOption: this.onNewOption
        }),
        React.createElement(RaisedButton, {
          label: 'Submit',
          primary: true,
          style: { display: 'block' },
          onTouchTap: onSubmit
        })
      );
    },
    onNewOption: function(newOption) {
      this.setState({
        options: this.state.options.concat([ newOption ])
      });
    },
    _onToggleEntry: function() {
      this.setState({
        entryToggle: !this.state.entryToggle
      });
    }
  });
  

  // Render the main app react component into the app div.
  // For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
  ReactDOM.render(React.createElement(App), appDiv);

})();
