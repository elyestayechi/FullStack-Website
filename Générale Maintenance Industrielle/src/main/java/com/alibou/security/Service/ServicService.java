package com.alibou.security.Service;

import com.alibou.security.Entities.Servic;
import com.alibou.security.Repositories.ServiceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ServicService {

    private final ServiceRepository serviceRepository;

    public Servic createService(Servic servic) {
        return serviceRepository.save(servic);
    }

    public Optional<Servic> getServiceById(Long id) {
        return serviceRepository.findById(id);
    }

    public List<Servic> getAllServices() {
        return serviceRepository.findAll();
    }

    public Servic updateService(Long id, Servic updatedServic) {
        updatedServic.setId(id);
        return serviceRepository.save(updatedServic);
    }

    public void deleteService(Long id) {
        serviceRepository.deleteById(id);
    }
}
