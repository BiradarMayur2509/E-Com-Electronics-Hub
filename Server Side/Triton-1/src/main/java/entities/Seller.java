package entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

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
	
	@Column
	int user_id;
	
	@Column
	int area_id;
	
	@JsonIgnoreProperties("seller")
	@ManyToOne
    @JoinColumn(name = "area_id")
	Area area;
	
	public Seller(int seller_id, String GST_No, String  License_id, String shop_name, long phone_no, String email, String local_area, int user_id, int area_id) {
		super();
		this.seller_id = seller_id;
		this.GST_No = GST_No;
		this.License_id = License_id;
		this.shop_name = shop_name;
		this.phone_no = phone_no;
		this.email = email;
		this.local_area = local_area;
		this.user_id = user_id;
		this.area_id = area_id;
	}
	
	public Seller() {
		super();
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

	public int getUser_id() {
		return user_id;
	}

	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}

	public int getArea_id() {
		return area_id;
	}

	public void setArea_id(int area_id) {
		this.area_id = area_id;
	}
	
	
}
