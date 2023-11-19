package secretSanta.backend.model;
import java.util.ArrayList;

public class SantaEvent {

    ArrayList<String> participants;
    
    SantaEvent() {

    }

    public void addParticipant(String name) {
        if (!participants.contains(name)) {
            participants.add(name);
        }
    }

    public void removeParticipant(String name) {
        participants.remove(name);
    }



}
