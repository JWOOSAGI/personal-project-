package com.von.api.article;

import com.von.api.user.User;
import jakarta.persistence.*;
import lombok.*;

@NoArgsConstructor
@Getter
@ToString(exclude = {"id"})
@Entity(name = "articles")
public class Article {
    @Id
    @Column(name="id", nullable = false)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id; // primary key
    @Column
    private String title;
    @Column
    private String content;
    @Column
    private String registerDate;
    @Column
    private String writer;

    @Builder(builderMethodName = "builder")
    public Article(Long id, String title, String content, String writer, String registerDate) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.writer = writer;
        this.registerDate = registerDate;
    }
}
