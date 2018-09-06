import React from "react";
import _ from "lodash";


class WeatherForecast extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			weatherData: {}
		};
	}


	componentDidMount() {
		//fetch('https://api.myjson.com/bins/r2b3o')
		fetch('https://api.myjson.com/bins/eux78')
		//fetch('http://api.openweathermap.org/data/2.5/forecast?id=1275339&APPID=1f703b39afd8359290cc27e826b45021')
		.then(res => res.json())
		.then(data => this.setState({ weatherData: data }))
	}

	render() {
		let ab = _.get(this.state.weatherData, ['list']);
		let count = 40;
		return(
			<div>
				<h1> Maximum Temperature {_.get(this.state.weatherData, [ 'city', 'name']) }</h1>
				<ul> 
					{ ab && ab.map((tp) =>	<li key={count--}> {tp.dt} </li> )}
				 </ul>
			</div>
		)
	}
}

export default WeatherForecast;