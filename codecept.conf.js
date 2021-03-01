const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './*/*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'http://localhost',
      browser: 'chrome',
      desiredCapabilities: {
        chromeOptions: {
          args: ["--headless", "--disable-gpu", "--no-sandbox"]
        }
      }

    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'WDIO-Jenkins-Codeceptjs',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
    wdio: { enabled: true, services: ['selenium-standalone'] },
    plugins: {
      allure: {
        outputDir: 'report',
        enabled: true
      }
    }
  }
}