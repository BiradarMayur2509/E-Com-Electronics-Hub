package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;



@Entity
@Table(name="seller")
public class Seller {

	// seller_id INT AUTO_INCREMENT PRIMARY KEY,
	  //  gst_no VARCHAR(50),
	    //license_id VARCHAR(50),
	    //Shop_name VARCHAR(70),
	    //phone_no BIGINT,
	    //email VARCHAR(70),
	    //area_name VARCHAR(50),
	    //user_id INT,
	    //area_id INT,
	
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int seller_id;
	
	@Column
	String gst_no;
	
	@Column
	String license_id;
	
	@Column
	String shop_name;
	
	@Column
	long phone_no;
	
	@Column
	String email;
	
	
	

	@OneToOne
    @JoinColumn(name = "area_id")
	Area area;
	

	@OneToOne
    @JoinColumn(name = "user_id")
	User user;

	public Seller() {
		super();
	}

	public Seller(String gst_no, String license_id, String shop_name, long phone_no, String email, 
			Area area, User user) {
		super();
		this.gst_no = gst_no;
		this.license_id = license_id;
		this.shop_name = shop_name;
		this.phone_no = phone_no;
		this.email = email;
		this.area = area;
		this.user = user;
	}

	public int getSeller_id() {
		return seller_id;
	}

	public void setSeller_id(int seller_id) {
		this.seller_id = seller_id;
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


	public Area getArea() {
		return area;
	}

	public void setArea(Area area) {
		this.area = area;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	
	
	
		
	
}
