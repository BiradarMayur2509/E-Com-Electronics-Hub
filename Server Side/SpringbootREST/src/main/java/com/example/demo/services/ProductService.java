package com.example.demo.services;

import com.example.demo.entities.Area;
import com.example.demo.entities.Brand;
import com.example.demo.entities.Category;
import com.example.demo.entities.City;
import com.example.demo.entities.Model;
import com.example.demo.entities.Product;
import com.example.demo.repositories.ModelRepository;
import com.example.demo.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;
//
//public Product updateProduct(Product product) {
//  return productRepository.save(product);
//}
//
//public void deleteProduct(Long id) {
//  productRepository.deleteById(id);
//}

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;
    
    @Autowired
    private ModelRepository modelRepository;
    
    

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product getProductById(Long pid) {
        return productRepository.findById(pid).orElse(null);
    }

    public Product addProduct(Product product) {
        return productRepository.save(product);
    }
    
    public List<Product> getProductsByModel1()
	{
   
    	return productRepository.getProductsByModel();		
	}


    

}