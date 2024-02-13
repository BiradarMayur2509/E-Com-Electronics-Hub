package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="area")
public class Area {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int area_id;
	
	@Column
	String area_name;
	
	@Column
	int pincode;
	
//	@Column
//	int City_code;
//	
//	@JsonIgnoreProperties("area")
	@ManyToOne
    @JoinColumn(name = "City_id")
	City city;

	public Area() {
		super();
	}

	public Area(String area_name, int pincode, City city) {
		super();
		this.area_name = area_name;
		this.pincode = pincode;
		this.city = city;
	}

	public int getArea_id() {
		return area_id;
	}

	public void setArea_id(int area_id) {
		this.area_id = area_id;
	}

	public String getArea_name() {
		return area_name;
	}

	public void setArea_name(String area_name) {
		this.area_name = area_name;
	}

	public int getPincode() {
		return pincode;
	}

	public void setPincode(int pincode) {
		this.pincode = pincode;
	}

	public City getCity() {
		return city;
	}

	public void setCity(City city) {
		this.city = city;
	}
	
	
//	Area area;
	
	
	
	
	
}
