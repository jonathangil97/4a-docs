package com.example.Cancha_Team8_P54;

import com.example.Cancha_Team8_P54.model.Cancha;
import com.example.Cancha_Team8_P54.repository.CanchaRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class CanchaTeam8P54Application {

	public static void main(String[] args) {

		SpringApplication.run(CanchaTeam8P54Application.class, args);
	}

	@Bean
	CommandLineRunner runner(CanchaRepository repository) {
		return args -> {

			Cancha cancha = new Cancha("CanchaPrueba",
										"Calle456",
										"Bogota",
										"11",
										"Juan Posada",
					                       "50000");

			//repository.insert(cancha);
		};
	}
}
