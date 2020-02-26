var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('./dev-config.properties');
const fileSystem = require('fs-extra');
const dateTime = require('date-time');

// Using yargs module

const args = require('yargs').argv;
// console.log('Name: ' + args.name);
console.log('env: ' + args.env); 

//protractor .\protractor.conf.js --name=Dhanu --env=dev

//Using minimist module

/* const args1 = require('minimist')(process.argv.slice(2));
console.log(args1['name']);
console.log(args1['env']);  */

//protractor .\protractor.conf.js --name=Dhanu --env=dev

exports.config = {
    framework: 'custom',
    directConnect: true,
    allScriptTimeout: 40000,
    getPageTimeout: 60000,
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: [properties.get('featureFilesPath')],

    multiCapabilities: [
        {
            browserName: 'chrome',
            chromeOptions: {
                'args': ['--ignore-certificate-errors', '--start-maximized', 'disable-infobars']
              }

        }/*,{
            'browserName': 'firefox',
        }
        */
    ],

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
                    { label: 'Environment', value: args.env },
                    { label: 'Data Base', value: properties.get('database') },
                    { label: 'Date & Time', value: dateTime() },
                    { label: 'Release', value: '1.1' }
                ]
            }
        }
    }],
    cucumberOpts: {
        tags: '@Roles',
        strict: true,
        'no-colors': false,
        format: 'json:json-report/json-report.json',
        require: [
            properties.get('stepDefinitionPath')
        ]
    }
}

