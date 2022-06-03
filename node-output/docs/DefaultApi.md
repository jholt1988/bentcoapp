# SampleApplicationFlowOAuth2Project.DefaultApi

All URIs are relative to *https://virtserver.swaggerhub.com/holtenterprises/ProfBRetailAPI/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**exampleGet**](DefaultApi.md#exampleGet) | **GET** /example | Server example operation
[**pingGet**](DefaultApi.md#pingGet) | **GET** /ping | Server heartbeat operation

<a name="exampleGet"></a>
# **exampleGet**
> exampleGet()

Server example operation

This is an example operation to show how security is applied to the call.

### Example
```javascript
import {SampleApplicationFlowOAuth2Project} from 'sample_application_flow_o_auth2_project';
let defaultClient = SampleApplicationFlowOAuth2Project.ApiClient.instance;

// Configure OAuth2 access token for authorization: application
let application = defaultClient.authentications['application'];
application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SampleApplicationFlowOAuth2Project.DefaultApi();
apiInstance.exampleGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[application](../README.md#application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="pingGet"></a>
# **pingGet**
> pingGet()

Server heartbeat operation

This operation shows how to override the global security defined above, as we want to open it up for all users.

### Example
```javascript
import {SampleApplicationFlowOAuth2Project} from 'sample_application_flow_o_auth2_project';

let apiInstance = new SampleApplicationFlowOAuth2Project.DefaultApi();
apiInstance.pingGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

