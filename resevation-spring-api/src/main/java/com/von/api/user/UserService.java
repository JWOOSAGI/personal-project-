package com.von.api.user;

import com.von.api.enums.Messenger;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;
import java.util.Optional;

public interface UserService {
    String addUsers();

    Messenger save(User user);

    List<User> findAll();

    Optional<User> findById(Long id);

    String count();

    Optional<User> getOne(String id);

    String delete(User user);

    String deleteAll();

    Boolean existById(Long id);

    String login(User user);

    String changePassword(User user);

    List<?> findUsersByName(String name);
    Map<String, ?> findUsersByNameFromMap(String name);

    List<?> findUsersByJob(String job);

    Map<String, ?> findUsersByJobFromMap(String job);

    Map<String, ?> getUserMap();

    String test();


    User findUser(String userName);

    List<User> findUsers() throws SQLException;

    Messenger createTable() throws SQLException;

    Messenger deleteTable() throws SQLException;
}
