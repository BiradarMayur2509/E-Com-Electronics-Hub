package com.example.demo.controllers;

import com.example.demo.entities.Area;
import com.example.demo.entities.Model;
import com.example.demo.entities.Product;
import com.example.demo.entities.Role;
import com.example.demo.entities.Seller;
import com.example.demo.entities.SellerRegistration;
import com.example.demo.entities.User;
import com.example.demo.services.ModelService;
import com.example.demo.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
//@PostMapping
//public Product addProduct(@RequestBody Product product) {
//  return productService.addProduct(product);
//}
//
//@PutMapping("/{id}")
//public Product updateProduct(@PathVariable Long id, @RequestBody Product product) {
//  product.setProduct_Id(id);
//  return productService.updateProduct(product);
//}
//
//@DeleteMapping("/{id}")
//public void deleteProduct(@PathVariable Long id) {
//  productService.deleteProduct(id);
//}
//
//@PostMapping("/{id}/discount")
//public Product applyDiscount(@PathVariable Long id, @RequestBody BigDecimal discount) {
//  return productService.applyDiscount(id, discount);
//}
import java.math.BigDecimal;
import java.util.List;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class ProductController {

    @Autowired
    private ProductService productService;
    
    @Autowired
    private ModelService modelService;
    
    

    @GetMapping
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }

    @GetMapping("/getProduct")
    public Product getProductById(@PathVariable Long pid) {
        return productService.getProductById(pid);
    }
    
//    @GetMapping("/getProducts")
//    public List<Product> getProductsByModel_Id(@RequestParam int mid) {
//        return productService.getProductsByModel1(mid);
//    }
    @GetMapping("/getProducts")
  public List<Product> getProductsByModel_Id() {
      return modelService.getModel1();
  }

    
    
    
    
    
    

}