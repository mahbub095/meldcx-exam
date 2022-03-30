Feature: Login page

    Feature Login page will work depending on the user credentials.

    Background: 
        Given A user opens a partnerforsqa website
    Scenario: Login Test
        When A user enters the username "SomeUser_name"
        And A user enters the password "TopSecret1234!"
        And A user clicks on the login button
        And Check & verify name
        And Click logout
    
   Scenario:  Login Test with 2nd id
        When A user enters the username "dummytree"
        And A user enters the password "test1"
        And A user clicks on the login button
        And Check & verify 2nd name
        And Click logout
    Scenario: Incorrect Username Login
        When A user provides incorrect credentials
        |username       |password       |
        |testName       |secret_sauce   |
        And A user clicks on the login button
        
    Scenario: Incorrect Password Login
        When A user provides incorrect credentials
        |username       |password       |
        |standard_user  |testPassword   |
        And A user clicks on the login button
  