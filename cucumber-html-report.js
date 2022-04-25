//COMANDO PARA GENERAR REPORTE: node cucumber-html-report.js

const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "cypress/cucumber-json",  // ** Path of .json file **//
    reportPath: "./reports/cucumber-htmlreport.html",
    metadata: {
        browser: {
            name: "Chrome",
            version: "99",
        },
        device: "Local Test Machine",
        platform: {
            name: "Windows",
            version: "10",
        },
    },
});