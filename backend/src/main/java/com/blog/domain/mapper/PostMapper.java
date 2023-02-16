package com.blog.domain.mapper;

import com.blog.api.response.PostResponse;
import com.blog.domain.document.PostDocument;
import com.blog.api.request.PostRequest;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface PostMapper {
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "date", ignore = true)
    PostDocument requestToDocument(PostRequest postRequest);
    PostResponse documentToResponse(PostDocument postDocument);
}
