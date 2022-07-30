# CucumberApiProject
Cucumber Api Project With Extent Reports
To Run the project please use below maven command

clean test -DtestEnvironment=dev -Dcucumber.filter.tags="@Functional"

After execution the reports get generated in the below path

/CucumberApiProject/test-output/HtmlReport/HtmlReport.html

To run the project in jenkins

Step1: Create Freestyle project in jenkins
![image](https://user-images.githubusercontent.com/108435238/181900412-ce1da3e5-a10e-475d-9a15-550f044dfde6.png)

Step2: give the local project directory in the use coustom workspace field
![image](https://user-images.githubusercontent.com/108435238/181901936-b9b70ab3-acb6-4991-aed9-15b298e8d697.png)

Step3: In build section add the maven goals(clean test -DtestEnvironment=dev -Dcucumber.filter.tags="@Functional")
![image](https://user-images.githubusercontent.com/108435238/181901506-b711d0d5-c021-4b7f-8404-60a42cb64371.png)

Step4: Add the cucumber reports plugin in the jenkins (https://plugins.jenkins.io/cucumber-reports/)

Step5: Add the cucumber post Build action and update the JSON Reports Path with cucumber.json location  
![image](https://user-images.githubusercontent.com/108435238/181902614-4f868111-0827-434a-a3a6-6bed3ad55cb0.png)

Step6: Click on build now to run the jenkins project.
![image](https://user-images.githubusercontent.com/108435238/181902795-8c80df26-b842-4887-b0a9-836d58cc559a.png)

Step7: Click on the cucumber reports to see the results.
![image](https://user-images.githubusercontent.com/108435238/181902823-ec31b798-27da-41f4-b199-4ca49cd61a93.png)
