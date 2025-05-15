package com.bridge.example.guitarproject2.Entity;


import jakarta.persistence.*;

@Entity
@Table(name = "guitarprojectdata")
public class GtrEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private int age;

    private String option;

    @ManyToOne
    @JoinColumn(name = "interests_id")
    private InterestsEntity interestsEntity;

    public GtrEntity() {
    }

    public GtrEntity(String name, int age, String option, InterestsEntity interestsEntity) {
        this.name = name;
        this.age = age;
        this.option = option;
        this.interestsEntity = interestsEntity;
    }

    public InterestsEntity getInterestType() {
        return interestsEntity;
    }

    public void setInterestType(InterestsEntity interestsEntity) {
        this.interestsEntity = interestsEntity;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getOption() {
        return option;
    }

    public void setOption(String option) {
        this.option = option;
    }
}
