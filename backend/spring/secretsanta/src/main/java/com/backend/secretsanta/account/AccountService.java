package com.backend.secretsanta.account;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class AccountService {


    public List<Account> getAccount() {
		return List.of(new Account("username", "password"));
	}
}
