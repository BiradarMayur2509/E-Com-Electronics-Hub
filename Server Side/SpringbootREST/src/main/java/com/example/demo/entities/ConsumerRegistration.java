package com.example.demo.entities;

public class ConsumerRegistration {

	
	String username;
	
	String password;

	String first_name;
	
	String last_name;
	
	long phone_no;
	
	String email;
	
	String area_name;
	
	int pincode;
	
	int c_id;

	
	public ConsumerRegistration() {
		super();
	}


	public ConsumerRegistration(String username, String password, String first_name, String last_name, long phone_no,
			String email, String area_name, int pincode, int c_id) {
		super();
		this.username = username;
		this.password = password;
		this.first_name = first_name;
		this.last_name = last_name;
		this.phone_no = phone_no;
		this.email = email;
		this.area_name = area_name;
		this.pincode = pincode;
		this.c_id = c_id;
	}


	public String getUsername() {
		return username;
	}


	public void setUsername(String username) {
		this.username = username;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public String getFirst_name() {
		return first_name;
	}


	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}


	public String getLast_name() {
		return last_name;
	}


	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}


	public long getPhone_no() {
		return phone_no;
	}


	public void setPhone_no(long phone_no) {
		this.phone_no = phone_no;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
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


	public int getC_id() {
		return c_id;
	}


	public void setC_id(int c_id) {
		this.c_id = c_id;
	}

}
