package secretSanta.backend.model;

public class Gift {
    public double price;
    public String giftName;

    Gift(String giftName, double price) {
        this.giftName = giftName;
        this.price = price;
    }

    public String getGiftName() {
        return this.giftName;
    }

    public double price() {
        return this.price;
    }
}
