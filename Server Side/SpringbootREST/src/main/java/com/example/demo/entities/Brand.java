package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "brand")
public class Brand {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer brand_Id;

    @Column(nullable = false, length = 255)
    private String brand_Name;

	public Brand() {
		super();
	}

	public Brand(String brand_Name) {
		super();
		this.brand_Name = brand_Name;
	}

	public Integer getBrand_Id() {
		return brand_Id;
	}

	public void setBrand_Id(Integer brand_Id) {
		this.brand_Id = brand_Id;
	}

	public String getBrand_Name() {
		return brand_Name;
	}

	public void setBrand_Name(String brand_Name) {
		this.brand_Name = brand_Name;
	}
	
    


}