package com.example.demo.entities;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="product")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    @Column
     String category;
    @Column
     String brandName;
    @Column
     String modelName;
    @Column
     String description;
    @Column
     Double basePrice;
    @Column
     Double discountedPrice;
    
    
	public Product() {
		super();
	}
	public Product(String category, String brandName, String modelName, String description, Double basePrice,
			Double discountedPrice) {
		super();
		this.category = category;
		this.brandName = brandName;
		this.modelName = modelName;
		this.description = description;
		this.basePrice = basePrice;
		this.discountedPrice = discountedPrice;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getBrandName() {
		return brandName;
	}
	public void setBrandName(String brandName) {
		this.brandName = brandName;
	}
	public String getModelName() {
		return modelName;
	}
	public void setModelName(String modelName) {
		this.modelName = modelName;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Double getBasePrice() {
		return basePrice;
	}
	public void setBasePrice(Double basePrice) {
		this.basePrice = basePrice;
	}
	public Double getDiscountedPrice() {
		return discountedPrice;
	}
	public void setDiscountedPrice(Double discountedPrice) {
		this.discountedPrice = discountedPrice;
	}

    // Getters and setters
    
}