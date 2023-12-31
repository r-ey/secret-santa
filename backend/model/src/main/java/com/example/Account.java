package com.example;
import java.util.ArrayList;
import java.util.Random;

public class Account {
    private static int idCounter = 0;

    private String username;
    private String password;
    private String email;
    private String resetPasswordCode;
    private int id;
    private ArrayList<Event> events = new ArrayList<>();
    private SecretSantaGiftAssigner secretSantaGiftAssigner;

    Account(String username, String password, String email) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.id = idCounter;
        idCounter++;
    }

    public void createEvent(String name) {
        boolean canAdd = true;

        for (Event event : events) {
            if (event.getName().equals(name)) {
                canAdd = false;
                break;
            }
        }

        if (canAdd) {
            events.add(new Event(name));
        }
    }

    public void startEvent(String eventName) {
        // This will start the event and send all the emails

        Event eventToStart = null;

        for (Event event : events) {
            if (event.getName().equals(eventName)) {
                eventToStart = event;
                break;
            }
        }

        secretSantaGiftAssigner = new SecretSantaGiftAssigner(eventToStart);
        secretSantaGiftAssigner.sendEmails();
    }

    public SecretSantaGiftAssigner getSecretSantaGiftAssigner() {
        return this.secretSantaGiftAssigner;
    }

    public ArrayList<Event> getEvents() {
        return this.getEvents();
    }

    public void sendVerificationCode() {
        Random random = new Random();
        // Gives 0 to randMaxInclusive
        int randomCode = random.nextInt(100000,999999999);

        EmailSender es = new EmailSender();

        es.sendEmail(this.email, "Here is your verification code! " + randomCode, "Request to reset password!");
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setPassword(String password, String resetCode) {
        if (resetCode.equals(resetPasswordCode) && resetPasswordCode != null) {
            this.password = password;
        }
    }

    public String getPassword() {
        return this.password;
    }

    public void deleteEvent(String name) {
        for (Event event : events) {
            if (event.getName().equals(name)) {
                events.remove(event);
                return;
            }
        }
    }

    public void addParticipantToEvent(String nameOfParticipant, String emailOfParticipant, String nameOfEvent) {
        Event eventToAddTo = null;

        for (Event event : events) {
            if (event.getName().equals(nameOfEvent)) {
                eventToAddTo = event;
                break;
            }
        }

        eventToAddTo.addParticipant(new Participant(nameOfParticipant, emailOfParticipant));
    }

    public void removeGiftForParticipant(String nameOfParticipant, String nameOfEvent, String nameOfGift) {
        Event eventToAccess = null;
        Participant participantToRemoveGiftFrom = null;
        Gift giftToRemove = null;

        for (Event event : events) {
            if (event.getName().equals(nameOfEvent)) {
                eventToAccess = event;
                break;
            }
        }

        for (Participant participant : eventToAccess.getParticipants()) {
            if (participant.getName().equals(nameOfParticipant)) {
                participantToRemoveGiftFrom = participant;
                break;
            }
        }

        for (Gift gift : participantToRemoveGiftFrom.getGifts()) {
            if (gift.getGiftName().equals(nameOfGift)) {
                giftToRemove = gift;
                break;
            }
        }

        participantToRemoveGiftFrom.getGifts().remove(giftToRemove);
    }

    public void addGiftForParticipant(String nameOfParticipant, String nameOfEvent, String nameOfGift, double priceOfGift) {
        Event eventToAccess = null;
        Participant participantToAddGiftTo = null;

        for (Event event : events) {
            if (event.getName().equals(nameOfEvent)) {
                eventToAccess = event;
                break;
            }
        }

        for (Participant participant : eventToAccess.getParticipants()) {
            if (participant.getName().equals(nameOfParticipant)) {
                participantToAddGiftTo = participant;
                break;
            }
        }

        participantToAddGiftTo.addGifts(new Gift(nameOfGift, priceOfGift));
    }

    public String getUsername() {
        return this.username;
    }
}