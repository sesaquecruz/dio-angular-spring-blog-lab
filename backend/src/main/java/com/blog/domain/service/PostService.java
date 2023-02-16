package com.blog.domain.service;

import com.blog.api.request.PostRequest;
import com.blog.api.response.PageResponse;
import com.blog.api.response.PostResponse;
import com.blog.domain.document.PostDocument;
import com.blog.domain.mapper.PostMapper;
import com.blog.domain.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;

@Service
@RequiredArgsConstructor
public class PostService {
    private final PostRepository postRepository;
    private final PostMapper postMapper;

    public Mono<PageResponse> findPage(long page, long limit) {
        return postRepository.count()
                .zipWith(postRepository.findAllByOrderByDateDesc()
                        .skip((page - 1) * limit)
                        .take(limit)
                        .map(postMapper::documentToResponse)
                        .collectList())
                .map(zip -> PageResponse.builder()
                        .itens(zip.getT2())
                        .page(page)
                        .limit(limit)
                        .total(zip.getT1())
                        .build());
    }

    public Mono<PostResponse> findById(String postId) {
        return postRepository.findById(postId)
                .map(postMapper::documentToResponse);
    }

    public Mono<PostResponse> create(PostRequest postRequest) {
        return Mono.just(postRequest)
                .map(postMapper::requestToDocument)
                .flatMap(postRepository::save)
                .map(postMapper::documentToResponse);
    }

    public Mono<PostResponse> update(String postId, PostRequest postRequest) {
        return postRepository.findById(postId)
                .map(post -> PostDocument.builder()
                        .id(post.id())
                        .date(post.date())
                        .author(postRequest.author())
                        .title(postRequest.title())
                        .text(postRequest.text())
                        .build())
                .flatMap(postRepository::save)
                .map(postMapper::documentToResponse);
    }

    public Mono<Void> delete(String postId) {
        return postRepository.findById(postId)
                .flatMap(postRepository::delete);
    }
}
