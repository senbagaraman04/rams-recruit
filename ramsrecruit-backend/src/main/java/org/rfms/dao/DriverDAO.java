package org.rfms.dao;

import java.util.List;

import org.rfms.entity.Driver;
import org.rfms.repository.DriverRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class DriverDAO {

	@Autowired
	private DriverRepository driverRepository;

	public List<Driver> get() {
		return driverRepository.findAll();
	}

	public Driver save(Driver driver) {
		return driverRepository.save(driver);
	}

	public void delete(int id) {
	    driverRepository.deleteById(id);
	}
}
