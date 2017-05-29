// index.ios.js - place code in here for iOS

// Import necessary libraries

import React from 'react';
import { AppRegistry, Text, View } from 'react-native';

// Import necessary files

import Header from './src/components/Header';

/* 
		Create a Component: Same as react aside from the tags we use

			<Text> : like a <span>
			<View> : like a <div>

*/

const App = () => {
	return (
		<View>
			<Header />
			<Text>LESS TEXT THAN EVER</Text>
		</View>

		
	);
};

/*
		Render the Component to the device

			* In RN, we need to register, at minimum, one Component.
			* 'albums' is what the project is called, hence why the string 'albums' is being passed
			* second argument is a function to be run to get the content

*/

AppRegistry.registerComponent('albums', () => App);
