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
    private String title;
    private String content;
    @Column(name = "register_date")
    private String registerDate;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User writer;

    @Builder(builderMethodName = "builder")
    public Article(Long id, String title, String content, User writer, String registerDate) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.writer = writer;
        this.registerDate = registerDate;
    }
}
