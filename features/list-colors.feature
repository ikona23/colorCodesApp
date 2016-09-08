Feature: List colors

@watch
Scenario: I want to see list of all colors
  Given I am viewing the page at "/"
  Then I can see the list item "red"
  And I can see the item "#c85353"
