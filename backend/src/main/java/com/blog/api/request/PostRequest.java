package com.blog.api.request;

import javax.validation.constraints.NotBlank;

public record PostRequest(
        @NotBlank
        String author,
        @NotBlank
        String title,
        @NotBlank
        String text) {
}
