$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/featureFiles/ReqResAPI.feature");
formatter.feature({
  "name": "ReqRes Api",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Functional"
    }
  ]
});
formatter.scenario({
  "name": "Save User Details",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Functional"
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
  "name": "I send a request to the URL to save valid user details",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinition.ReqRes_API_Definitions.sendPostRequest()"
});
formatter.write("Response Received \u003d\u003d {\n    \"name\": \"morpheus\",\n    \"job\": \"leader\",\n    \"id\": \"879\",\n    \"createdAt\": \"2022-07-30T08:23:17.538Z\"\n}");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response will return user status 201",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.ReqRes_API_Definitions.verifyPostStatus(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Update User Details",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Functional"
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
  "name": "I send a request to the URL to update user details",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinition.ReqRes_API_Definitions.sendPutRequest()"
});
formatter.write("Response Received \u003d\u003d {\n    \"name\": \"Morpheus\",\n    \"job\": \"UK Leader\",\n    \"updatedAt\": \"2022-07-30T08:23:17.728Z\"\n}");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response will return update user status 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.ReqRes_API_Definitions.verifyPutStatus(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Retrive User Details List",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Functional"
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
  "name": "I send a request to the URL to get users list details with page \"1\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinition.ReqRes_API_Definitions.sendListUsersRequest(java.lang.String)"
});
formatter.write("Response Received \u003d\u003d {\n    \"page\": 1,\n    \"per_page\": 6,\n    \"total\": 12,\n    \"total_pages\": 2,\n    \"data\": [\n        {\n            \"id\": 1,\n            \"email\": \"george.bluth@reqres.in\",\n            \"first_name\": \"George\",\n            \"last_name\": \"Bluth\",\n            \"avatar\": \"https://reqres.in/img/faces/1-image.jpg\"\n        },\n        {\n            \"id\": 2,\n            \"email\": \"janet.weaver@reqres.in\",\n            \"first_name\": \"Janet\",\n            \"last_name\": \"Weaver\",\n            \"avatar\": \"https://reqres.in/img/faces/2-image.jpg\"\n        },\n        {\n            \"id\": 3,\n            \"email\": \"emma.wong@reqres.in\",\n            \"first_name\": \"Emma\",\n            \"last_name\": \"Wong\",\n            \"avatar\": \"https://reqres.in/img/faces/3-image.jpg\"\n        },\n        {\n            \"id\": 4,\n            \"email\": \"eve.holt@reqres.in\",\n            \"first_name\": \"Eve\",\n            \"last_name\": \"Holt\",\n            \"avatar\": \"https://reqres.in/img/faces/4-image.jpg\"\n        },\n        {\n            \"id\": 5,\n            \"email\": \"charles.morris@reqres.in\",\n            \"first_name\": \"Charles\",\n            \"last_name\": \"Morris\",\n            \"avatar\": \"https://reqres.in/img/faces/5-image.jpg\"\n        },\n        {\n            \"id\": 6,\n            \"email\": \"tracey.ramos@reqres.in\",\n            \"first_name\": \"Tracey\",\n            \"last_name\": \"Ramos\",\n            \"avatar\": \"https://reqres.in/img/faces/6-image.jpg\"\n        }\n    ],\n    \"support\": {\n        \"url\": \"https://reqres.in/#support-heading\",\n        \"text\": \"To keep ReqRes free, contributions towards server costs are appreciated!\"\n    }\n}");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response will return update user status 200 with 6 records",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.ReqRes_API_Definitions.verifyListUsersStatus(int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Retrive Single User Details",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I send a request to the URL to get valid user details \u003cid\u003e",
  "keyword": "Given "
});
formatter.step({
  "name": "the response will return user status 200 and id \u003cid\u003e and email \"\u003cemail\u003e\" and firstName \"\u003cfirst_name\u003e\" and lastName \"\u003clast_name\u003e\"",
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
        "email",
        "first_name",
        "last_name"
      ]
    },
    {
      "cells": [
        "2",
        "janet.weaver@reqres.in",
        "Janet",
        "Weaver"
      ]
    },
    {
      "cells": [
        "11",
        "george.edwards@reqres.in",
        "George",
        "Edwards"
      ]
    },
    {
      "cells": [
        "12",
        "rachel.howell@reqres.in",
        "Rachel",
        "Howell"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Retrive Single User Details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Functional"
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
  "name": "I send a request to the URL to get valid user details 2",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinition.ReqRes_API_Definitions.sendRequest(int)"
});
formatter.write("Response Received \u003d\u003d {\n    \"data\": {\n        \"id\": 2,\n        \"email\": \"janet.weaver@reqres.in\",\n        \"first_name\": \"Janet\",\n        \"last_name\": \"Weaver\",\n        \"avatar\": \"https://reqres.in/img/faces/2-image.jpg\"\n    },\n    \"support\": {\n        \"url\": \"https://reqres.in/#support-heading\",\n        \"text\": \"To keep ReqRes free, contributions towards server costs are appreciated!\"\n    }\n}");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response will return user status 200 and id 2 and email \"janet.weaver@reqres.in\" and firstName \"Janet\" and lastName \"Weaver\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.ReqRes_API_Definitions.verifyStatus(int,int,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Retrive Single User Details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Functional"
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
  "name": "I send a request to the URL to get valid user details 11",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinition.ReqRes_API_Definitions.sendRequest(int)"
});
formatter.write("Response Received \u003d\u003d {\n    \"data\": {\n        \"id\": 11,\n        \"email\": \"george.edwards@reqres.in\",\n        \"first_name\": \"George\",\n        \"last_name\": \"Edwards\",\n        \"avatar\": \"https://reqres.in/img/faces/11-image.jpg\"\n    },\n    \"support\": {\n        \"url\": \"https://reqres.in/#support-heading\",\n        \"text\": \"To keep ReqRes free, contributions towards server costs are appreciated!\"\n    }\n}");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response will return user status 200 and id 11 and email \"george.edwards@reqres.in\" and firstName \"George\" and lastName \"Edwards\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.ReqRes_API_Definitions.verifyStatus(int,int,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Retrive Single User Details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Functional"
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
  "name": "I send a request to the URL to get valid user details 12",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinition.ReqRes_API_Definitions.sendRequest(int)"
});
formatter.write("Response Received \u003d\u003d {\n    \"data\": {\n        \"id\": 12,\n        \"email\": \"rachel.howell@reqres.in\",\n        \"first_name\": \"Rachel\",\n        \"last_name\": \"Howell\",\n        \"avatar\": \"https://reqres.in/img/faces/12-image.jpg\"\n    },\n    \"support\": {\n        \"url\": \"https://reqres.in/#support-heading\",\n        \"text\": \"To keep ReqRes free, contributions towards server costs are appreciated!\"\n    }\n}");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response will return user status 200 and id 12 and email \"rachel.howell@reqres.in\" and firstName \"Rachel\" and lastName \"Howell\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.ReqRes_API_Definitions.verifyStatus(int,int,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Retrive User Not Found Details",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Functional"
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
  "name": "I send a request to the URL to get user not found response",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinition.ReqRes_API_Definitions.sendDataNotFoundRequest()"
});
formatter.write("Response Received \u003d\u003d {\n    \n}");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response will return user not found status 404",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.ReqRes_API_Definitions.verifyNotFoundStatus(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Delete User Details",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Functional"
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
  "name": "I send a request to the URL to delete user details 5",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinition.ReqRes_API_Definitions.sendDeleteRequest(int)"
});
formatter.write("Response Received \u003d\u003d ");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response will return delete user status 204",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.ReqRes_API_Definitions.verifyDeleteStatus(int)"
});
formatter.result({
  "status": "passed"
});
});