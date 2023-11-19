package com.backend.secretsanta.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.backend.secretsanta.account.Account;
import com.backend.secretsanta.repo.AccountRepository;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service @RequiredArgsConstructor @Transactional @Slf4j
public class AccountServiceImp implements AccountService {

	private final AccountRepository accountRepository;

    public List<Account> getAccount() {
		return accountRepository.findAll();
	}

	@Override
	public Account addNewAccount(Account a) {
		Optional<Account> accountOptional = accountRepository.findByUsername(a.getUsername());
		if (accountOptional.isPresent()) {
			throw new IllegalStateException("username taken");
		} 
		log.info("saved a");
		accountRepository.save(a);
		return a;
	}

	public void deleteAccount(Long accountId) {
		boolean exists = accountRepository.existsById(accountId);
		if(!exists) {
			throw new IllegalStateException("account with id : " + accountId + " does not exists");
		}
		accountRepository.deleteById(accountId);
	}

	// @Override
    // public Optional<Account> getAccount(String username) {
	// 	log.info("get account " + accountRepository.findByUsername(username));
	// 	return accountRepository.findByUsername(username);
	// }

	@Override
    public List<Account> getAccounts() {
		log.info(accountRepository.findAll().toString());
		return accountRepository.findAll();
	}
}
