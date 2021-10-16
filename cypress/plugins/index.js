module.exports = (on, config) => {
  on('before:browser:launch', (browser = {}, launchOptions) => {
    if (browser.family === 'chromium' || browser.name === 'electron') {
      launchOptions.args.push('--auto-open-devtools-for-tabs');
    }

    if (browser.family === 'firefox') {
      launchOptions.args.push('-devtools');
    }

    if (browser.name === 'electron') {
      launchOptions.preferences.devTools = true;
    }
    return launchOptions;
  });
};
