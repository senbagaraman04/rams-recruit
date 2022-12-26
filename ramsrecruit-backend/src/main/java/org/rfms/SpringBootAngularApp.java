package org.rfms;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = "org.rfms.*")
public class SpringBootAngularApp {

	public static void main(String[] args) {

		SpringApplication.run(SpringBootAngularApp.class, args);
	}
}
