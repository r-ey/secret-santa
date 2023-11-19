package com.backend.secretsanta.account;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "api/v1/account")
public class AccountController {

	private final AccountService accountService;

	@Autowired
	public AccountController(AccountService as) {
		accountService = as;
	}

    
    @GetMapping
	public List<Account> getAccount() {
		return accountService.getAccount();
	}
    
}
