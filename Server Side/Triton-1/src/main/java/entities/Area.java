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
@Table(name="area")
public class Area {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int area_id;
	
	@Column
	String area_name;
	
	@Column
	int pincode;
	
	@Column
	int City_code;
	
//	@JsonIgnoreProperties("area")
	@ManyToOne
    @JoinColumn(name = "area_id")
	Area area;
	
	public Area(int area_id,String area_name, int pincode, int City_code)
	{
		super();
		this.area_id = area_id;
		this.area_name = area_name;
		this.pincode = pincode;
		this.City_code = City_code;
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

	public int getCity_code() {
		return City_code;
	}

	public void setCity_code(int city_code) {
		City_code = city_code;
	}
	
	
}
