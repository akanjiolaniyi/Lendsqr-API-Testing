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

 API Module           Test Case                                       Status
 Signup API          Successful Signup                               Passed 
 Signup API          Signup with Existing Email                      Passed 
 Login API           Successful Login                                failed 
 Login API           Login with Invalid Credentials                  Passed 
 Retrieve API Key    Retrieve API Key with Valid Token               Passed 
 Retrieve API Key    Retrieve API Key with Invalid Token             Passed 

Notes

- Ensure that the API endpoints and test data used in the scripts are correct and updated.
- If there are environment-specific configurations, update the tests accordingly.

 Contribution

Feel free to fork this repository, make changes, and submit pull requests.

