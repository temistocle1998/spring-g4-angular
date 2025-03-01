package com.unchk.g4.dataloader;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.unchk.g4.entity.Item;
import com.unchk.g4.entity.User;
import com.unchk.g4.repository.ItemRepository;
import com.unchk.g4.repository.UserRepository;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Component
public class DataLoader implements CommandLineRunner {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ItemRepository itemRepository;

    @Override
    public void run(String... args) throws Exception {
        // Charger des utilisateurs
        User user1 = new User();
        user1.setName("Pierre M.");
        user1.setEmail("pierre@example.com");
        user1.setTelephone("0123456789");
        user1.setAdresse("123 Rue Paris");
        user1.setPassword("hashed123");
        user1.setJoinDate(new Date());
        user1.setRating(4.5f);
        user1.setRole("owner");
        userRepository.save(user1);

        User user2 = new User();
        user2.setName("Jean D.");
        user2.setEmail("jean@example.com");
        user2.setTelephone("0987654321");
        user2.setAdresse("456 Rue Lyon");
        user2.setPassword("hashed456");
        user2.setJoinDate(new Date());
        user2.setRating(4.2f);
        user2.setRole("finder");
        userRepository.save(user2);
        
        User user3 = new User();
        user3.setName("Lamine D.");
        user3.setEmail("lamine@example.com");
        user3.setTelephone("0987654321");
        user3.setAdresse("456 Rue Lyon");
        user3.setPassword("hashed456");
        user3.setJoinDate(new Date());
        user3.setRating(4.2f);
        user3.setRole("admin");

        userRepository.save(user3);

        // Charger des objets
        Item item1 = new Item();
        item1.setTitle("Clés trouvées");
        item1.setCategory("Clés");
        item1.setLocation("Parc Central");
        item1.setDate(new Date());
        item1.setImage("https://placehold.co/600x400.png");
        item1.setDescription("Trousseau avec 3 clés et un porte-clés rouge");
        item1.setStatus("En attente");

        Map<String, String> details1 = new HashMap<>();
        details1.put("brand", "Samsung");
        details1.put("color", "Noir");
        details1.put("condition", "Quelques rayures");
        item1.setAdditionalDetails(details1);

        item1.setFinder(user1); // L'utilisateur Pierre a trouvé cet objet
        itemRepository.save(item1);

        Item item2 = new Item();
        item2.setTitle("Portefeuille perdu");
        item2.setCategory("Portefeuille");
        item2.setLocation("Gare du Nord");
        item2.setDate(new Date());
        item2.setImage("https://placehold.co/600x400.png");
        item2.setDescription("Portefeuille en cuir marron avec des cartes de crédit");
        item2.setStatus("Perdu");

        Map<String, String> details2 = new HashMap<>();
        details2.put("brand", "Louis Vuitton");
        details2.put("color", "Marron");
        details2.put("condition", "Bon état");
        item2.setAdditionalDetails(details2);

        item2.setProprietaire(user2); // L'utilisateur Jean a perdu cet objet
        itemRepository.save(item2);

        System.out.println("Données chargées avec succès !");
    }
}