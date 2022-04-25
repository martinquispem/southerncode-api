

Feature: DuckDuckGo API

  Scenario: As a user, I search for dogs
    Given I search for "dogs"
    Then It will show a list of all images

  Scenario: As a user, I search for dogecoin
    Given I search for "dogecoin"
    Then It will show a list of all urls