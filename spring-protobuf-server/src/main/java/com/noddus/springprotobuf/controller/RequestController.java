package com.noddus.springprotobuf.controller;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.noddus.springprotobuf.service.ProtobufService;

@RestController
public class RequestController {
	
	@Autowired
	private ProtobufService protobufService;
	
	@CrossOrigin(origins = "*")
    @RequestMapping(value = "/create", method = RequestMethod.POST)
	public  Map<String, String> index(@RequestBody Map<String, String> input) {
		
		String message=null;
		HashMap<String, String> response = new HashMap<>();
		try {
			message = protobufService.createProtobufRecord(input);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			message = "[ERROR]: "+e.getLocalizedMessage();
		}
		
	    response.put("status", message);
		
        return response;
    }
	@RequestMapping(value="/check",method=RequestMethod.GET)
	public String check() {
		//easy to "GET" check
		return "I'm working!!!!!";
	}
}
