package secretSanta.backend.model;

import java.util.ArrayList;

public class Participant {
    public String name;
    public ArrayList<Gift> gifts;

    Participant(String name) {
        this.name = name;
    }

    public void addGifts(Gift gift) {
        gifts.add(gift);
    }

    public void removeGift(Gift gift) {
        gifts.remove(gift);
    }

    public String getName() {
        return name;
    }

    
}
