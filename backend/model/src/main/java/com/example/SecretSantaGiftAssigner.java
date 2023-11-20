package com.example;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Random;

public class SecretSantaGiftAssigner {

    private ArrayList<Participant> participants = new ArrayList<>();;
    private ArrayList<EmailMessage> emailMessageFlow = new ArrayList<>();;

    SecretSantaGiftAssigner(Event event) {
        this.participants = event.getParticipants();
        assignSecretSantas();
    }

    // This will assign everyone's email with a message. The message will then be sent to the email via another class
    private void assignSecretSantas() {
        ArrayList<Participant> participantsClone = (ArrayList<Participant>) participants.clone();
        
        Collections.shuffle(participantsClone);

        for (int i = 0; i < participantsClone.size(); i++) {
            if (i+1 != participantsClone.size()) {
                emailMessageFlow.add(new EmailMessage(participantsClone.get(i).getEmail(), generateMessage(participantsClone.get(i + 1))));
            } else {
                emailMessageFlow.add(new EmailMessage(participantsClone.get(i).getEmail(), generateMessage(participantsClone.get(0))));
            }
        }
    }

    public void sendEmails() {
        for (EmailMessage em : emailMessageFlow) {
            EmailSender es = new EmailSender();
            es.sendEmail(em.getEmail(), em.getMessage(), "You were assigned as someones seceret santa!");
        }
    }

    public ArrayList<EmailMessage> getEmailMessageFlow() {
        return this.emailMessageFlow;
    }

    private Gift getRandomGift(Participant participant) {
        int randMaxInclusive = participant.getGifts().size() - 1;

        Random random = new Random();
        // Gives 0 to randMaxInclusive
        int randomIndex = random.nextInt(randMaxInclusive) + 1;

        return participant.getGifts().get(randomIndex);
    }

    private String generateMessage(Participant participant) {
        Gift randomGift = getRandomGift(participant);

        String message = "";

        message += "You are assigned to " + participant.getName() + "!";
        message += " They would like " + randomGift.getGiftName() + " which costs $" + randomGift.getPrice();
        message += " Merry Christmas!!\n";
        message += "Best, Secret Santa";


        return message;
    }
    
}
