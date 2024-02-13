package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="city")
public class City {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int City_id;
	
	@Column
	String C_name;

	public City() {
		super();
	}

	public City(int city_id, String c_name) {
		super();
		City_id = city_id;
		C_name = c_name;
	}

	public int getCity_id() {
		return City_id;
	}

	public void setCity_id(int city_id) {
		City_id = city_id;
	}

	public String getC_name() {
		return C_name;
	}

	public void setC_name(String c_name) {
		C_name = c_name;
	}
	
		
}
