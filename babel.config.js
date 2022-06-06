module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'react-native-reanimated/plugin',
      {
        // that was used for react-native-vision-camera example, that MAY BE usefull later
        globals: ['__example_plugin', '__example_plugin_swift'],
      },
    ],
    [
      'module:react-native-dotenv', {
        envName: 'APP_ENV',
        moduleName: 'react-native-dotenv',
      },
    ],
  ],
};
