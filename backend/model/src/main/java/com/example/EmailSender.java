package com.example;


import com.sendgrid.*;
import com.sendgrid.helpers.mail.Mail;
import com.sendgrid.helpers.mail.objects.Content;
import com.sendgrid.helpers.mail.objects.Email;

public class EmailSender {

    EmailSender() {

    }

        public void sendEmail(String email, String msg) {
        // Your SendGrid API Key
        String apiKey = "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";
        SendGrid sendGrid = new SendGrid(apiKey);

        // Build the email to send
        Email fromEmail = new Email("secretSanta@reynaldi-aditama.com");
        String subject = "Your Secret Santa Gift is Here!";
        Email toEmail = new Email(email); // Replace with the recipient's email address
        Content content = new Content("text/plain", msg);

        Mail mail = new Mail(fromEmail, subject, toEmail, content);

        // Build the request to send the email
        Request request = new Request();
        try {
            request.setMethod(Method.POST);
            request.setEndpoint("mail/send");
            request.setBody(mail.build());

            // Send the email
            Response response = sendGrid.api(request);

            // Output the response
            System.out.println("Status Code: " + response.getStatusCode());
            System.out.println("Body: " + response.getBody());
            System.out.println("Headers: " + response.getHeaders());
        } catch (Exception ex) {
            ex.printStackTrace();
        }
    }

    public static void main(String[] args) {
        // Your SendGrid API Key
        //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
        String apiKey = "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";
        SendGrid sendGrid = new SendGrid(apiKey);

        // Build the email to send
        Email fromEmail = new Email("secretSanta@reynaldi-aditama.com");
        String subject = "Your Secret Santa Gift is Here!";
        Email toEmail = new Email("jakeyeozh@gmail.com"); // Replace with the recipient's email address
        Content content = new Content("text/plain", "Ho ho ho! Your secret Santa gift is on its way!");

        Mail mail = new Mail(fromEmail, subject, toEmail, content);

        // Build the request to send the email
        Request request = new Request();
        try {
            request.setMethod(Method.POST);
            request.setEndpoint("mail/send");
            request.setBody(mail.build());

            // Send the email
            Response response = sendGrid.api(request);

            // Output the response
            System.out.println("Status Code: " + response.getStatusCode());
            System.out.println("Body: " + response.getBody());
            System.out.println("Headers: " + response.getHeaders());
        } catch (Exception ex) {
            ex.printStackTrace();
        }
    }
}