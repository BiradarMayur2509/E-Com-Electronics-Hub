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
@Table(name="consumer")
public class Consumer {

	//consumer_id INT PRIMARY KEY,
    //first_name VARCHAR(25),
    //last_name VARCHAR(25),
    //phone_no BIGINT,
    //email VARCHAR(70),
    //local_area VARCHAR(50),
    //user_id INT,
    //area_id INT,
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int consumer_id;
	
	@Column
	String first_name;
	
	@Column
	String last_name;
	
	@Column
	long phone_no;
	
	@Column
	String email;
	
	@Column
	String local_area;
	
	@ManyToOne
    @JoinColumn(name = "user_id")
	User user;
//	User user;
	
//	@Column
//	int area_id;
	
//	@JsonIgnoreProperties("consumer")
	@ManyToOne
    @JoinColumn(name = "area_id")
	Area area;
//	Area area;

	public Consumer() {
		super();
	}
public Consumer(String first_name, String last_name, long phone_no, String email, String local_area, User user,
		Area area) {
	super();
	this.first_name = first_name;
	this.last_name = last_name;
	this.phone_no = phone_no;
	this.email = email;
	this.local_area = local_area;
	this.user = user;
	this.area = area;
}
public int getConsumer_id() {
	return consumer_id;
}
public void setConsumer_id(int consumer_id) {
	this.consumer_id = consumer_id;
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
public String getLocal_area() {
	return local_area;
}
public void setLocal_area(String local_area) {
	this.local_area = local_area;
}
public User getUser() {
	return user;
}
public void setUser(User user) {
	this.user = user;
}
public Area getArea() {
	return area;
}
public void setArea(Area area) {
	this.area = area;
}
	
			
}
