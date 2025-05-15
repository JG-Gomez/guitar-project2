package com.bridge.example.guitarproject2.Service;

import com.bridge.example.guitarproject2.Entity.GtrEntity;
import com.bridge.example.guitarproject2.Entity.InterestsEntity;
import com.bridge.example.guitarproject2.Repository.GtrRepository;
import com.bridge.example.guitarproject2.Repository.InterestsRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GtrService {

    private final GtrRepository gtrRepository;
    private final InterestsRepository interestsRepository;

    public GtrService(GtrRepository gtrRepository, InterestsRepository interestsRepository) {
        this.gtrRepository = gtrRepository;
        this.interestsRepository = interestsRepository;
    }

    public GtrEntity createUser (GtrEntity user) {
        if (user.getInterestType() != null) {
            String type = user.getInterestType().getInterestType();
            InterestsEntity existing = interestsRepository.findByInterestType(type);
            user.setInterestType(existing);
        }

        return gtrRepository.save(user);
    }
    public List<InterestsEntity> getAllInterests() {
        return interestsRepository.findAll();

    }
}
