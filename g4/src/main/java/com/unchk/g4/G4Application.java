package com.unchk.g4;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = { SecurityAutoConfiguration.class })
public class G4Application {

	public static void main(String[] args) {
		SpringApplication.run(G4Application.class, args);
	}

}