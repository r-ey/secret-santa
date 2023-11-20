package com.example;

public class Gift {
    private double price;
    private String giftName;

    Gift(String giftName, double price) {
        this.giftName = giftName;
        this.price = price;
    }

    public String getGiftName() {
        return this.giftName;
    }

    public double getPrice() {
        return this.price;
    }
}
