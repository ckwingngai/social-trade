import React, { Component } from 'react';
import Header from './Header/components/Header';
import Sidebar from './components/sidebar';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Sidebar />
      </div>
    );
  }
}

export default App;
