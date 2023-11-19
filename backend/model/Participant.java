package secretSanta.backend.model;

import java.util.ArrayList;

public class Participant {
    public String name;
    public String email;
    public ArrayList<Gift> gifts;

    Participant(String name, String email) {
        this.name = name;
        this.email = email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getEmail() {
        return email;
    }

    public void addGifts(Gift gift) {
        gifts.add(gift);
    }

    public void removeGift(Gift gift) {
        gifts.remove(gift);
    }

    public ArrayList<Gift> getGifts() {
        return gifts;
    }

    public String getName() {
        return name;
    }

    
}
