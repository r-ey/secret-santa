package secretSanta.backend.model;

public class Tests {
    public static void main(String[] args) {
        Account account = new Account("Jake", "123");

        account.createEvent("christmas");

        account.addParticipantToEvent("John", "john@gmail.com", "christmas");
        account.addParticipantToEvent("George", "george@gmail.com", "christmas");
        account.addParticipantToEvent("Mary", "mary@gmail.com", "christmas");

        account.addGiftForParticipant("John", "christmas", "John football", 11.99);
        account.addGiftForParticipant("John", "christmas", "John orange", 10.99);
        account.addGiftForParticipant("John", "christmas", "John apple", 9.99);

        account.addGiftForParticipant("George", "christmas", "George football", 110.99);
        account.addGiftForParticipant("George", "christmas", "George orange", 100.99);
        account.addGiftForParticipant("George", "christmas", "George apple", 90.99);

        account.addGiftForParticipant("Mary", "christmas", "Mary football", 3.99);
        account.addGiftForParticipant("Mary", "christmas", "Mary orange", 2.99);
        account.addGiftForParticipant("Mary", "christmas", "Mary apple", 1.99);

        account.


    }
}
