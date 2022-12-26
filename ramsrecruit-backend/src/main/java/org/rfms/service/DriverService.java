package org.rfms.service;

import java.util.List;

import org.rfms.dao.DriverDAO;
import org.rfms.entity.Driver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DriverService {

	@Autowired
	private DriverDAO driverDAO;

	public List<Driver> get() {
		return driverDAO.get();
	}

	public Driver save(Driver driver) {
		return driverDAO.save(driver);
	}

	public void delete(int id) {
	    driverDAO.delete(id);
	}
}
