// ChaudiereService.java
package com.alibou.security.Service;

import com.alibou.security.Entities.Chaudiere;
import com.alibou.security.Entities.User;
import com.alibou.security.Repositories.ChaudiereRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ChaudiereService {

    private final ChaudiereRepository chaudiereRepository;

    public Chaudiere createChaudiere(Chaudiere chaudiere) {

        return chaudiereRepository.save(chaudiere);
    }

    public Optional<Chaudiere> getChaudiereById(Long chaudiereId) {
        return chaudiereRepository.findById(chaudiereId);
    }

    public List<Chaudiere> getAllChaudieres() {
        return chaudiereRepository.findAll();
    }

    public Chaudiere updateChaudiere(Long chaudiereId, Chaudiere updatedChaudiere) {
        Optional<Chaudiere> optionalChaudiere = chaudiereRepository.findById(chaudiereId);
        if (optionalChaudiere.isPresent()) {
            updatedChaudiere.setId(chaudiereId);
            return chaudiereRepository.save(updatedChaudiere);
        } else {
            // Handle chaudiere not found exception
            return null;
        }
    }

    public void deleteChaudiere(Long chaudiereId) {
        chaudiereRepository.deleteById(chaudiereId);
    }
}
