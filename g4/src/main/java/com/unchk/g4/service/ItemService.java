package com.unchk.g4.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.unchk.g4.entity.Item;
import com.unchk.g4.repository.ItemRepository;

import java.util.List;
import java.util.Optional;

@Service
public class ItemService {

    @Autowired
    private ItemRepository itemRepository;

    public List<Item> getAllItems() {
        return itemRepository.findAll();
    }

    public Item getItemById(Long id) {
        return itemRepository.findById(id).orElseThrow(() -> new RuntimeException("Item not found"));
    }

    public Item createItem(Item item) {
        return itemRepository.save(item);
    }

    public Item updateItem(Long id, Item itemDetails) {
        Item item = getItemById(id);
        item.setTitle(itemDetails.getTitle());
        item.setCategory(itemDetails.getCategory());
        item.setLocation(itemDetails.getLocation());
        item.setDate(itemDetails.getDate());
        item.setImage(itemDetails.getImage());
        item.setDescription(itemDetails.getDescription());
        item.setStatus(itemDetails.getStatus());
        item.setAdditionalDetails(itemDetails.getAdditionalDetails());
        return itemRepository.save(item);
    }

    public void deleteItem(Long id) {
        itemRepository.deleteById(id);
    }

    public List<Item> getItemsByCategory(String category) {
        return itemRepository.findByCategory(category);
    }

    public List<Item> getItemsByStatus(String status) {
        return itemRepository.findByStatus(status);
    }

    public Item markItemAsFound(Long id, Long finderId) {
        Item item = getItemById(id);
        item.setStatus("Trouvé");
        // Ici, vous pouvez ajouter la logique pour associer l'objet à l'utilisateur qui l'a trouvé
        return itemRepository.save(item);
    }

    public Item markItemAsReturned(Long id) {
        Item item = getItemById(id);
        item.setStatus("Rendu");
        return itemRepository.save(item);
    }
    
    public List<Item> getItemsByCategoryAndStatus(String category, String status) {
        return itemRepository.findByCategoryAndStatus(category, status);
    }
    
    // Récupérer tous les objets avec le statut "En attente"
    public List<Item> getItemsByStatusEnAttente() {
        return itemRepository.findByStatus("En attente");
    }
    
    // Récupérer toutes les catégories distinctes
    public List<String> getAllDistinctCategories() {
        return itemRepository.findAllDistinctCategories();
    }
}