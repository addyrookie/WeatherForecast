import  WeatherForecast from "./WeatherForecast";
import React from "react";
import { mount, shallow } from "enzyme";

import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
configure({ adapter: new Adapter() });

test('testing app heading h1', () => {
	const forecast =  shallow(<WeatherForecast />);
	expect(forecast.find('.heading').text()).toEqual('5 day weather report')
})


test('There are 40 data-points', () => {
	const forecast = shallow(<WeatherForecast />);
	expect(forecast.find('.heading').text()).toEqual('5 day weather report')

})