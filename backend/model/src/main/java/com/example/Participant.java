package com.example;

import java.util.ArrayList;

public class Participant {
    private String name;
    private String email;
    private ArrayList<Gift> gifts = new ArrayList<>();;

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
