package com.backend.secretsanta.account;

import jakarta.persistence.Entity;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import jakarta.persistence.GeneratedValue;

import java.util.List;

@Entity
@Table
public class Account {

    @Id
    @SequenceGenerator(
        name = "account_sequence",
        sequenceName = "account_sequence",
        allocationSize = 1 
    )
    @GeneratedValue(
        strategy = GenerationType.SEQUENCE,
        generator = "account_sequence"
    )

    private Long id;
    private String username;
    private String password;
    private List<String> group;
    private String budget;
    private String name;
    private String preferences;

    public Account() {

    }

    // public Account(Long id, String u, String p) {
    //     this.id = id;
    //     username = u;
    //     password = p;
    // }

    public Account(String u, String p, List<String> g, String b, String n, String pr) {
        username = u;
        password = p;
        group = g;
        budget = b;
        name = n;
        preferences = p;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public Long getId() {
        return id;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "Account{" +
            "id=" + id +
            "username='" + username + '\'' +
            ", password='" + password + '\'' +
        "}";
    }
}
