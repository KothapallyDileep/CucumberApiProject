$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/featureFiles/GetMethod.feature");
formatter.feature({
  "name": "Dummy Api for get method",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Send a valid Single Request to get user details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@GetUserDetails"
    }
  ]
});
formatter.step({
  "name": "I send a Single request to the URL to get user details",
  "keyword": "Given "
});
formatter.step({
  "name": "the response will return Single status 200 and id \u003cid\u003e and salary \u003cemployee_salary\u003e and name \"\u003cemployee_name\u003e\" and age \u003cemployee_age\u003e and message \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "id",
        "employee_salary",
        "employee_name",
        "employee_age",
        "message"
      ]
    },
    {
      "cells": [
        "1",
        "320800",
        "Tiger Nixon",
        "61",
        "Successfully! Record has been fetched."
      ]
    }
  ]
});
formatter.scenario({
  "name": "Send a valid Single Request to get user details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    },
    {
      "name": "@GetUserDetails"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I send a Single request to the URL to get user details",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinition.Dummy_Api_GETDefinitions.sendRequest()"
});
formatter.write("Response Received \u003d\u003d {\n    \"status\": \"success\",\n    \"data\": {\n        \"id\": 1,\n        \"employee_name\": \"Tiger Nixon\",\n        \"employee_salary\": 320800,\n        \"employee_age\": 61,\n        \"profile_image\": \"\"\n    },\n    \"message\": \"Successfully! Record has been fetched.\"\n}");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response will return Single status 200 and id 1 and salary 320800 and name \"Tiger Nixon\" and age 61 and message \"Successfully! Record has been fetched.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.Dummy_Api_GETDefinitions.verifyStatus(int,int,int,java.lang.String,int,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/java/featureFiles/ValidateGetMethod.feature");
formatter.feature({
  "name": "Validation of get method",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Send a valid Request to get user details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@GetUserDetails"
    }
  ]
});
formatter.step({
  "name": "I send a request to the URL to get user details",
  "keyword": "Given "
});
formatter.step({
  "name": "the response will return status 200 and id \u003cid\u003e and salary \u003cemployee_salary\u003e and name \"\u003cemployee_name\u003e\" and age \u003cemployee_age\u003e and message \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "id",
        "employee_salary",
        "employee_name",
        "employee_age",
        "message"
      ]
    },
    {
      "cells": [
        "1",
        "320800",
        "Tiger Nixon",
        "61",
        "Successfully! Record has been fetched."
      ]
    }
  ]
});
formatter.scenario({
  "name": "Send a valid Request to get user details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    },
    {
      "name": "@GetUserDetails"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I send a request to the URL to get user details",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinition.API_GETDefinitions.sendRequest()"
});
formatter.write("Response Received \u003d\u003d {\n    \"status\": \"success\",\n    \"data\": {\n        \"id\": 1,\n        \"employee_name\": \"Tiger Nixon\",\n        \"employee_salary\": 320800,\n        \"employee_age\": 61,\n        \"profile_image\": \"\"\n    },\n    \"message\": \"Successfully! Record has been fetched.\"\n}");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response will return status 200 and id 1 and salary 320800 and name \"Tiger Nixon\" and age 61 and message \"Successfully! Record has been fetched.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.API_GETDefinitions.verifyStatus(int,int,int,java.lang.String,int,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
});