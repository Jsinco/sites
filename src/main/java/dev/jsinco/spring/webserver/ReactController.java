package dev.jsinco.spring.webserver;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ReactController {

    @RequestMapping("/canvord")
    public String forwardToCanvord() {
        return "forward:canvord/index.html";
    }

}
