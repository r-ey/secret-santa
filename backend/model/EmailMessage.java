package secretSanta.backend.model;

public class EmailMessage {
    private String email;
    private String message;

    EmailMessage(String email, String message) {
        this.email = email;
        this.message = message;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getEmail() {
        return email;
    }

    public String getMessage() {
        return message;
    }
}
