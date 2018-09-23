import React from "react";
import _ from "lodash";
import './WeatherForecast.css';

export class WeatherForecast extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			weatherData: {},
			city: ''
		}
	}

	onSubmitCity = (event) =>  {
		event.preventDefault();
		fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${this.state.city},IN&APPID=1f703b39afd8359290cc27e826b45021`)
		.then(res => res.json())
		.then(data => this.setState({ weatherData: data }))
	}

	onChange = (event) =>  {
		this.setState({ city: event.target.value});
	}

	render() {
		let weather = _.get(this.state.weatherData, ['list']);
		return(
			<div>
				<form onSubmit={this.onSubmitCity}>
					<input type="text" name="city" value={this.state.city} onChange={this.onChange} />
					<button type="submit">Submit</button>
				</form>

				{this.state.city != null && 
					<div className="weather-data-container">
					    <h1 className="heading">5 day weather report for {this.state.city}</h1>
						<ul className="weather-item-list" style={{fontWeight: "bold"}}>
							<li key={"date"}>Date </li>
							<li key={"temp"}>Temp</li>
							<li key={"pre"}>Pressure</li>
							<li key={"hum"}>Humidity</li>
							<li key={"fore"}>Forecast</li>
							<li key={"wind"}>Wind Speed</li>
						</ul>
					{ weather && weather.map((entry,index) =>	
						<ul className="weather-item-list" key={index}>
							<li key={"date"+ index}> {entry.dt_txt} </li>
							<li key={"temp"+ index}>{(entry.main.temp - 273.15).toFixed(1)} &deg;C </li>
							<li key={"pre"+ index}> {parseInt(entry.main.pressure)} hpa</li>
							<li key={"hum"+ index}>{(entry.main.humidity)} %</li>
							<li key={"fore"+ index}> {entry.weather[0].description} </li>
							<li key={"wind"+ index}> {entry.wind.speed} m/s</li>
						</ul>
			 		)} 
			</div>}
		</div>
		)
	}
}
					

export default WeatherForecast;