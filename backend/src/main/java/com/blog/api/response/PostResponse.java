package com.blog.api.response;

import lombok.Builder;

import java.time.LocalDateTime;

@Builder
public record PostResponse(
        String id,
        LocalDateTime date,
        String author,
        String title,
        String text) {
}
