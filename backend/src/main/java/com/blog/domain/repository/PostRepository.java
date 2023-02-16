package com.blog.domain.repository;

import com.blog.domain.document.PostDocument;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Flux;

@Repository
public interface PostRepository extends ReactiveMongoRepository<PostDocument, String> {
    Flux<PostDocument> findAllByOrderByDateDesc();
}
