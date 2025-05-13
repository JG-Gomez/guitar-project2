package com.bridge.example.guitarproject2.Repository;

import com.bridge.example.guitarproject2.Entity.GtrEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GtrRepository extends JpaRepository <GtrEntity, Long> {

}
