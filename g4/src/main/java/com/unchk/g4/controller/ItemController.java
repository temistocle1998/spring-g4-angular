package com.unchk.g4.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.unchk.g4.ApiResponse;
import com.unchk.g4.entity.Item;
import com.unchk.g4.service.ItemService;

import java.util.List;

@RestController
@RequestMapping("/api/items")
public class ItemController {

	@Autowired
	private ItemService itemService;

	// Récupérer tous les objets
	@GetMapping
	public ResponseEntity<ApiResponse<List<Item>>> getAllItems() {
		List<Item> items = itemService.getAllItems();

		ApiResponse<List<Item>> apiResponse = new ApiResponse<>(false, items);

		return ResponseEntity.ok(apiResponse);
	}

	// Récupérer un objet par son ID
	@GetMapping("/{id}")
	public ResponseEntity<Item> getItemById(@PathVariable Long id) {
		Item item = itemService.getItemById(id);
		return ResponseEntity.ok(item);
	}

	// Créer un nouvel objet
	@PostMapping
	public ResponseEntity<Item> createItem(@RequestBody Item item) {
		Item createdItem = itemService.createItem(item);
		return ResponseEntity.ok(createdItem);
	}

	// Mettre à jour un objet existant
	@PutMapping("/{id}")
	public ResponseEntity<Item> updateItem(@PathVariable Long id, @RequestBody Item itemDetails) {
		Item updatedItem = itemService.updateItem(id, itemDetails);
		return ResponseEntity.ok(updatedItem);
	}

	// Supprimer un objet
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteItem(@PathVariable Long id) {
		itemService.deleteItem(id);
		return ResponseEntity.noContent().build();
	}

	// Rechercher des objets par catégorie
	@GetMapping("/category/{category}")
	public ResponseEntity<List<Item>> getItemsByCategory(@PathVariable String category) {
		List<Item> items = itemService.getItemsByCategory(category);
		return ResponseEntity.ok(items);
	}

	// Rechercher des objets par statut
	@GetMapping("/status/{status}")
	public ResponseEntity<List<Item>> getItemsByStatus(@PathVariable String status) {
		List<Item> items = itemService.getItemsByStatus(status);
		return ResponseEntity.ok(items);
	}

	// Marquer un objet comme trouvé
	@PatchMapping("/{id}/markAsFound")
	public ResponseEntity<Item> markItemAsFound(@PathVariable Long id, @RequestParam Long finderId) {
		Item item = itemService.markItemAsFound(id, finderId);
		return ResponseEntity.ok(item);
	}

	// Marquer un objet comme rendu
	@PatchMapping("/{id}/markAsReturned")
	public ResponseEntity<Item> markItemAsReturned(@PathVariable Long id) {
		Item item = itemService.markItemAsReturned(id);
		return ResponseEntity.ok(item);
	}

	// Récupérer tous les objets avec le statut "En attente"
	@GetMapping("/en-attente")
	public ResponseEntity<List<Item>> getItemsEnAttente() {
		List<Item> items = itemService.getItemsByStatusEnAttente();
		return ResponseEntity.ok(items);
	}

	// Récupérer tous les objets avec le statut "En attente"
	@GetMapping("/category/{category}/{status}")
	public ResponseEntity<List<Item>> getItemsByCategoryEnAttente(@PathVariable String category,
			@PathVariable String status) {
		List<Item> items = itemService.getItemsByCategoryAndStatus(category, "En attente");
		return ResponseEntity.ok(items);
	}

	@GetMapping("/categories")
	public ResponseEntity<ApiResponse<List<String>>> getAllCategories() {
		List<String> categories = itemService.getAllDistinctCategories();
	    categories.add(0, "Tous");

		ApiResponse<List<String>> apiResponse = new ApiResponse<>(false, categories);

		return ResponseEntity.ok(apiResponse);
	}
}