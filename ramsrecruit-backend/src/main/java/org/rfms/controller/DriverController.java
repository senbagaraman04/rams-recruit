package org.rfms.controller;

import java.util.Date;


import org.rfms.entity.Driver;
import org.rfms.model.Response;
import org.rfms.service.DriverService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * Controller Class to for Driver Details 
 * 
 * @author Senbagaraman Manoharan
 */
@RestController
public class DriverController {

	@Autowired
	private DriverService driverService;
	

	@GetMapping("/driver")
	public ResponseEntity<Response> get() {
	    System.out.println("Get Method of Driver Controller");
		return ResponseEntity.status(HttpStatus.OK)
				.body(new Response(driverService.get(), new Date()));
	}

	@PostMapping("/driver")
	public ResponseEntity<Response> save(@RequestBody Driver veh) {
	    System.out.println("Save Method of Driver Controller");
		return ResponseEntity.status(HttpStatus.OK)
				.body(new Response(driverService.save(veh), new Date()));
	}

	@PutMapping("/driver")
	public ResponseEntity<Response> update(@RequestBody Driver veh) {
	    
	    System.out.println("Update Method of Driver Controller");
		return ResponseEntity.status(HttpStatus.OK)
				.body(new Response(driverService.save(veh), new Date()));
	}

	@DeleteMapping("/driver")
	public ResponseEntity<Response> delete(@RequestParam("id") int id) {
	    driverService.delete(id);
	       System.out.println("Delete Method of Driver Controller");

		return ResponseEntity.status(HttpStatus.OK)
				.body(new Response(true, new Date()));
	}
}
