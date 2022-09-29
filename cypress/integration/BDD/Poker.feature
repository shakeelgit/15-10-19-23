  
    Feature: Product Price Verification

    Feature Description
    Scenario: User should be able to add bet/s to betslip

      Given PokerStar is launched
      When User adds the bet1 to the betslip
      And  User adds the bet2 to the betslip
	  Then The bet/s are added to the betslip
