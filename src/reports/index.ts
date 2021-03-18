let reporter = require('cucumber-html-reporter');
let path = require('path');

let dt = new Date();
let timestamp = `${dt.getUTCFullYear()}${dt.getUTCMonth()}${dt.getUTCDate()}${dt.getUTCMinutes()}`;

let options = {
    name: "REST API Automation Framework - Typescript",
    brandTitle: "BDD Tests",
    columnLayout: 1,
    theme: "hierarchy",
    jsonFile: path.join(__dirname, "report.json"),
    output: path.join(__dirname, `testreport_${timestamp}.html`),
    reportSuiteAsScenarios: true,
    launchReport: false,
    metadata: {
        "Title": "BBD Tests",
        "Execution Date": new Date().toUTCString(),
        "Endpoints": "JSONPlaceHolder Posts"
    }
};

reporter.generate(options);