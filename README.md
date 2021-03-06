# react-1poll

A simple [Doodle](http://doodle.com)-like poll component that makes it easy for contributors to add more options. Star it on [npm](https://www.npmjs.com/package/react-1poll) and on [github](https://github.com/adrienjoly/react-1poll).

Made with [React.js](https://facebook.github.io/react/) and [Material-UI](material-ui.com). Thanks to [Romain Dardour](http://twitter.com/rdardour) for his help!

## Contents

The `gh-pages` branch of this repository contains:

- The `1poll` react component, as defined in [the component subdirectory](https://github.com/adrienjoly/1poll/tree/gh-pages/component);
- A [demo page](http://adrienjoly.com/react-1poll/demo) to demonstrate the use of the `1poll` component.

## Demo / examples of use

- [Official demo](http://adrienjoly.com/react-1poll/demo)
- [1task's landing page](http://1task.org/) (and [source code](https://github.com/adrienjoly/1task))

## How to install and use

### Using npm

First, install it in your project's directory:

    npm install react-1poll

Then, integrate it in your javascript project:

```jsx
var PollForm = require('./PollForm.jsx');
var options = [
  { name: 'Option A', defaultCheck: true },
  { name: 'Option B' },
  { name: 'Option C' }
];
function onValidSubmit(selectedItems) {
  assert.equal(selectedItems, [ 'Option A' ]);
}
ReactDOM.render(<PollForm
  options={options}
  onNewOption={console.log}
  onValidSubmit={onValidSubmit} />, appDiv);
```

## Component API reference

See [1poll component's README.md file](https://github.com/adrienjoly/react-1poll/tree/gh-pages/component).
