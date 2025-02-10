package com.alibou.security.Repositories;


import com.alibou.security.Entities.FormulaireContact;
import com.alibou.security.Entities.Projet;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ProjetRepository extends JpaRepository<Projet, Long> {

}