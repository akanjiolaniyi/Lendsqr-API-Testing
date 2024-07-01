QA summary report :https://docs.google.com/document/d/1INl1tlCjzTeHAJV05QbeVSntCTbIdvjlZt7456TA0v4/edit?usp=sharing

 
 Task 2: 
 Lendsqr-API-Testing
 Automated test scripts for Lendsqr Adjutor APIs 

 Setup and Running Tests
 Prerequisites
- Postman installed
- Node.js and npm installed

 Running the Tests

1. Open Postman.
2. Import the collection by clicking on "Import" and selecting `Lendsqr-API-Testing.postman_collection.json`.
3. Run the collection using the Postman Collection Runner.

 Test Summary
  API Module  

1  API Module  - Signup API  
   Test Case   - Successful Signup                            
   Status      - Passed

2 API Module  - Signup API  
  Test Case   - Signup with Existing Email                           
  Status      - Passed

3 API Module  -  Login API   
  Test Case   -  Successful Login                         
  Status      - failed

4.API Module  -  Login API   
  Test Case   -  Login with Invalid Credentials                      
  Status      - Passed

5.API Module  -  Retrieve API Key
  Test Case   -  Retrieve API Key with Valid Token                      
  Status      - Passed

6.API Module  -  Retrieve API Key
  Test Case   -  Retrieve API Key with Invalid Token                     
  Status      - Passed




Notes

- Ensure that the API endpoints and test data used in the scripts are correct and updated.
- If there are environment-specific configurations, update the tests accordingly.



