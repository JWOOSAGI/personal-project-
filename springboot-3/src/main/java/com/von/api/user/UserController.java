package com.von.api.user;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.sql.SQLException;
import java.util.*;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequiredArgsConstructor
public class UserController {
    @PostMapping("/login")
    public Map<String, ?> Login(@RequestBody Map<?, ?> paramMap) {
        Map<String, String> map = new HashMap<>();
        String userName = (String) paramMap.get("userName");
        String PW = (String) paramMap.get("PW");
        System.out.println("아이디 : " + userName);
        System.out.println("비밀번호 : " + PW);
        map.put("userName", userName);
        map.put("PW", PW);
        return map;
    }

    public Map<String, ?> findAll() {
        Map<String, String> map = new HashMap<>();

        return map;
    }

    public Map<String, ?> login(@RequestBody Map<?, ?> paramMap) {
        Map<String, String> map = new HashMap<>();

        return map;
    }

    public Map<String, ?> findById(@RequestBody Map<?, ?> paramMap) {
        Map<String, String> map = new HashMap<>();

        return map;
    }

    public Map<String, ?> updatePassword(@RequestBody Map<?, ?> paramMap) {
        Map<String, String> map = new HashMap<>();

        return map;
    }

    public Map<String, ?> delete(@RequestBody Map<?, ?> paramMap) {
        Map<String, String> map = new HashMap<>();

        return map;
    }

    public Map<String, ?> existsById(@RequestBody Map<?, ?> paramMap) {
        Map<String, String> map = new HashMap<>();

        return map;
    }

    public Map<String, ?> findUsersByName(@RequestBody Map<?, ?> paramMap) {
        Map<String, String> map = new HashMap<>();

        return map;
    }

    public Map<String, ?> findUsersByNameFromMap(@RequestBody Map<?, ?> paramMap) {
        Map<String, String> map = new HashMap<>();

        return map;
    }

    public Map<String, ?> findUsersByJob(@RequestBody Map<?, ?> paramMap) {
        Map<String, String> map = new HashMap<>();

        return map;
    }

    public Map<String, ?> findUsersByJobFromMap(@RequestBody Map<?, ?> paramMap) {
        Map<String, String> map = new HashMap<>();

        return map;
    }

    public Map<String, ?> count() {
        Map<String, String> map = new HashMap<>();

        return map;
    }
    public Map<String, ?> getOne(@RequestBody Map<?, ?> paramMap) {
        Map<String, String> map = new HashMap<>();

        return map;
    }
    public Map<String, ?> getUserMap(){
        Map<String, String> map = new HashMap<>();

        return map;
    }

    public Map<String, ?> test() {
        Map<String, String> map = new HashMap<>();

        return map;
    }

    public Map<String, ?> findUsers() throws SQLException {
        Map<String, String> map = new HashMap<>();

        return map;
    }
    public Map<String, ?> mktable() throws SQLException{
            Map<String, String> map = new HashMap<>();

            return map;
    }

    public Map<String, ?> rmtable() throws SQLException{
            Map<String, String> map = new HashMap<>();

            return map;
    }
}
