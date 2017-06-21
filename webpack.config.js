const path 				= require('path');
const webpack 			= require('webpack');
const webpackTools    	= require('./webpack.tools');

function WebPackConfig(ENV) {
	let config = {}

	config.context 		= path.resolve(__dirname, '');
	config.entry 		= webpackTools.setEntry(ENV, './app/app.js');
	config.output 		= webpackTools.setOutput(ENV, __dirname, './dist');
	config.devServer 	= webpackTools.setDevServer(__dirname, './app');
	config.module 		= {	rules: webpackTools.setRules(ENV) }
	config.plugins 		= webpackTools.setPlugins(ENV, './app/');
	config.resolve		= {
							alias: {
								atomic:           path.resolve(__dirname, 'app/atomic'),
								atomicAtoms:      path.resolve(__dirname, 'app/atomic/atoms'),
								atomicMolecules:  path.resolve(__dirname, 'app/atomic/molecules'),
								atomicOrganisms:  path.resolve(__dirname, 'app/atomic/organisms')
							},
							extensions: ['.js']
						}

	return config;
}

module.exports = WebPackConfig(process.env.NODE_ENV);

/*	TODO
	- add karma&jasmine (tests)
*/