package com.alibou.security.Controller;

import com.alibou.security.Entities.Chaudiere;
import com.alibou.security.Service.ChaudiereService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/chaudieres")
@RequiredArgsConstructor
public class ChaudiereController {

    private final ChaudiereService chaudiereService;


    @PostMapping("/addchaudiere")
    public ResponseEntity<?> createChaudiere(@RequestBody Chaudiere chaudiere) {
       chaudiereService.createChaudiere(chaudiere);
        return ResponseEntity.ok().build();
    }



    @GetMapping("/chaudiere/{id}")
    public ResponseEntity<?> getChaudiere(@PathVariable Long id) {
        return ResponseEntity.ok(chaudiereService.getChaudiereById(id));
    }

    @GetMapping("/allchaudieres")
    public ResponseEntity<List<Chaudiere>> getAllChaudieres() {
        List<Chaudiere> chaudieres = chaudiereService.getAllChaudieres();
        return ResponseEntity.ok(chaudieres);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateChaudiere(@PathVariable Long id, @RequestBody Chaudiere request) {
        chaudiereService.updateChaudiere(id, request);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteChaudiere(@PathVariable Long id) {
        chaudiereService.deleteChaudiere(id);
        return ResponseEntity.ok().build();
    }
}
