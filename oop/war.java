
import java.io.*;
import java.util.*;

/*
 * To execute Java, please define "static void main" on a class
 * named Solution.
 *
 * If you need more classes, simply define them inline.
 */

class Solution {
  public static void main(String[] args) {
    ArrayList<String> strings = new ArrayList<String>();
    strings.add("Hello, World!");
    strings.add("Welcome to CoderPad.");
    strings.add("This pad is running Java 8.");
    
    //player 1's deck
    List<Card> player1_deck = new ArrayList<Card>();
    player1_deck.add(0, new Card(2));
    player1_deck.add(1, new Card(14));
    player1_deck.add(2, new Card(9));
    player1_deck.add(3, new Card(6));
    
    
    //player 2's deck
    List<Card> player2_deck = new ArrayList<Card>();
    player2_deck.add(0, new Card(3));
    player2_deck.add(1, new Card(11));
    player2_deck.add(2, new Card(12));
    player2_deck.add(3, new Card(8));
    
    Card.createDeck();
    Player player1 = new Player("foo", player1_deck);
    Player player2 = new Player("bar", player2_deck);

    for (String string : strings) {
      System.out.println(string);
    }
  }
}

//Card info
class Card {
  
  //give face cards a number value
  public static final int Jack = 11;
  public static final int Queen = 12;
  public static final int King = 13;
  public static final int Ace = 14;
  
  public static final int Deck_Size = 52;
  
  public int value;
  public boolean Face_Up = true;
  
  // Constructor
  public Card(int value) {
    if (value < 2 || value > 14) {
      throw new IllegalArgumentException("Card value is incorrect"); 
    }
    this.value = value;
  }
  
  // Create a deck of cards
  public static List<Card> createDeck() {
   List<Card> deck = new ArrayList<Card>(Deck_Size);
    for (int j = 0; j < 4; j++) {
      for (int i = 2; i <= 14; i++) {
        deck.add(new Card(i)); 
      }
    }
    
    return deck;
  }
  
  //Create getters and setters
  public int getValue() {
    return value;
  }
  
  public boolean getFaceUp() {
    return Face_Up; 
  }
  
  public void setValue(int value) {
    this.value = value;
  }
  
  public void setFaceUp(boolean Face_Up) {
    this.Face_Up = Face_Up;
  }
}

class Player {
  
  public String Player_Name;
  public List<Card> Players_Deck;
  
  //constructor
  public Player(String Player_Name, List<Card> Players_Deck) {
    this.Player_Name = Player_Name;
    this.Players_Deck = Players_Deck;
  }
  
  //track of players hand
  public int cardsInHand() {
    return Players_Deck.size();
  }
  
  public boolean cardsInDeck() {
    return Players_Deck.isEmpty(); 
  }
  
  //playing a card
  public Card playCard() {
    return Players_Deck.remove(0); 
  }
  
  //add card to deck
  public void addCards(Collection<Card> cardsWon) {
    Players_Deck.addAll(cardsWon);
  }
}
