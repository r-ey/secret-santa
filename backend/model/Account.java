package secretSanta.backend.model;
import java.util.ArrayList;

public class Account {
    String username;
    String password;
    ArrayList<Event> events;

    Account(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public void createEvent(String name) {
        boolean canAdd = true;
        
        for (Event event : events) {
            if (event.getName() == name) {
                canAdd = false;
                break;
            }
        }

        if (canAdd) {
            events.add(new Event(name));
        }
    }

    public ArrayList<Event> getEvents() {
        return this.getEvents();
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setPassword(String password) {
        this.password = password;
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

    public String getUsername() {
        return this.username;
    }
}