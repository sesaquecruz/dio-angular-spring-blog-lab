package com.blog.domain.document;

import lombok.Builder;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Document(collection = "posts")
@Builder
public record PostDocument(
        @Id
        String id,
        @CreatedDate
        LocalDateTime date,
        String author,
        String title,
        String text) {
}
