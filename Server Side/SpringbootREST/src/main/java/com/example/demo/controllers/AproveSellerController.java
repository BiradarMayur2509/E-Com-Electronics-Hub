//package com.example.demo.controllers;
//
////public class AproveSeller {
////
////}
//
//
//
//
//import java.util.ArrayList;
//import java.util.HashMap;
//import java.util.List;
//import java.util.Map;
//
//import javax.management.relation.Role;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.example.demo.entities.Seller;
//import com.example.demo.entities.User;
//import com.example.demo.entities.UserCheck;
//import com.example.demo.services.RoleService;
//import com.example.demo.services.SellerService;
//import com.example.demo.services.UserService;
//
//
//@CrossOrigin(origins = "http://localhost:3000")
//@RestController
//public class AproveSellerController {
//	
//	@Autowired
//	SellerService cservice;
//	
//	@Autowired
//	UserService lservice;
//	
//	@Autowired
//	RoleService rservice;
//	
//	@GetMapping("/getallSeller")
//	public Seller getSellers(@RequestParam("loginID") User loginID) {
//		Seller l=lservice.save(loginID);
//		return cservice.saveSeller(l);
//	}
//	
//	
//	@PostMapping("/regCustomer")
//	public Customer regCustomer(@RequestBody CustomerReg creg)
//	{
//		System.out.println("In Cust Method");
//		try {
//			System.out.println(creg);
//		Role r = rservice.getRole(1);
//		User l = new Login(creg.getUsername(),creg.getEmail(),creg.getPassword(),r,true);
//		User saved = lservice.saveLogin(l);
//	   Customer d = new Customer(creg.getFname(),creg.getLname(),creg.getAddress(),creg.getPhone(),l);
//	   return cservice.registerCustomer(d);
//		}
//		catch(Exception ex)
//		{	
//			ex.printStackTrace();
//			return null;
//		}
//	}
//	
//	
//	@GetMapping("/getallCustomer")
//	public ResponseEntity<List<Map<String, Object>>> getAllVendors1() {
//	    List<Map<String, Object>> vendorData = new ArrayList<>();
//	    List<Seller> rownerList = cservice.getAllCustomer();
//	    
//	    for (Seller rowner : rownerList) {
//	        Map<String, Object> vendorMap = new HashMap<>();
//	        vendorMap.put("seller_id", rowner.getLoginID().getLoginID());
//	        vendorMap.put("username", rowner.getLoginID().getUsername());
//	        vendorMap.put("status_approve", rowner.getLoginID().isStatus_approve());
//	        vendorMap.put("email", rowner.getLoginID().getEmail());
//	        vendorMap.put("fname", rowner.getFname());
//	        vendorMap.put("lname", rowner.getLname());
//	        vendorMap.put("address", rowner.getAddress());
//	        vendorMap.put("phone", rowner.getPhone());
//	        vendorData.add(vendorMap);
//	    }
//	    System.out.println(vendorData);
//	    return ResponseEntity.ok().body(vendorData);
//	}
//	
//	
//}
