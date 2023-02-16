package com.blog.api.controller;

import com.blog.api.request.PostRequest;
import com.blog.api.response.PageResponse;
import com.blog.api.response.PostResponse;
import com.blog.domain.service.PostService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Mono;

import javax.validation.Valid;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;

import static org.springframework.http.HttpStatus.*;
import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@RestController
@CrossOrigin
@RequestMapping("/api/post")
@RequiredArgsConstructor
public class PostController {
    private final PostService postService;

    @GetMapping(produces = APPLICATION_JSON_VALUE)
    @ResponseStatus(OK)
    public Mono<PageResponse> findPage(
            @RequestParam(value = "page", required = false, defaultValue = "1") @Min(1) long page,
            @RequestParam(value = "limit", required = false, defaultValue = "5") @Min(1) @Max(50) long limit) {
        return postService.findPage(page, limit);
    }

    @GetMapping(path = "{id}", produces = APPLICATION_JSON_VALUE)
    @ResponseStatus(OK)
    public Mono<PostResponse> findById(@PathVariable @NotBlank String id) {
        return postService.findById(id);
    }

    @PostMapping(consumes = APPLICATION_JSON_VALUE, produces = APPLICATION_JSON_VALUE)
    @ResponseStatus(CREATED)
    public Mono<PostResponse> create(@RequestBody @Valid PostRequest postRequest) {
        return postService.create(postRequest);
    }

    @PutMapping(path = "{id}", consumes = APPLICATION_JSON_VALUE, produces = APPLICATION_JSON_VALUE)
    @ResponseStatus(OK)
    public Mono<PostResponse> update(@PathVariable @NotBlank String id, @RequestBody @Valid PostRequest postRequest) {
        return postService.update(id, postRequest);
    }

    @DeleteMapping(path = "{id}")
    @ResponseStatus(NO_CONTENT)
    public Mono<Void> delete(@PathVariable @NotBlank String id) {
        return postService.delete(id);
    }
}
