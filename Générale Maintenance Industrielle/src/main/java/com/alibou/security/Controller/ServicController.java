package com.alibou.security.Controller;

import com.alibou.security.Entities.Servic;
import com.alibou.security.Service.ServicService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/services")
@RequiredArgsConstructor
public class ServicController {

    private final ServicService serviceService;

    @PostMapping("/add")
    public ResponseEntity<?> createService(@RequestBody Servic service) {
        serviceService.createService(service);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getService(@PathVariable Long id) {
        return ResponseEntity.ok(serviceService.getServiceById(id));
    }

    @GetMapping("/all")
    public ResponseEntity<List<Servic>> getAllServices() {
        List<Servic> services = serviceService.getAllServices();
        return ResponseEntity.ok(services);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateService(@PathVariable Long id, @RequestBody Servic service) {
        serviceService.updateService(id, service);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteService(@PathVariable Long id) {
        serviceService.deleteService(id);
        return ResponseEntity.ok().build();
    }
}
