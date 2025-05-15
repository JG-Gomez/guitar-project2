package com.bridge.example.guitarproject2.Entity;

import jakarta.persistence.*;

@Entity
public class InterestsEntity {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long id;

    private String interestType;

    public InterestsEntity() {}

    public InterestsEntity(String interestType) {
        this.interestType = interestType;
    }
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getInterestType() {
        return interestType;
    }

    public void setInterestType(String interestType) {
        this.interestType = interestType;
    }
}
