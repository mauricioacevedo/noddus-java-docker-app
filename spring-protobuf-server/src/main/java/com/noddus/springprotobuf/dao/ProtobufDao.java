package com.noddus.springprotobuf.dao;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.noddus.springprotobuf.dao.PersonProto.Person;


@Repository
public class ProtobufDao {

	//save JSON to a protobuf format file
	public String save(Map<String, String> input) throws IOException {
		Person.Builder personBuilder = Person.newBuilder();
		
		String id_tmp = input.get("id");
		String name = input.get("name");
		
		int id=-1;
		
		//check id is an integer number
		try {
			id = Integer.parseInt(id_tmp);
		}catch(NumberFormatException err) {
			System.out.println("[ERROR]: Id is not a number ("+id_tmp+")");
			return "[ERROR]: Id is not a number ("+id_tmp+")";
		}
		
		personBuilder.setId(id);
		personBuilder.setName(name);
		
		// protobuf memory representation 
		Person person = personBuilder.build();
		
		String time = getActualTime();
		String fileName = "saved_protos/"+name+time+".proto.bin";
		FileOutputStream output = new FileOutputStream(fileName);
		person.writeTo(output);	
		output.close();
		
		File test = new File(fileName);
		//check that the proto file was successfuly created!!!
		if(test.exists()) return "Protobuf file ("+name+") saved!!!!";
		else return "[ERROR] Proto not saved";
		
	}
	
	//get the actual time formatted
	private String getActualTime() {
		Date dNow = new Date();
        SimpleDateFormat ft = new SimpleDateFormat("yyyyMMddhhmmssMs");
        String text = ft.format(dNow);
		
		return text;
	}
}
