import 'react-native-gesture-handler';
import React, { Component } from "react";
// import { createStackNavigator, createAppContainer } from 'react-navigation';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from "./src/components/Home";
import Detail from "./src/components/Detail";
const Project = createStackNavigator({
	Home: {
		screen: Home
	},
	Profile: {
		screen: Detail
	}
});
export default createAppContainer(Project);