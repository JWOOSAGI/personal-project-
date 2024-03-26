package com.von.api.user;

import com.von.api.common.AbstractService;
import com.von.api.enums.Messenger;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;
import java.util.Optional;


@Controller
@RequiredArgsConstructor
public class UserServiceImpl extends AbstractService implements UserService{

    @Override
    public Messenger save(Object o) {
        return null;
    }

    @Override
    public List findAll() {
        return null;
    }

    @Override
    public Optional findById(Long id) {
        return Optional.empty();
    }

    @Override
    public String count() {
        return null;
    }

    @Override
    public Optional getOne(String id) {
        return Optional.empty();
    }

    @Override
    public String delete(Object o) {
        return null;
    }

    @Override
    public Boolean existsById(Long id) {
        return null;
    }

    @Override
    public String deleteAll() {
        return null;
    }

    @Override
    public Boolean existById(Long id) {
        return null;
    }

    @Override
    public String addUsers() {
        return null;
    }

    @Override
    public Messenger save(User user) {
        return null;
    }

    @Override
    public String delete(User user) {
        return null;
    }

    @Override
    public String login(User user) {
        return null;
    }

    @Override
    public String changePassword(User user) {
        return null;
    }

    @Override
    public List<?> findUsersByName(String name) {
        return null;
    }

    @Override
    public Map<String, ?> findUsersByNameFromMap(String name) {
        return null;
    }

    @Override
    public List<?> findUsersByJob(String job) {
        return null;
    }

    @Override
    public Map<String, ?> findUsersByJobFromMap(String job) {
        return null;
    }

    @Override
    public Map<String, ?> getUserMap() {
        return null;
    }

    @Override
    public String test() {
        return null;
    }

    @Override
    public User findUser(String userName) {
        return null;
    }

    @Override
    public List<User> findUsers() throws SQLException {
        return null;
    }

    @Override
    public Messenger createTable() throws SQLException {
        return null;
    }

    @Override
    public Messenger deleteTable() throws SQLException {
        return null;
    }
}
