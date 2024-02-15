package com.example.demo.entities;



public class SellerRegistration {
	
	String username;
	
	String password;

	String gst_no;
	
	String license_id;
	
	String shop_name;
	
	long phone_no;
	
	String email;
	
	String area_name;
	
	int pincode;
	
	int c_id;

	
	public SellerRegistration() {
		super();
	}

	public SellerRegistration(String username, String password, String gst_no, String license_id, String shop_name,
			long phone_no, String email, String area_name, int pincode, int c_id) {
		super();
		this.username = username;
		this.password = password;
		this.gst_no = gst_no;
		this.license_id = license_id;
		this.shop_name = shop_name;
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

	public String getGst_no() {
		return gst_no;
	}

	public void setGst_no(String gst_no) {
		this.gst_no = gst_no;
	}

	public String getLicense_id() {
		return license_id;
	}

	public void setLicense_id(String license_id) {
		this.license_id = license_id;
	}
	
	public String getShop_name() {
		return shop_name;
	}

	public void setShop_name(String shop_name) {
		this.shop_name = shop_name;
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
