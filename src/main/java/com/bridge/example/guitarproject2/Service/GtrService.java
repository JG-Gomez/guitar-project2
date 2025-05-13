package com.bridge.example.guitarproject2.Service;

import com.bridge.example.guitarproject2.Entity.GtrEntity;
import com.bridge.example.guitarproject2.Repository.GtrRepository;
import org.springframework.stereotype.Service;

@Service
public class GtrService {

    private final GtrRepository gtrRepository;

    public GtrService(GtrRepository gtrRepository) {
        this.gtrRepository = gtrRepository;
    }

    public GtrEntity createUser (GtrEntity user) {
        return gtrRepository.save(user);
    }
}
