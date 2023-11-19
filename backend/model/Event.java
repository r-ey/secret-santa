package secretSanta.backend.model;
import java.util.ArrayList;

public class Event {

    ArrayList<String> participants;
    String name;
    
    Event(String name) {
        this.name = name;
    }

    public void addParticipant(String name) {
        if (!participants.contains(name)) {
            participants.add(name);
        }
    }

    public void removeParticipant(String name) {
        participants.remove(name);
    }

    public void changeName(String name) {
        this.name = name;
    }

    public String getName() {
        return this.name;
    }



}
