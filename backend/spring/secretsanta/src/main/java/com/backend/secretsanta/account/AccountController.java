package com.backend.secretsanta.account;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.secretsanta.service.AccountServiceImp;

@RestController
@RequestMapping(path = "api/accounts")
public class AccountController {

	private final AccountServiceImp accountService;

	@Autowired
	public AccountController(AccountServiceImp as) {
		accountService = as;
	}

	@PostMapping
	public void registerNewAccount(@RequestBody Account a) {
		accountService.addNewAccount(a);
	}

	@DeleteMapping(path="{accountId}")
	public void deleteAccount(@PathVariable("accountId") Long accountId) {
		accountService.deleteAccount(accountId);
	}
}
