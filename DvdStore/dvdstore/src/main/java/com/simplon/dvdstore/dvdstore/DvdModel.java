package com.simplon.dvdstore.dvdstore;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "dvdmodel") // Spécifie le nom de la table dans la base de données
public class DvdModel {
    @Id
    private Long id; // Une clé primaire est nécessaire

    private String name;
    private String genre;

    // Getters and setters
}
