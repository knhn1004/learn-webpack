import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  (window as any).hello();
  return <div>hello world</div>;
};

ReactDOM.render(<App />, document.getElementById('root'));
