package com.alibou.security.Repositories;

import com.alibou.security.Entities.Chaudiere;
import com.alibou.security.Entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ChaudiereRepository extends JpaRepository<Chaudiere, Long> {

}