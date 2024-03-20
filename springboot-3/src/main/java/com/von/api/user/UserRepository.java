package com.von.api.user;

import com.von.api.enums.Messenger;
import org.springframework.stereotype.Repository;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Repository
public class UserRepository {
    private PreparedStatement pstmt;
    private ResultSet rs;
    private Connection conn;
    private UserRepository() throws SQLException {
        conn = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/bitcampdb",
                "root",
                "rootroot");
        pstmt  = null;
        rs = null;
    }

    public List<?> findUsers() throws SQLException {
        String sql = "select * from board";
        System.out.println("sql : "+ sql);
        pstmt = conn.prepareStatement(sql);
        rs = pstmt.executeQuery();
        List<User>ls = new ArrayList<>();
        if(rs.next()){
            do{
                ls.add(User.builder()
                        .id(rs.getLong("id"))
                        .username(rs.getString("username"))
                        .password(rs.getString("password"))
                        .name(rs.getString("name"))
                        .phone(rs.getString("phone"))
                        .job(rs.getString("job"))
                        .build());
            }while(rs.next());

        }else{
            System.out.println("데이터가 없습니다.");
        }

        return ls;
    }

    public Messenger createUsers() throws SQLException {
        String sql ="CREATE TABLE IF NOT EXISTS members (\n" +
                "        \"                       id INT AUTO_INCREMENT PRIMARY KEY,\n" +
                "        \"                       member_name VARCHAR(20) NOT NULL,\n" +
                "        \"                       password VARCHAR(20) NOT NULL,\n" +
                "        \"                       name VARCHAR(20),\n" +
                "        \"                       phone_number VARCHAR(20),\n" +
                "        \"                       job VARCHAR(20),\n" +
                "        \"                       height VARCHAR(20),\n" +
                "        \"                       weight VARCHAR(20)\n" +
                "        \"";
        pstmt = conn.prepareStatement(sql);
        return (pstmt.executeUpdate() >= 0) ? Messenger.SUCCESS: Messenger.FAIL;
    }
}
