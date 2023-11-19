package com.backend.secretsanta;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;

@SpringBootApplication
public class SecretsantaApplication {
	public static void main(String[] args) {
		SpringApplication.run(SecretsantaApplication.class, args);
	}

	@GetMapping
	public String hello() {
		return "Hello World!";
	}
}
