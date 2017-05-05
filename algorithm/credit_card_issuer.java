/*

# ----------------------------------------------------------------------
# Card                | Prefix                                 | Length
# ----------------------------------------------------------------------
# American Express    | 34, 37                                 | 15
# Diners Club         | 36, 38                                 | 14, 15
# Visa                | 4                                      | 16
# Visa Electron       | 4026, 417500, 4508, 4844, 4913, 4917   | 16
# Discover Card       | 6011, 622126-622925, 644-649, 65       | 16

*/


import java.io.*;
import java.util.*;

class CreditCardIssuer {
  public String getIssuer(String card) {
    String prefix = "";
    String visaPrefix = "";
    String visaElectronPrefix = "";
    String visaElectron6Prefix = "";
    String discoverPrefix = "";
    
    String amex34 = "34";
    String amex37 = "37";
    String diners36 = "36";
    String diners38= "38";
    String visa = "4";
    String visaElectron1 = "4026";
    String visaElectron2 = "417500";
    String visaElectron3 = "4508";
    String visaElectron4 = "4844";
    String visaElectron5 = "4913";
    String visaElectron6 = "4917";
    int discover1 = 644;
    int discover2 = 649;
    
    int rangeBegin = prefix.split("-");
    rangeBegin[0] = 622126;
    rangeEnd[1] = 622925;
    
    
    int len = card.length();
    
    prefix = card.substring(0, 2);
    visaPrefix = card.substring(0, 1);
    visaElectronPrefix = card.substring(0, 4);
    visaElectron6Prefix = card.substring(0, 6);
    discoverPrefix = card.substring(0, 3);
    
    if (len == 15 && (prefix.equals(amex34) || prefix.equals(amex37))) {
      return "American Express"; 
    } else if ((len == 14 || len == 15) && (prefix.equals(diners36) || prefix.equals(diners38))) {
      return "Diners Club"; 
    } else if (len == 16 && visaPrefix.equals(visa)) {
      if (visaElectronPrefix.equals(visaElectron1) 
          || visaElectronPrefix.equals(visaElectron3) 
          || visaElectronPrefix.equals(visaElectron4) 
          || visaElectronPrefix.equals(visaElectron5) 
          || visaElectronPrefix.equals(visaElectron6) 
          || visaElectron6Prefix.equals(visaElectron2)) {
        return "Visa Electron";
      }
      return "Visa";
    } else if (len == 16) {
      //if ( prefix >= rangeStart && prefix <= rangeEnd
      
    }
    
    return "Unknown"; 
  }
}

class Solution {
  public static void main(String[] args) {
    HashMap<String, String> expectedIssuers = new HashMap<String, String>();
    /* Test American Express True */
    expectedIssuers.put("341235468923456", "American Express");
    expectedIssuers.put("371235468923456", "American Express");
    
    /* Test Diners Club True */
    expectedIssuers.put("36123546892345", "Diners Club");
    expectedIssuers.put("361235468923456", "Diners Club");
    expectedIssuers.put("38123546892345", "Diners Club");
    
    /* Test Visa */
    expectedIssuers.put("4612354689234565", "Visa");
    
    /* Test Visa Electron */
    expectedIssuers.put("4026354689234565", "Visa Electron");
    expectedIssuers.put("4175004689234565", "Visa Electron");
    expectedIssuers.put("4508354689234565", "Visa Electron");
    expectedIssuers.put("4844354689234565", "Visa Electron");
    expectedIssuers.put("4913354689234565", "Visa Electron");
    expectedIssuers.put("4917354689234565", "Visa Electron");
    
    /* Test False */
    expectedIssuers.put("3412354689234", "Unknown");
    expectedIssuers.put("36123546845", "Unknown");
    expectedIssuers.put("123112354689234", "Unknown");
    expectedIssuers.put("49163546892345655", "Unknown");

    CreditCardIssuer cardIssuer = new CreditCardIssuer();

    for (String card : expectedIssuers.keySet()) {
      String expected = expectedIssuers.get(card);
      String actual = cardIssuer.getIssuer(card);

      if (!expected.equals(actual)) {
        System.out.println(String.format("%s: Expected: %s, but got %s", card, expected, actual));
        System.exit(-1);
      }
    }

    System.out.println("Success!");
  }
  
}
