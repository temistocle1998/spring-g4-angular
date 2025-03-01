package com.unchk.g4.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.unchk.g4.entity.Item;

import java.util.List;

@Repository
public interface ItemRepository extends JpaRepository<Item, Long> {
    List<Item> findByCategory(String category);
    List<Item> findByStatus(String status);
    
    List<Item> findByCategoryAndStatus(String category, String status);
    
 // Méthode pour récupérer toutes les catégories distinctes
    @Query("SELECT DISTINCT i.category FROM Item i")
    List<String> findAllDistinctCategories();
}