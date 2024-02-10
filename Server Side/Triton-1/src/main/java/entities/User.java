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
@Table(name="user")
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int uid;
	
	@Column
	String username;
	
	@Column
	String password;
	
	@Column
//	int role_id;
	
//	@JsonIgnoreProperties("user")
	@ManyToOne
    @JoinColumn(name = "area_id")
	Area area;
	
//	@JsonIgnoreProperties("user")
	@ManyToOne
    @JoinColumn(name = "role_id")
	Role role;
	
	public User(int uid, String username, String password ) {
		super();
		this.uid = uid;
		this.username = username;
		this.password = password;
	}
	
	public User() {
		super();
	}

	public int getUid() {
		return uid;
	}

	public void setUid(int uid) {
		this.uid = uid;
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


}
