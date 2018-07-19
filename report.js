var reporter=require('cucumber-html-reporter');

module.exports(options={
    theme:'bootstrat',
    jsonFile: 'C:/Users/Julia/projects/CompareDOM/node_modules/cucumber-html-reporter/index.js',
    output: 'C:/Users/Julia/projects/CompareDOM/cucumber_report.html',
    reportSuiteAsScenarios: true,
    launchReport: true,
    metadata: {
        "App Version":"0.3.2",
        "Test Environment": "STAGING",
        "Browser": "Chrome  54.0.2840.98",
        "Platform": "Windows 10",
        "Parallel": "Scenarios",
        "Executed": "Remote"
    }
});

reporter.generate(options);