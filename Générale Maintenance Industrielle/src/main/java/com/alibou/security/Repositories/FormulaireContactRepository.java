package com.alibou.security.Repositories;

import com.alibou.security.Entities.Chaudiere;
import com.alibou.security.Entities.FormulaireContact;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface FormulaireContactRepository extends JpaRepository<FormulaireContact, Long> {

}