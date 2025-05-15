package com.bridge.example.guitarproject2.Repository;

import com.bridge.example.guitarproject2.Entity.InterestsEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InterestsRepository extends JpaRepository<InterestsEntity, Long> {
    InterestsEntity findByInterestType(String interestType);
}
