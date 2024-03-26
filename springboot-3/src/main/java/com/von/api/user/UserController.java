package com.von.api.user;

import com.von.api.enums.Messenger;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequiredArgsConstructor
public class UserController {
    private final UserRepository repository;

    @GetMapping("/join")
    public String hello(){
        return "welcom";
    }

    @PostMapping(path="/api/login")
    public Map<String,?> name(@RequestBody Map<?,?> paramMap){
        Map<String,Messenger> map = new HashMap<>();
        String userName = (String) paramMap.get("userName");
        String password = (String) paramMap.get("PW");
        User dbuser = repository.findByUsername(userName).orElse(null);//Entity, Optinal, List 3가지 타입만 가능
        if (dbuser == null){
            map.put("message",Messenger.FAIL);
        } else if(!dbuser.getPassword().equals(password)){
            map.put("message",Messenger.WRONG_PASSWORD);
        } else {
            map.put("message",Messenger.SUCCESS);
        }
        return map;
    }
    @PostMapping(path="/api/users")
    public Map<String,?> username (@RequestBody Map<String,?> paramMap){
        String strHeight = String.valueOf(paramMap.get("height"));
        String strWeight = String.valueOf(paramMap.get("weight"));

        User newUser = repository.save(User.builder()
                .username((String) paramMap.get("username"))
                .password((String) paramMap.get("psw"))
                .passwordConfirm((String) paramMap.get("pswrepeat"))
                .phone((String) paramMap.get("phone"))
                .job((String) paramMap.get("job"))
                .height(Double.parseDouble(strHeight))
                .weight(Double.parseDouble(strWeight))
                .build());

        System.out.println("DB에 저장된 User 정보 : "+newUser);
        Map<String, Messenger> map = new HashMap<>();
        map.put("result", Messenger.SUCCESS);
        return map;
    }


    public Map<String,?> save(@RequestBody Map<String,?> map) {
        return null;
    }

    public Map<String,?> login(@RequestBody Map<String,?> map) {
        return null;
    }

    public Map<String,?> changePassword(@RequestBody Map<String,?> map) {
        return null;
    }

    public Map<String,?> delete(@RequestBody Map<String,?> map) {
        return null;
    }

    public Map<String,?> findUsersByName(@RequestBody Map<String,?> map) {
        return null;
    }

    public Map<String,?> findUsersByJob(@RequestBody Map<String,?> map) {
        return null;
    }


    public Map<String,?> count() {
        return null;
    }

    public Map<String,?> findUsers() throws SQLException {
        return null;
    }

    public void createTable() throws SQLException {
    }

    public void deleteTable() throws SQLException {
    }


    public Map<String,?> getOne(@RequestBody Map<String,?> map) {
        return null;
    }

    public Map<String,?> findUser(@RequestBody Map<String,?> map) {
        return null;
    }
}
