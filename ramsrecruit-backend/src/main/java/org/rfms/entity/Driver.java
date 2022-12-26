package org.rfms.entity;


import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="driver")
public class Driver implements Serializable {


    
    
    private static final long serialVersionUID = 1681261135191719508L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String  driverName;
    
    private  String driverNumber;
    
    private  String  licenseNumber;
    
    private  String  batchNumber;
    
    private  String  expiryDateLicense;
    
    private  String  expiryDateBatch;

    /**
     * @return the driverName
     */
    public String getDriverName()
    {
        return driverName;
    }

    /**
     * @param driverName the driverName to set
     */
    public void setDriverName(String driverName)
    {
        this.driverName = driverName;
    }

    /**
     * @return the driverNumber
     */
    public String getDriverNumber()
    {
        return driverNumber;
    }

    /**
     * @param driverNumber the driverNumber to set
     */
    public void setDriverNumber(String driverNumber)
    {
        this.driverNumber = driverNumber;
    }

    /**
     * @return the id
     */
    public int getId()
    {
        return id;
    }

    /**
     * @param id the id to set
     */
    public void setId(int id)
    {
        this.id = id;
    }

    /**
     * @return the licenseNumber
     */
    public String getLicenseNumber()
    {
        return licenseNumber;
    }

    /**
     * @param licenseNumber the licenseNumber to set
     */
    public void setLicenseNumber(String licenseNumber)
    {
        this.licenseNumber = licenseNumber;
    }

    /**
     * @return the batchNumber
     */
    public String getBatchNumber()
    {
        return batchNumber;
    }

    /**
     * @param batchNumber the batchNumber to set
     */
    public void setBatchNumber(String batchNumber)
    {
        this.batchNumber = batchNumber;
    }

    /**
     * @return the expiryDateLicense
     */
    public String getExpiryDateLicense()
    {
        return expiryDateLicense;
    }

    /**
     * @param expiryDateLicense the expiryDateLicense to set
     */
    public void setExpiryDateLicense(String expiryDateLicense)
    {
        this.expiryDateLicense = expiryDateLicense;
    }

    /**
     * @return the expiryDateBatch
     */
    public String getExpiryDateBatch()
    {
        return expiryDateBatch;
    }

    /**
     * @param expiryDateBatch the expiryDateBatch to set
     */
    public void setExpiryDateBatch(String expiryDateBatch)
    {
        this.expiryDateBatch = expiryDateBatch;
    }
   
    
}
