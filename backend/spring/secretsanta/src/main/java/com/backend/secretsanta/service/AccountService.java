package com.backend.secretsanta.service;

import com.backend.secretsanta.account.Account;

import java.util.List;
import java.util.Optional;

public interface AccountService {
    Account addNewAccount(Account account);
    Optional<Account> getAccount(String username);
    //List<Account> getAccounts();
}
