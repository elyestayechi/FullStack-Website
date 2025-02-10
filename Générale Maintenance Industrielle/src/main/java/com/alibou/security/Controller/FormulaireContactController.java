package com.alibou.security.Controller;

import com.alibou.security.Entities.FormulaireContact;
import com.alibou.security.Service.FormulaireContactService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/formulaires")
@RequiredArgsConstructor
public class FormulaireContactController {

    private final FormulaireContactService formulaireContactService;

    @PostMapping("/add")
    public ResponseEntity<?> createFormulaireContact(@RequestBody FormulaireContact formulaireContact) {
        formulaireContactService.createFormulaireContact(formulaireContact);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getFormulaireContact(@PathVariable Long id) {
        return ResponseEntity.ok(formulaireContactService.getFormulaireContactById(id));
    }

    @GetMapping("/all")
    public ResponseEntity<List<FormulaireContact>> getAllFormulaireContacts() {
        List<FormulaireContact> formulaireContacts = formulaireContactService.getAllFormulaireContacts();
        return ResponseEntity.ok(formulaireContacts);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteFormulaireContact(@PathVariable Long id) {
        formulaireContactService.deleteFormulaireContact(id);
        return ResponseEntity.ok().build();
    }
}
