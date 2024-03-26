package com.von.api.product;


import jakarta.persistence.*;
import lombok.*;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@ToString(exclude = {"id"})

@Entity(name = "products")
public class Product {

    @Id
    @Column(name = "id",nullable = false)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;


    private String prodName;
    private String prodPrice;
    private String company;

    @Builder(builderMethodName = "builder")
    public Product(Long id, String prodName, String prodPrice, String company) {
        this.id = id;
        this.prodName = prodName;
        this.prodPrice = prodPrice;
        this.company = company;
    }
}
