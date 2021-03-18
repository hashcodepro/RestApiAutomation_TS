Feature: JsonPlaceHolder - Posts Endpoint

This feature contains scenarios to verify the functionalities for the post endpoint such as getting a resource, listing all resources, creating a resource, updating a resource and patching a resource

Scenario: To verify that all the posts can be listed down successfully
    When I make a request to the posts endpoint
    Then a list of all the posts should be retrieved

Scenario Outline: To verify that a single post can be retrieved by using the id '<id>'
    When I make a request to posts endpoint with '<id>'
    Then only a single post should be retrieved from the endpoint
    Examples:
        | id | 
        | 1  | 
        | 2  | 
        | 3  | 
        | 4  |

Scenario: To verify that a new post can be created
    When I make a request to posts endpoint with new post information
    Then a new post should be created successfully
    And an Id should be generated for the new post

Scenario: To verify that an existing post can be updated
    Given that the post to be updated with id '3' exists
    When a request is made to posts endpoint with updated information for id '3'
    Then the post should be updated successfully
    And the udpated information should be returned in the response

Scenario: To verify that a single value can be updated for an existing post
    Given that the post to be updated with id '1' exists
    When a request is made to posts endpoint with updated information
        |id |field   |value         |
        |1  |body    |patched body  |
    Then the post should be updated successfully
    And the udpated information should be returned in the response