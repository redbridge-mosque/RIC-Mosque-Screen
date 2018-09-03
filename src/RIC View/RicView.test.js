import React from 'react';
import ReactDOM from 'react-dom';
import RicView from './RicView';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RicView />, div);
  ReactDOM.unmountComponentAtNode(div);
});
