package com.alibou.security.Service;

import com.alibou.security.Entities.Projet;
import com.alibou.security.Repositories.ProjetRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ProjetService {

    private final ProjetRepository projetRepository;

    public Projet createProjet(Projet projet) {
        return projetRepository.save(projet);
    }

    public void uploadImage(Long id, MultipartFile file) throws IOException {
        Projet projet = projetRepository.findById(id).orElseThrow(() -> new RuntimeException("Projet not found"));
        projet.setImageData(file.getBytes());
        projetRepository.save(projet);
    }

    public Optional<Projet> getProjetById(Long id) {
        return projetRepository.findById(id);
    }

    public List<Projet> getAllProjets() {
        return projetRepository.findAll();
    }

    public Projet updateProjet(Long id, Projet updatedProjet) {
        updatedProjet.setId(id);
        return projetRepository.save(updatedProjet);
    }

    public void deleteProjet(Long id) {
        projetRepository.deleteById(id);
    }
}
