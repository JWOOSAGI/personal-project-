package com.von.api.article;


import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface ArticleRepository extends JpaRepository<Article, Long>{

}