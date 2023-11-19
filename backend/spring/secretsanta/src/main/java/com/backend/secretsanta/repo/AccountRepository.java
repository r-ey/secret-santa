package com.backend.secretsanta.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.backend.secretsanta.account.Account;

import java.util.Optional;
import java.util.List;

@Repository
public interface AccountRepository extends JpaRepository<Account, Long> {

    // @Query("SELECT a FROM Account a WHERE a.username = ?1")
    // Optional<Account> findByUsername(String username); 
    List<Account> getAllAccounts();   

}