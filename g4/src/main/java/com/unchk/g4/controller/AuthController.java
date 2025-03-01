package com.unchk.g4.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.unchk.g4.ApiResponse;
import com.unchk.g4.LoginResponse;
import com.unchk.g4.dto.LoginRequest;
import com.unchk.g4.dto.RegisterRequest;
import com.unchk.g4.entity.User;
import com.unchk.g4.service.UserService;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
	@Autowired
	private UserService userService;

	// Endpoint pour l'inscription
	@PostMapping("/register")
	public ResponseEntity<ApiResponse<User>> register(@RequestBody RegisterRequest registerRequest) {
		User user = userService.register(registerRequest);

		ApiResponse<User> apiResponse = new ApiResponse<>(false, user);
		return ResponseEntity.ok(apiResponse);
	}

	@PostMapping("/login")
	public ResponseEntity<ApiResponse<LoginResponse>> login(@RequestBody LoginRequest loginRequest) {
        LoginResponse loginResponse = userService.login(loginRequest);
        ApiResponse<LoginResponse> apiResponse = new ApiResponse<>(false, loginResponse);
	    return ResponseEntity.ok(apiResponse);
	}
}
