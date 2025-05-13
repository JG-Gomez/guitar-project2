package com.bridge.example.guitarproject2.Controller;

import com.bridge.example.guitarproject2.Entity.GtrEntity;
import com.bridge.example.guitarproject2.Service.GtrService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:8080")
@RestController
public class GtrController {

    private final GtrService gtrService;

    public GtrController(GtrService gtrService) {
        this.gtrService = gtrService;
    }

    @PostMapping
    public ResponseEntity <GtrEntity> createUser(@RequestBody GtrEntity user) {
        GtrEntity newUser = gtrService.createUser(user);
        return new ResponseEntity<>(newUser, HttpStatus.CREATED);
    }
}
