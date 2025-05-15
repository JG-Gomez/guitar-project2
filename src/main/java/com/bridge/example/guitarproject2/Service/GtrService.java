package com.bridge.example.guitarproject2.Service;

import com.bridge.example.guitarproject2.Entity.GtrEntity;
import com.bridge.example.guitarproject2.Entity.InterestsEntity;
import com.bridge.example.guitarproject2.Repository.GtrRepository;
import com.bridge.example.guitarproject2.Repository.InterestsRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class GtrService {

    private final GtrRepository gtrRepository;
    private final InterestsRepository interestsRepository;

    public GtrService(GtrRepository gtrRepository, InterestsRepository interestsRepository) {
        this.gtrRepository = gtrRepository;
        this.interestsRepository = interestsRepository;
    }

    public GtrEntity createUser (GtrEntity user) {
        if (user.getInterestEntity() != null) {
            String type = user.getInterestEntity().getInterestType();
            InterestsEntity existing = interestsRepository.findByInterestType(type);
            user.setInterestEntity(existing);
        }

        return gtrRepository.save(user);
    }
    public List<InterestsEntity> getAllInterests() {
        return interestsRepository.findAll();

    }

    public Optional<GtrEntity> getUserById(Long id) {
        return gtrRepository.findById(id);
    }

    public GtrEntity updateUser(Long id, GtrEntity updatedUser) {
        GtrEntity existing = gtrRepository.findById(id).orElseThrow();

        existing.setName(updatedUser.getName());
        existing.setAge(updatedUser.getAge());
        existing.setOption(updatedUser.getOption());

        if (updatedUser.getInterestEntity() != null) {
            String type = updatedUser.getInterestEntity().getInterestType();
            InterestsEntity existingInterest = interestsRepository.findByInterestType(type);
            existing.setInterestEntity(existingInterest);
        }

        return gtrRepository.save(existing);
    }

    public void deleteUser(Long id) {
        gtrRepository.deleteById(id);
    }

}
