package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;



@Entity
@Table(name="seller")
public class Seller {

	// seller_id INT AUTO_INCREMENT PRIMARY KEY,
	  //  GST_No VARCHAR(50),
	    //License_id VARCHAR(50),
	    //Shop_name VARCHAR(70),
	    //phone_no BIGINT,
	    //email VARCHAR(70),
	    //local_area VARCHAR(50),
	    //user_id INT,
	    //area_id INT,
	
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int seller_id;
	
	@Column
	String GST_No;
	
	@Column
	String License_id;
	
	@Column
	String shop_name;
	
	@Column
	long phone_no;
	
	@Column
	String email;
	
	@Column
	String local_area;
	
//	@Column
//	int user_id;
//	
//	@Column
//	int area_id;
	

	@ManyToOne
    @JoinColumn(name = "area_id")
	Area area;
	
//	@JsonIgnoreProperties("seller")
	@ManyToOne
    @JoinColumn(name = "user_id")
	User user;

	public Seller() {
		super();
	}

	public Seller(String gST_No, String license_id, String shop_name, long phone_no, String email, String local_area,
			Area area, User user) {
		super();
		GST_No = gST_No;
		License_id = license_id;
		this.shop_name = shop_name;
		this.phone_no = phone_no;
		this.email = email;
		this.local_area = local_area;
		this.area = area;
		this.user = user;
	}

	public int getSeller_id() {
		return seller_id;
	}

	public void setSeller_id(int seller_id) {
		this.seller_id = seller_id;
	}

	public String getGST_No() {
		return GST_No;
	}

	public void setGST_No(String gST_No) {
		GST_No = gST_No;
	}

	public String getLicense_id() {
		return License_id;
	}

	public void setLicense_id(String license_id) {
		License_id = license_id;
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

	public String getLocal_area() {
		return local_area;
	}

	public void setLocal_area(String local_area) {
		this.local_area = local_area;
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
