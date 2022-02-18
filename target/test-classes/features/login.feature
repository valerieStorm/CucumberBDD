Feature: Free CRM Login Features

#Without example Keyword --- Data driven approach without using Examples Key word - Scenario

#Scenario: Free CRM Login test scenario
#Given User is already in Login page
#When Title of page is Free CRM
#Then user enters "abcd" and "efgh"
#And user clicks on login button

# With examples Keyword  --- Data driven approach using Examples Key word - Scenario Outline

#Scenario Outline: Free CRM Login test scenario
#Given User is already in Login page
#When Title of page is Free CRM
#Then user enters "<username>" and "<password>"
#And user clicks on login button
#Then Close The Browser
#
#Examples:
      #| username | password |        
      #| Hello    | pass1    |      
      #| Hi       | pass2    |       
      


# Using data tables - raw method

#Scenario: Free CRM Login test scenario
#Given User is already in Login page
#When Title of page is Free CRM
#Then user enters username and password
#| Hello | hell |
#And user clicks on login button
#Then Close The Browser       


# Using data tables- using Maps

Scenario: Free CRM Login test scenario
Given User is already in Login page
When Title of page is Free CRM
Then user enters username and password
| username | password |
| Hello | hell |
And user clicks on login button
Then Close The Browser   


       