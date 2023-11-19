package com.backend.secretsanta.account;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.backend.secretsanta.repo.AccountRepository;

import java.util.List;
import java.util.LinkedList;

@Configuration
public class AccountConfig {
    @Bean
    CommandLineRunner commandLineRunner(AccountRepository repository) {
        List<String> groupOne = new LinkedList<>();
        groupOne.add("Soccer");
        groupOne.add("Book");

        List<String> groupTwo = new LinkedList<>();
        groupTwo.add("Food");
        groupTwo.add("Drink");

        return args -> {
            Account userOne = new Account("jason@example.com", "pass", groupOne, "10", "Jason", "book");
            Account userTwo = new Account("maya@example.com", "pass", groupOne, "20", "Maya", "Soccer");
            Account userThree = new Account("daniel@example.com", "pass", groupOne, "15", "Daniel", "book");
            Account userFour = new Account("michelle@example.com", "pass", groupTwo, "30", "Michelle", "food");
            Account userFive = new Account("axton@example.com", "pass", groupTwo, "40", "Axton", "drink");


            repository.saveAll(
                List.of(userOne, userTwo, userThree, userFour, userFive)
            );
        };
    }
    
}
