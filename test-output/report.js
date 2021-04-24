$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./src/test/java/features/login.Feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Login Feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#Scenario: Free CRM Login Test Scenario"
    },
    {
      "line": 4,
      "value": "#Given User is already on Login Page"
    },
    {
      "line": 5,
      "value": "#When Title of Login Page is FREECRM"
    },
    {
      "line": 6,
      "value": "#Then User enters \"saivaislam90@gmail.com\" and \"Saiva0814\""
    },
    {
      "line": 7,
      "value": "#Then User clicks on login button"
    },
    {
      "line": 10,
      "value": "#With Examples Keyword"
    }
  ],
  "line": 11,
  "name": "FreeCRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;freecrm-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "User enters \"\u003cusername\u003e\" and  \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user clicks on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "free-crm-login-feature;freecrm-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 20,
      "id": "free-crm-login-feature;freecrm-login-test-scenario;;1"
    },
    {
      "cells": [
        "saivaislam90@gmail.com",
        "Saiva0814"
      ],
      "line": 21,
      "id": "free-crm-login-feature;freecrm-login-test-scenario;;2"
    },
    {
      "cells": [
        "surat01@yahoo.com",
        "",
        "XOXCCDF"
      ],
      "line": 22,
      "id": "free-crm-login-feature;freecrm-login-test-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 21,
  "name": "FreeCRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;freecrm-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "User enters \"saivaislam90@gmail.com\" and  \"Saiva0814\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user clicks on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "LoginSteps.user_is_on_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 22,
  "name": "FreeCRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;freecrm-login-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "User enters \"surat01@yahoo.com\" and  \"\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user clicks on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "LoginSteps.user_is_on_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});