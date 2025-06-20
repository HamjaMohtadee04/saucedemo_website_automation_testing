# SauceDemo Website Automation Testing

This repository targets automation tests on the [https://www.saucedemo.com/](https://www.saucedemo.com/) site.  
**Test cases are:**

- Try login with `locked_out_user` and verify the error message.

- Log in with `standard_user`. Then, from the hamburger menu, reset the App State. Add any three items to the cart. Navigate to the final checkout page and verify the product names and total price. Finish the purchase journey and verify the successful order message. Then, reset the App State again and log out.

- Log in with `performance_glitch_user` and reset the App State. Then filter by name (Z to A) and select the first product into the cart. Then navigate to the final checkout page and verify all the product names and the total price. Then finish the purchase journey and verify the successful order message. Then, reset the App State again and log out.

---

## 📁 File structure and file overview

### `test/locators` folder:
Contains XPath locators of `locked_out_user`, `standard_user`, and `performance_glitch_user`. These XPath locators help to find elements specifically.

### `test/pages` folder:
Contains necessary actions like `click`, `getText()`, `setValue`, and other actions that describe how to interact with those locators.

### `test/specs` folder:
Contains all test cases of `locked_out_user`, `standard_user`, and `performance_glitch_user`.

---

## ⚙️ Necessary packages and project setup

### Prerequisites

You need Node.js (v22 or above recommended) installed.Check if Node.js is installed:
```bash
node -v
```
If you don’t have Node.js, install it from:
👉 https://nodejs.org/en/download.
# Install Java (required for Allure reports):
👉 https://www.oracle.com/java/technologies/downloads/

If you want to initialize a Node.js project, run:
```
npm init

```
Or just clone this repository directly:
```
git clone https://github.com/HamjaMohtadee04/saucedemo_website_automation_testing.git
```
## Install WebDriverIO:
``` 
npm init wdio@latest .

``` 

## Install Allure Reporter
```
npm i @wdio/allure-reporter --save-dev

```
## Install Allure Command Line
```
npm i allure-commandline --save-dev
```
## 🚀 Commands to run this project
 1.First, clone the repository and install the necessary packages mentioned above.
 2.For running all three test scenarios separately and also altogether in a sequential way.In terminal run :
```
npm run wdio 
 ```
 3.To generate the test case results report:
 ```
 allure generate allure-results

 ```
4.To open the test report in the browser (HTML view):
```
allure open allure-report

```
or, To genearate test case result reports and open report in the browser in a single command run:
```
 npm run getReport    
```
### This will generate an HTML report locally in your browser. It will show the pass/fail ratio. If a test case fails, it will take a screenshot of the failed step.

##Run specific test suites(Recommended):
Run test cases for each user individually:
- ### For locked_out_user:
```
npm run lockout_user

```
- ### For standard_user:
```
npm run standard_user

```
- ### For performance_glitch_user:
```
npm run performance_glitch_user
```
- ### then run the below command for generate report and open report in the browser:
```
 npm run getReport    
```
## ⚠️ Note
Sometimes, while running test cases (```npm run wdio```), an error may occur:
```
“Unable to load spec files quite likely because they rely on browser object.”
```
### In that case:
- Set up the project from scratch again

- Clone the repository again

- Install all necessary packages again

- Make sure you are using Node.js version 22 or above
