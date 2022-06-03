# sample_application_flow_o_auth2_project

SampleApplicationFlowOAuth2Project - JavaScript client for sample_application_flow_o_auth2_project
This is an example of using OAuth2 Application Flow in a specification to describe security to your API.
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: io.swagger.codegen.v3.generators.javascript.JavaScriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install sample_application_flow_o_auth2_project --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var SampleApplicationFlowOAuth2Project = require('sample_application_flow_o_auth2_project');
var defaultClient = SampleApplicationFlowOAuth2Project.ApiClient.instance;

// Configure OAuth2 access token for authorization: application
var application = defaultClient.authentications['application'];
application.accessToken = "YOUR ACCESS TOKEN"

var api = new SampleApplicationFlowOAuth2Project.DefaultApi()
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.exampleGet(callback);
```

## Documentation for API Endpoints

All URIs are relative to *https://virtserver.swaggerhub.com/holtenterprises/ProfBRetailAPI/1.0.0*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*SampleApplicationFlowOAuth2Project.DefaultApi* | [**exampleGet**](docs/DefaultApi.md#exampleGet) | **GET** /example | Server example operation
*SampleApplicationFlowOAuth2Project.DefaultApi* | [**pingGet**](docs/DefaultApi.md#pingGet) | **GET** /ping | Server heartbeat operation

## Documentation for Models


## Documentation for Authorization


### application

- **Type**: OAuth
- **Flow**: application
- **Authorization URL**: 
- **Scopes**: 
  - : 
