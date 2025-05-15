package com.bridge.example.guitarproject2.Controller;

import com.bridge.example.guitarproject2.Entity.GtrEntity;
import com.bridge.example.guitarproject2.Entity.InterestsEntity;
import com.bridge.example.guitarproject2.Service.GtrService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})


@RestController
@RequestMapping("/api/users")
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

    @GetMapping("/interests")
    public List<InterestsEntity> getInterests() {
        return gtrService.getAllInterests();
    }

    @PutMapping("/{id}")
    public ResponseEntity<GtrEntity> updateUser(@PathVariable Long id, @RequestBody GtrEntity updatedUser) {
        Optional<GtrEntity> existingUser = gtrService.getUserById(id);
        if (existingUser.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        GtrEntity updated = gtrService.updateUser(id, updatedUser);
        return ResponseEntity.ok(updated);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        gtrService.deleteUser(id);
        return ResponseEntity.noContent().build();
    }

}