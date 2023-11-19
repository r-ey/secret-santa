package secretSanta.backend.model;
import java.util.ArrayList;

public class Event {

    ArrayList<Participant> participants;
    String eventName;
    
    Event(String eventName) {
        this.eventName = eventName;
    }

    public void addParticipant(Participant participant) {
        participants.add(participant);
    }

    public ArrayList<Participant> getParticipants() {
        return participants;
    }

    public void removeParticipant(Participant participant) {
        participants.remove(participant);
    }

    public void changeName(String eventName) {
        this.eventName = eventName;
    }

    public String getName() {
        return this.eventName;
    }



}
