import React, { Component } from 'react';
import './App.css';
import WeatherForecast from "./components/WeatherForecast";


class App extends Component {
  render() {
    return (
      <div className="App">
          <WeatherForecast />
      </div>
    );
  }
}

export default App;
