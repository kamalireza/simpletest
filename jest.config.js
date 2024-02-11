module.exports = {
    preset: 'jest-puppeteer',
    testMatch: ["**/*.test.js"],
    reporters: [
        "default",
        ["jest-html-reporters", {
            publicPath: "./html-report",
            filename: "report.html",
            expand: true
        }]
    ],
    setupFilesAfterEnv: ['jest-jasmine2'], // Add Jest Jasmine2 setup file
};
