package com.alibou.security.Controller;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import com.alibou.security.Service.UserService;
import com.alibou.security.Models.RegisterRequest;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/admin")
@RequiredArgsConstructor
public class AdminController {

    private final UserService userService;

    @GetMapping("/users/{id}")
    @PreAuthorize("hasAuthority('admin:read')")
    public ResponseEntity<?> getUser(@PathVariable int id) {
        return ResponseEntity.ok(userService.getUserById(id));
    }

    @GetMapping("/users")
    @PreAuthorize("hasAuthority('admin:read')")
    public ResponseEntity<?> getAllUsers() {
        return ResponseEntity.ok(userService.getAllUsers());
    }

    @PostMapping("/addusers")
    @PreAuthorize("hasAuthority('admin:create')")
    public ResponseEntity<?> createUser(@RequestBody RegisterRequest request) {
        userService.createUser(request);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/updateusers/{id}")
    @PreAuthorize("hasAuthority('admin:update')")
    public ResponseEntity<?> updateUser(@PathVariable int id, @RequestBody RegisterRequest request) {
        userService.updateUser(id, request);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/deleteusers/{id}")
    @PreAuthorize("hasAuthority('admin:delete')")
    public ResponseEntity<?> deleteUser(@PathVariable int id) {
        userService.deleteUser(id);
        return ResponseEntity.ok().build();
    }
}
