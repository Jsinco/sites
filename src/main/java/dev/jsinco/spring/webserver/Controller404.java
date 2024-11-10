package dev.jsinco.spring.webserver;

import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
@Primary
public class Controller404 implements ErrorController {


    @RequestMapping("/error")
    public String handleError(HttpServletRequest request) {
        // todo
        Object status = request.getAttribute(RequestDispatcher.ERROR_STATUS_CODE);
        if (status != null) {
            int statusCode = Integer.valueOf(status.toString());
            if (statusCode == HttpServletResponse.SC_NOT_FOUND) {
                return "forward:404.html";
            }
        }
        return "forward:404.html";
    }

}
