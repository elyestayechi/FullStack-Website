package com.alibou.security.Service;

import com.alibou.security.Entities.FormulaireContact;
import com.alibou.security.Repositories.FormulaireContactRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class FormulaireContactService {

    private final FormulaireContactRepository formulaireContactRepository;

    public FormulaireContact createFormulaireContact(FormulaireContact formulaireContact) {
        return formulaireContactRepository.save(formulaireContact);
    }

    public Optional<FormulaireContact> getFormulaireContactById(Long id) {
        return formulaireContactRepository.findById(id);
    }

    public List<FormulaireContact> getAllFormulaireContacts() {
        return formulaireContactRepository.findAll();
    }

    public void deleteFormulaireContact(Long id) {
        formulaireContactRepository.deleteById(id);
    }
}
