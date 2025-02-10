package com.alibou.security.Repositories;

import java.util.Optional;

import com.alibou.security.Entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {

  Optional<User> findByEmailUser(String email);

}
