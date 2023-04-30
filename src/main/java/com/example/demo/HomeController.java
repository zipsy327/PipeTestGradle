package com.example.demo;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Vector;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class HomeController {

	@GetMapping("/")
	public List<Map<String, String>> home()
	{
		List<Map<String, String>> list=new Vector<>();
		Map<String, String> m1=new HashMap<>();
		m1.put("name","이영자");
		m1.put("addr","강남구");
		m1.put("age","33");
		list.add(m1);
		
		Map<String, String> m2=new HashMap<>();
		m2.put("name","강호동");
		m2.put("addr","여의도");
		m2.put("age","17");
		list.add(m2);
		
		return list;	
		
	}
}
