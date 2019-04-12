import React, { Component } from 'react';
import Header from './components/Header/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header
          firstName="Agrima"
          lastName="KP"
          subtitle="Software Developer - Web Applications"
          address="Kozhikode, Kerala, India"
          phone="111 222 333 44"
          email="111 222 333 44"
          linkedIn="agrimakp"
        />
        <section className="summary">
          <h2>Summary</h2>
          <p>
            Software developer with 3+ years of experience, dedicated mainly in backend technologies such as
            Java and Go but also a lot of experience building BFF (backend for frontend) in NodeJs. I’m a
            sociable, responsible, optimistic, organized and proactive person with fast learning skills. I really like
            new challenges all the time.
          </p>
        </section>
      </div>
    );
  }
}

export default App;
