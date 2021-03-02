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
  name: 'WeCare',
  plugins: {
    wdio: {
      enabled: true, services: ['selenium-standalone'], seleniumArgs: {
        drivers: {
          chrome: {
            version: "87.0.4280.20", // Chromedriver version
            arch: process.arch,
          },
          firefox: {
            version: "0.26.0", // Geckodriver version
            arch: process.arch,
          },
        },
      },
      seleniumInstallArgs: {
        baseURL: 'https://selenium-release.storage.googleapis.com',
        drivers: {
          chrome: {
            version: '87.0.4280.20',
            arch: process.arch,
            baseURL: 'https://chromedriver.storage.googleapis.com',
          },
          firefox: {
            version: '0.26.0',
            arch: process.arch,
            baseURL: 'https://github.com/mozilla/geckodriver/releases/download',
          },
        },
      }
    },
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
    plugins: {
      allure: {
        outputDir: 'report',
        enabled: true
      }
    }
  }
}
