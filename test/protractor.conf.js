exports.config = {
  seleniumAddress: "http://localhost:4444/wd/hub",
  capabilities: {
    "browserName": "chrome",
    "chromeOptions": {
      "args": ["lang=de-DE"]
    }
  },
  // location of your E2E test specs
  specs: [
    'e2e/*.js'
  ],

  // url where your app is running, relative URLs are prepending with this URL
  baseUrl: 'http://localhost:9001'
};
