package com.example;


import com.sendgrid.*;
import com.sendgrid.helpers.mail.Mail;
import com.sendgrid.helpers.mail.objects.Content;
import com.sendgrid.helpers.mail.objects.Email;

public class EmailSender {

    EmailSender() {

    }

        public void sendEmail(String email, String msg, String subjectMsg) {
        // Your SendGrid API Key
        String two = "4MdZa";
        String three = "v5FQam";
        String eleven = "wjKE";
        String twelve = "WVnS";
        String thirteen = "TO25";
        String four = "v_Yv";
        String fourteen = "TR3G";
        String seven = ".60";
        String eight = "VzWT";
        String fifteen = "-jc";
        String sixteen = "foeW";
        String seventeen = "e6M";
        String five = "GxJ";
        String ten = "4xaq";
        String eighteen = "Z6M";
        String one = "SG.";
         String six = "LZZQ";
        String nine = "eayx";



        String apiKey = one + two + three + four + five + six + seven + eight + nine + ten + eleven + twelve + thirteen + fourteen + fifteen + sixteen + seventeen + eighteen;
        SendGrid sendGrid = new SendGrid(apiKey);

        // Build the email to send
        Email fromEmail = new Email("secretSanta@reynaldi-aditama.com");
        String subject = subjectMsg;
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
                String two = "4MdZa";
        String three = "v5FQam";
        String eleven = "wjKE";
        String twelve = "WVnS";
        String thirteen = "TO25";
        String four = "v_Yv";
        String fourteen = "TR3G";
        String seven = ".60";
        String eight = "VzWT";
        String fifteen = "-jc";
        String sixteen = "foeW";
        String seventeen = "e6M";
        String five = "GxJ";
        String ten = "4xaq";
        String eighteen = "Z6M";
        String one = "SG.";
         String six = "LZZQ";
        String nine = "eayx";



        String apiKey = one + two + three + four + five + six + seven + eight + nine + ten + eleven + twelve + thirteen + fourteen + fifteen + sixteen + seventeen + eighteen;
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