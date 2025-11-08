
# Question - DynamoDB, EC2, API Gateway and Lambda
### Assignment Overview
Create a serverless web application that does CRUD  operation on data through an HTML form hosted on EC2, processes it via Lambda functions, and stores it in DynamoDB.
### Architecture Components
EC2 Instance: Hosts a static HTML form<br />
API Gateway: REST API endpoint<br />
Lambda Functions: Process form data<br />
DynamoDB: Stores submitted form data<br />
IAM Roles: Secure permissions between services<br />
### Detailed Requirements
1. DynamoDB Table Design<br />
Create a table named UserSubmissions with:<br />
Partition Key: submissionId (String)<br />
Attributes: name, email, message, submissionDate, status

3. Lambda Functions<br />
Create two Lambda functions<br />
Submission Lambda:
Triggered by API Gateway POST request
Validates input data
Generates unique submissionId
Stores data in DynamoDB
Returns success/error response<br />
Query Lambda:
Triggered by API Gateway GET request
Retrieves submissions from DynamoDB
Supports querying by email or fetching all records
  
4. API Gateway<br />
REST API with two resources:<br />
POST /submit → Submission Lambda<br />
GET /submissions → Query Lambda<br />
Enable CORS for EC2 domain
  
5. EC2 Instance<br />
Launch t2.micro instance with Amazon Linux<br />
Install web server (Apache/Nginx)<br />
Host static HTML form with fields:<br />
Name (text, required), 
Email (email, required), 
Message (textarea, required).<br />
JavaScript to handle form submission to API Gateway
  
6. IAM Roles<br />
Lambda execution role with DynamoDB read/write permissions<br />
EC2 instance profile (if needed)<br />
Note: The HTML form should use CSS and Bootstrap.
