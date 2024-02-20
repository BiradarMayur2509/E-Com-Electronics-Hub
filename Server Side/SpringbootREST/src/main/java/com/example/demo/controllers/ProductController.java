package com.example.demo.controllers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Product;
import com.example.demo.services.ProductService;

import java.util.List;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping("/viewProducts")
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }
}