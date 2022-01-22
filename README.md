# Open cart automated tests
## Automated tests for the Open cart web page using Webdriver IO, Mocha and Javascript
### Acceptance criteria:
- Visitor can create an account
- Registered user can login
- Registered user as a Visitor user can reset the password and use it to log in
- Visitor user can search for products
- Loged in user can search for products
### Installation
- Pull the project to your local machine
- run npm install
### Requirements
- Node.js version <16
- Java JDK installed
- JAVA_HOME set as a global variable on your machine https://confluence.atlassian.com/doc/setting-the-java_home-variable-in-windows-8895.html
### Running the tests
To start all tests, in the terminal run the command: npx wdio run ./wdio.conf.js\
To run specific tests use the same command following --spec {test path}    
example: npx wdio run ./wdio.conf.js\ --spec C:\Projects\opencart\test\spec\search\searchStore.test.js  
### Results  
 Results are displayed when all tests are finished and can be reviewed in two different reporters  
- Spec reporter is the default reporter and it will show the results automatically in your terminal  
- Allure reporter can be run with the node scripts defined in package.json  
    - First, run the report-generate script
    - Second, run the report-open script ( the report will be opened in the browser )