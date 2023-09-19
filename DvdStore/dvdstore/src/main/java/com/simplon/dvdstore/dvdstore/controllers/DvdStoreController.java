package com.simplon.dvdstore.dvdstore.controllers;

import com.simplon.dvdstore.dvdstore.services.DvdServiceModel;
import com.simplon.dvdstore.dvdstore.services.DvdStoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("dvds")
public class DvdStoreController {
    @Autowired
    private DvdStoreService dvdStoreService;
    @PostMapping
    public boolean addDvdToStore(@RequestBody DvdStoreDTO dvdStoreDTO){
        DvdServiceModel dvdServiceModel = new DvdServiceModel(dvdStoreDTO.getName(), dvdStoreDTO.getGenre());
        dvdStoreService.add(dvdServiceModel);
        return false;
    }

}
