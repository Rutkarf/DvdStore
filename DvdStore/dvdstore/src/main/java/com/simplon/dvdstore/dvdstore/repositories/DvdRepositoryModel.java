package com.simplon.dvdstore.dvdstore.repositories;

import jakarta.persistence.*;
import lombok.Data;


@Entity
@Table(name = "dvds")
public class DvdRepositoryModel {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(name = "name")
    private String name;
    
    @Column(name = "genre")
    private String genre;

    public DvdRepositoryModel(String name, String genre) {
        this.name = name;
        this.genre = genre;
    }
}
