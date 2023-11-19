package secretSanta.backend.model;
import java.util.ArrayList;

public class Event {

    ArrayList<Participant> participants;
    String eventName;
    
    Event(String eventName) {
        this.eventName = eventName;
    }

    public void addParticipant(String name) {

    }

    public void removeParticipant(String name) {

    }

    public void changeName(String eventName) {
        this.eventName = eventName;
    }

    public String getName() {
        return this.eventName;
    }



}
