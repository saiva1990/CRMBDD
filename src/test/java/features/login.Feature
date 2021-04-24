Feature: Free CRM Login Feature

#Scenario: Free CRM Login Test Scenario
#Given User is already on Login Page
#When Title of Login Page is FREECRM
#Then User enters "saivaislam90@gmail.com" and "Saiva0814"
#Then User clicks on login button


#With Examples Keyword
Scenario Outline: FreeCRM Login Test Scenario

Given user is already on Login Page
When User enters "<username>" and  "<password>"
Then user clicks on Login button
Then User is on home page 
Then Close the browser
 
 Examples:
 |username|password|
 |saivaislam90@gmail.com|Saiva0814|
 |surat01@yahoo.com| |XOXCCDF|