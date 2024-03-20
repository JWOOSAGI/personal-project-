package com.von.api.user;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository repository;

    Map<String, ?> addUsers() {
        return null;
    }

    Map<String, ?> login(User user) {
        return null;
    };
    Map<String, ?> updatePassword(User user) {
        return null;
    };
    Map<String, ?> findUsersByName(String name) {
        return null;
    };
    Map<String, ?> findUsersByNameFromMap(String name) {
        return null;
    };
    Map<String, ?> findUsersByJob(String job) {
        return null;
    };
    Map<String, ?> findUsersByJobFromMap(String job) {
        return null;
    };
    Map<String, ?> getUserMap() {
        return null;
    };
    Map<String, ?> test() {
        return null;
    };
    Map<String, ?> findUsers() throws SQLException {
        return null;
    };
    Map<String, ?> mktable() throws SQLException {
        return null;
    };
    Map<String, ?> rmtable() throws SQLException {
        return null;
    };
}
