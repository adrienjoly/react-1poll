module.exports = (function(){
  'use strict';
  var React = require('react');
  var ReactDOM = require('react-dom');
  var Checkbox = require('material-ui/lib/checkbox');
  var TextField = require('material-ui/lib/text-field');

  function renderComponent(children) {
    var divContainer = [ 'div', { className: '1poll-component' } ];
    return React.createElement.apply(React, divContainer.concat(children));
  }

  var Poll = React.createClass({
    getDefaultProps() {
      return {
        options: [],
        labelStyle: undefined
      };
    },
    render() {
      return renderComponent(this.props.options.map(this._renderOption).concat([
        React.createElement(TextField, {
          hintText: 'Add an option',
          onEnterKeyDown: this._handleAddOption,
          style: {
            paddingLeft: '42px',
            marginBottom: '20px'
          }
        })
      ]));
    },
    _renderOption(option) {
      return React.createElement(Checkbox, {
        name: 'selected',
        value: option.name,
        label: option.name,
        defaultChecked: option.defaultChecked,
        labelStyle: this.props.labelStyle,
        style: { marginTop: '16px' }
      });
    },
    _handleAddOption(evt) {
      this.setProps({
        options: this.props.options.concat([ {
          name: evt.target.value,
          defaultChecked: true
        } ])
      });
    }
  });

  return Poll;

})();
