import  WeatherForecast from "./WeatherForecast";
import React from "react";
import { shallow } from "enzyme";

import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
configure({ adapter: new Adapter() });


describe('Testing presence of WeatherForecast component and its elements', () => {
	test('should render WeatherForecast component', () => {
		const wrapper =  shallow(<WeatherForecast />);
		expect(wrapper).toMatchSnapshot();
	})

	test('should contain a text box', () => {
		const wrapper =  shallow(<WeatherForecast />);
		expect(wrapper.find('input')).toMatchSnapshot();
	})

	test('should contain submit button', () => {
		const wrapper =  shallow(<WeatherForecast />);
		expect(wrapper.exists('button')).toBe(true)
	})
})


describe('Performing action on WeatherForecast', () => {
	test('weather forecast heading should display city name', () => {
		const wrapper =shallow(<WeatherForecast />); 
		wrapper.find('input').simulate('change', {target: {name: 'city', value: 'Kanpur' }})
		expect(wrapper.find('h1.heading').text()).toEqual('5 day weather report for Kanpur')
	})

	test('should update state value on change event', () => {
		const wrapper =shallow(<WeatherForecast />);
		const preventDefault = jest.fn();
		wrapper.find('input').simulate('change', {target: {name: 'city', value: 'Kanpur' }})
	 	expect(wrapper.state('city')).toEqual('Kanpur')
	})
})

