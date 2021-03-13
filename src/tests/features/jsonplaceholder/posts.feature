Feature: JsonPlaceHolder - Posts Endpoint

This feature contains scenarios to verify the functionalities for the post endpoint such as getting a resource, listing all resources, creating a resource, updating a resource and patching a resource

Scenario: To verify that all the posts can be listed down successfully
    When I make a request to the posts endpoint
    Then a list of all the posts should be retrieved

Scenario Outline: To verify that a single post can be retrieved by using the id
    When I make a request to posts endpoint with '<id>'
    Then only a single post should be retrieved from the endpoint
    Examples:
        | id | 
        | 1  | 
        | 2  | 
        | 3  | 
        | 4  | 