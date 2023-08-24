Feature: Validate accessing a Product

     Scenario: Access a product via category after applying multiple filters
       Given User navigates to the app URL
       When App loads successfully
       And Navigate to Search by category as per specified path
            | primary                   | secondary                 |
            | Cell phones & accessories | Cell Phones & Smartphones |  
       And click all filters     
       And Apply screen size filter with below checkbox number
            | checkBoxNumber |
            | 5              |
       And Apply Min & Max price filter with below data
            | min | max  | 
            | 10  | 1000 |
       And Apply item location filter option US only
       And Apply the filters
       Then Verify that below filter set are applied
            | filterOne   | filterTwo | filterThree   |
            | Screen Size | Price     | Location      |
      

     Scenario: Access a product via search
       Given User navigates to the app URL
       When App loads successfully
       And Type a text in the search bar
            | text    |
            | MacBook |
       And Click search
       And Change the category section to laptop desktop accessories
       And Click search
       Then Verify that the home page loads completely
       And Verify that the nth result name matches with the search string  
            | nth | text    |
            | 1   | MacBook |
           
