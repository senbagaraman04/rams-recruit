package com.rams.ramsrecruit;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan("com.rams.ramsrecruit.*")
public class RamsrecruitApplication {

	public static void main(String[] args) {

		SpringApplication.run(RamsrecruitApplication.class, args);
	}

}
