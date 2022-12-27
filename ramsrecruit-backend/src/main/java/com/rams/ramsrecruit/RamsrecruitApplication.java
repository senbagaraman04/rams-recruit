/**
 * https://github.com/senbagaraman04/rams-recruit
 */

package com.rams.ramsrecruit;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@EntityScan("com.rams.ramsrecruit.*")
@CrossOrigin(origins = "http://localhost:4200")
public class RamsrecruitApplication {

	public static void main(String[] args) {

		SpringApplication.run(RamsrecruitApplication.class, args);
	}

}
