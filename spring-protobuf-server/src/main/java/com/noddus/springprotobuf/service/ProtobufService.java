package com.noddus.springprotobuf.service;

import java.io.IOException;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.noddus.springprotobuf.dao.ProtobufDao;

@Service
public class ProtobufService {

	@Autowired
	private ProtobufDao protobufDao;
	
	public String createProtobufRecord(Map<String, String> input) throws IOException {
	
		return protobufDao.save(input);
	}
}
