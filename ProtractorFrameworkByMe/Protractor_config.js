'use strict';

var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('./config.properties');
const fileSystem = require('fs-extra');
const dateTime = require('date-time');

//let env1 =process.env.NODE_ENV;

//console.log(env1)

// how to use arguments via the built-in way (process.argv), as well as with the popular packages minimist and yargs.

/* for (let j = 0; j < process.argv.length; j++) {
    console.log(j + ' -> ' + (process.argv[j]));
} */

//foreach
/* process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`)
  }) */

// Using yargs module

const args = require('yargs').argv;

console.log('Name: ' + args.name);
console.log('Age: ' + args.age);
console.log('env: ' + args.env); 

//Using minimist module

//const args1 = require('minimist')(process.argv.slice(2));


/* console.log(args['name']);
console.log(args['age']);
console.log(args['env']);  */

exports.config = {
    framework: 'custom',
    directConnect: true,
    allScriptTimeout: 30000,
    getPageTimeout: 60000,
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: [properties.get('featureFilesPath')],

    multiCapabilities: [
        {
            'browserName': 'chrome',

        }/*,{
            'browserName': 'firefox',
        }
        */
    ],
    /* params: {
        login: {
          user: 'Jane',
          password: '1234'
        }
      }, */

    plugins: [{
        package: require.resolve('protractor-multiple-cucumber-html-reporter-plugin'),
        options: {
            automaticallyGenerateReport: true,
            removeExistingJsonReportFile: true,
            displayDuration: true,
            openReportInBrowser: true,
            pageFooter: "Automation POC Demo",
            pageTitle: "Test Automation Results",
            reportName: "Test Automation Results",
            reportPath: "./html-report",
            customData: {
                title: 'Execution Info',
                data: [
                    { label: 'Environment', value: 'Test'},
                    { label: 'Data Base', value: properties.get('database') },
                    { label: 'Date & Time', value: dateTime() },
                    { label: 'Release', value: '1.1' },
                ]
            }
        }
    }],
    cucumberOpts: {
        tags: ['@Login'],
        strict: true,
        'no-colors': false,
        format: 'json:json-report/json-report.json',
        require: [
            properties.get('stepDefinitionPath')
        ]
    }
}

