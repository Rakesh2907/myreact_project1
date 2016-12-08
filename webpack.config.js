var config = {
   entry: './bundle.js',

   output: {
      path:__dirname,
      filename: 'index.js',
   },
   resolve:{
	   root:__dirname,
	   alias:{
		 Main: 'app/components/Main.jsx',
		 Nav: 'app/components/Nav.jsx',
		 Weather: 'app/components/Weather.jsx',
		 WeatherForm: 'app/components/WeatherForm.jsx',
		 WeatherMessage: 'app/components/WeatherMessage.jsx',
		 About: 'app/components/About.jsx',
		 Examples: 'app/components/Examples.jsx',
		 openWeatherMap: 'app/api/openWeatherMap.jsx'
	   },
	   extensions: ['','.js','.jsx']
   },
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',

            query: {
               presets: ['es2015', 'react', 'stage-0']
            }
         }
      ]
   },
   devtool: 'cheap-module-eval-source-map'
}

module.exports = config;
