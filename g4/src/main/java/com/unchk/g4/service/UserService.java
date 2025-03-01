package com.unchk.g4.service;

import java.util.Date;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.unchk.g4.LoginResponse;
import com.unchk.g4.dto.LoginRequest;
import com.unchk.g4.dto.RegisterRequest;
import com.unchk.g4.entity.User;
import com.unchk.g4.exception.EmailAlreadyUsedException;
import com.unchk.g4.exception.InvalidCredentialsException;
import com.unchk.g4.repository.UserRepository;

@Service
public class UserService {
	@Autowired
	private UserRepository userRepository;
	private PasswordEncoder passwordEncoder; // Pour encoder le mot de passe
	@Autowired
	private JwtService jwtService; // Service pour générer des tokens JWT

	public User register(RegisterRequest registerRequest) {
		// Vérifier si l'email est déjà utilisé

		if (userRepository.findByEmail(registerRequest.getEmail()).isPresent()) {
			throw new EmailAlreadyUsedException("Email déjà utilisé");
		}

		// Créer un nouvel utilisateur
		User user = new User();
		user.setName(registerRequest.getName());
		user.setEmail(registerRequest.getEmail());
		user.setTelephone(registerRequest.getTelephone());
		user.setPassword(registerRequest.getPassword()); // Encoder le mot de passe
		user.setAdresse(registerRequest.getAdresse()); // Encoder le mot de passe
		user.setRole(registerRequest.getRole()); // Encoder le mot de passe
		user.setJoinDate(new Date());
		user.setRating(0.0f); // Note initiale

		// Définir le rôle (proprietaire ou finder)
		if ("proprietaire".equalsIgnoreCase(registerRequest.getRole())) {
			// Logique spécifique pour un propriétaire (si nécessaire)
		} else if ("finder".equalsIgnoreCase(registerRequest.getRole())) {
			// Logique spécifique pour un finder (si nécessaire)
		} else {
			throw new RuntimeException("Rôle invalide. Doit être 'proprietaire' ou 'finder'");
		}

		// Sauvegarder l'utilisateur dans la base de données
		return userRepository.save(user);
	}

	public LoginResponse login(LoginRequest loginRequest) {
		// Trouver l'utilisateur par email
		Optional<User> userOptional = userRepository.findByEmail(loginRequest.getEmail());

		if (userOptional.isEmpty()) {
			throw new InvalidCredentialsException("Email ou mot de passe incorrect");
		}

		User user = userOptional.get();

		// Vérifier le mot de passe
		if (!passwordEncoder.matches(loginRequest.getPassword(), user.getPassword())) {
			throw new InvalidCredentialsException("Email ou mot de passe incorrect");
		}

		// Générer un token JWT
		String token = jwtService.generateToken(user.getEmail());

		// Créer la réponse de connexion
		LoginResponse loginResponse = new LoginResponse();
		loginResponse.setName(user.getName());
		loginResponse.setAddresse(user.getAdresse());
		loginResponse.setEmail(user.getEmail());
		loginResponse.setPhone_number(user.getTelephone());
		loginResponse.setToken(token);

		return loginResponse;
	}
}
