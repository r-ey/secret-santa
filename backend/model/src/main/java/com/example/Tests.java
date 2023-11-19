package com.example;

public class Tests {
    public static void main(String[] args) {
        Account account = new Account("Jake", "123");

        account.createEvent("christmas");

        account.addParticipantToEvent("reynaldidewanto", "reynaldidewanto1106@gmail.com", "christmas");
        account.addParticipantToEvent("luke", "luke.concini@gmail.com", "christmas");
        account.addParticipantToEvent("anton", "antonkazachenko2002@gmail.com", "christmas");

        account.addGiftForParticipant("reynaldidewanto", "christmas", "reynaldidewanto football", 11.99);
        account.addGiftForParticipant("reynaldidewanto", "christmas", "reynaldidewanto orange", 10.99);
        account.addGiftForParticipant("reynaldidewanto", "christmas", "reynaldidewanto apple", 9.99);

        account.addGiftForParticipant("luke", "christmas", "luke football", 110.99);
        account.addGiftForParticipant("luke", "christmas", "luke orange", 100.99);
        account.addGiftForParticipant("luke", "christmas", "luke apple", 90.99);

        account.addGiftForParticipant("anton", "christmas", "anton football", 3.99);
        account.addGiftForParticipant("anton", "christmas", "anton orange", 2.99);
        account.addGiftForParticipant("anton", "christmas", "anton apple", 1.99);

        account.startEvent("christmas");

        for (EmailMessage em : account.getSecretSantaGiftAssigner().getEmailMessageFlow()) {
            System.out.println(em.getEmail() + " " + em.getMessage());
        }


    }
}
