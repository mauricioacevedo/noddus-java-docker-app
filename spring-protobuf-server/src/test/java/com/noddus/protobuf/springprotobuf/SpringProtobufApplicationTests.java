package com.noddus.protobuf.springprotobuf;

import static org.junit.Assert.assertTrue;

import java.util.HashMap;
import java.util.Map;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

import com.noddus.springprotobuf.SpringProtobufApplication;

@RunWith(SpringRunner.class)

@SpringBootTest(classes = SpringProtobufApplication.class, webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)

public class SpringProtobufApplicationTests {

	@LocalServerPort
	private int port;

	TestRestTemplate restTemplate = new TestRestTemplate();

	HttpHeaders headers = new HttpHeaders();
		
	@Test
	public void saveProto() {

		HashMap<String, String> input = new HashMap<>();
		
		String id = "100";
		String name = "Julieta";
		
		input.put("id", id);
		input.put("name", name);

		HttpEntity<Map> entity = new HttpEntity<Map>(input, headers);

		ResponseEntity<String> response = restTemplate.exchange(
				createURLWithPort("/create"),
				HttpMethod.POST, entity, String.class);

		String answer= response.getBody();
		
		//String actual = response.getHeaders().get(HttpHeaders.LOCATION).get(0);
		//System.out.println(actual);
		assertTrue(answer.contains("Julieta"));

	}
	
	@Test
	public void checkService() {
		HttpEntity<String> entity = new HttpEntity<String>(null, headers);

		ResponseEntity<String> response = restTemplate.exchange(
				createURLWithPort("/check"),
				HttpMethod.GET, entity, String.class);
		String answer= response.getBody();
		
		assertTrue(answer.contains("working"));
		
	}
	
	private String createURLWithPort(String uri) {
		return "http://localhost:" + port + uri;
	}
}

