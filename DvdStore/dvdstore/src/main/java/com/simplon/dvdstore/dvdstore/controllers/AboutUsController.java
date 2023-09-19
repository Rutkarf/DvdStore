package com.simplon.dvdstore.dvdstore.controllers;
        import org.springframework.stereotype.Controller;
        import org.springframework.web.bind.annotation.RequestMapping;
        import org.springframework.ui.Model;


@Controller
public class AboutUsController {

    @RequestMapping("/about-us")
    public String displayFullDetails(Model model) {
        // Vous pouvez ajouter des données à transmettre à la vue ici si nécessaire
        return "about-us"; // Renvoie le nom de la vue Thymeleaf (sans l'extension .html)
    }
}
