IT-2234(P) - Web Services and Server Technologies

Day 15 - 2025.05.22


***************************************************************************************************************************


API Endpoint Description


***************************************************************************************************************************


GET /Student/course

Purpose:

Retrieve a list of all students along with detailed information about their enrolled degree program and the courses they are enrolled in.

Request:

Method: GET

URL: /Student/course

Response:

Success (200 OK): Returns an array of student objects. Each student object includes:

Student details (ID, name, date of birth, gender)

The populated degreeId field with full degree information (degree name, credits, duration, faculty)

The populated enroled_courses array with complete course details (code, name, credits, description)

No Data Found (404 Not Found): If there are no students in the database, returns a message: "Sorry, No Data Found!"

Server Error (500 Internal Server Error): If an unexpected error occurs, returns a message: "Server Error!"


***************************************************************************************************************************


Student.js

![image](https://github.com/user-attachments/assets/c92305ce-61ef-4019-b53e-5f1d774a3c69)


***************************************************************************************************************************


studentRoute.js

![image](https://github.com/user-attachments/assets/b5fd738d-d57e-4304-8a77-f39ce80509d0)


***************************************************************************************************************************


Postman

![image](https://github.com/user-attachments/assets/c11b4bf3-3def-45c4-92e3-18297ba90eb3)

