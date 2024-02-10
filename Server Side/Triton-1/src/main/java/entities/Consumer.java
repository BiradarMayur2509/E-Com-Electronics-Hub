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
	
	@Column
//	int user_id;
	@ManyToOne
    @JoinColumn(name = "area_id")
	User user;
	
	@Column
//	int area_id;
	
	@JsonIgnoreProperties("consumer")
	@ManyToOne
    @JoinColumn(name = "area_id")
	Area area;
	
	public Consumer(int consumer_id, String first_name, String last_name, long phone_no, String email, String local_area) {
		super();
		this.consumer_id = consumer_id;
		this.first_name = first_name;
		this.last_name = last_name;
		this.phone_no = phone_no;
		this.email = email;
		this.local_area = local_area;
		
	}
	
	public Consumer() {
		super();
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
		
}
