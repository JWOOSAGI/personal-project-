package com.von.api.common;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("http://localhost:3000")
@RestController
@RequiredArgsConstructor
public class HomeController {

    @GetMapping("/")
    public String hello() {
        return "welcome to Spring boot";
    }

}
