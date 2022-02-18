$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Login Features",
  "description": "",
  "id": "free-crm-login-features",
  "keyword": "Feature"
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "#Without example Keyword --- Data driven approach without using Examples Key word - Scenario"
    },
    {
      "line": 5,
      "value": "#Scenario: Free CRM Login test scenario"
    },
    {
      "line": 6,
      "value": "#Given User is already in Login page"
    },
    {
      "line": 7,
      "value": "#When Title of page is Free CRM"
    },
    {
      "line": 8,
      "value": "#Then user enters \"abcd\" and \"efgh\""
    },
    {
      "line": 9,
      "value": "#And user clicks on login button"
    },
    {
      "line": 11,
      "value": "# With examples Keyword  --- Data driven approach using Examples Key word - Scenario Outline"
    },
    {
      "line": 13,
      "value": "#Scenario Outline: Free CRM Login test scenario"
    },
    {
      "line": 14,
      "value": "#Given User is already in Login page"
    },
    {
      "line": 15,
      "value": "#When Title of page is Free CRM"
    },
    {
      "line": 16,
      "value": "#Then user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\""
    },
    {
      "line": 17,
      "value": "#And user clicks on login button"
    },
    {
      "line": 18,
      "value": "#Then Close The Browser"
    },
    {
      "line": 19,
      "value": "#"
    },
    {
      "line": 20,
      "value": "#Examples:"
    },
    {
      "line": 21,
      "value": "#| username | password |"
    },
    {
      "line": 22,
      "value": "#| Hello    | pass1    |"
    },
    {
      "line": 23,
      "value": "#| Hi       | pass2    |"
    },
    {
      "line": 27,
      "value": "# Using data tables - raw method"
    },
    {
      "line": 29,
      "value": "#Scenario: Free CRM Login test scenario"
    },
    {
      "line": 30,
      "value": "#Given User is already in Login page"
    },
    {
      "line": 31,
      "value": "#When Title of page is Free CRM"
    },
    {
      "line": 32,
      "value": "#Then user enters username and password"
    },
    {
      "line": 33,
      "value": "#| Hello | hell |"
    },
    {
      "line": 34,
      "value": "#And user clicks on login button"
    },
    {
      "line": 35,
      "value": "#Then Close The Browser"
    },
    {
      "line": 38,
      "value": "# Using data tables- using Maps"
    }
  ],
  "line": 40,
  "name": "Free CRM Login test scenario",
  "description": "",
  "id": "free-crm-login-features;free-crm-login-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 41,
  "name": "User is already in Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "Title of page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "user enters username and password",
  "rows": [
    {
      "cells": [
        "username",
        "pass"
      ],
      "line": 44
    },
    {
      "cells": [
        "Hello",
        "hell"
      ],
      "line": 45
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Close The Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.user_already_on_login_page()"
});
formatter.result({
  "duration": 12328549925,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.Title__of_page_is_Free_CRM()"
});
formatter.result({
  "duration": 49709525,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 6218335636,
  "error_message": "java.lang.IllegalArgumentException: Keys to send should be a not null CharSequence\r\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:97)\r\n\tat StepDefinitions.LoginStepDefinitions.user_enters_username_and_password(LoginStepDefinitions.java:94)\r\n\tat ✽.Then user enters username and password(login.feature:43)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinitions.Close_The_Browser()"
});
formatter.result({
  "status": "skipped"
});
});