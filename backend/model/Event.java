package secret-santa.backend;
import java.util.ArrayList;

public class Event {

    ArrayList<String> participants;
    
    Event() {

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
