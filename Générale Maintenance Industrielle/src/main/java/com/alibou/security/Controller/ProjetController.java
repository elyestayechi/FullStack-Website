package com.alibou.security.Controller;

import com.alibou.security.Entities.Projet;
import com.alibou.security.Service.ProjetService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/v1/projets")
@RequiredArgsConstructor
public class ProjetController {

    private final ProjetService projetService;

    @PostMapping("/add")
    public ResponseEntity<?> createProjet(@RequestBody Projet projet) {
        projetService.createProjet(projet);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/{id}/upload-image")
    public ResponseEntity<?> uploadImage(@PathVariable Long id, @RequestParam("file") MultipartFile file) {
        try {
            projetService.uploadImage(id, file);
            return ResponseEntity.ok().build();
        } catch (IOException e) {
            return ResponseEntity.status(500).body("Failed to upload image: " + e.getMessage());
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getProjet(@PathVariable Long id) {
        return ResponseEntity.ok(projetService.getProjetById(id));
    }

    @GetMapping("/all")
    public ResponseEntity<List<Projet>> getAllProjets() {
        List<Projet> projets = projetService.getAllProjets();
        return ResponseEntity.ok(projets);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateProjet(@PathVariable Long id, @RequestBody Projet projet) {
        projetService.updateProjet(id, projet);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteProjet(@PathVariable Long id) {
        projetService.deleteProjet(id);
        return ResponseEntity.ok().build();
    }
}
