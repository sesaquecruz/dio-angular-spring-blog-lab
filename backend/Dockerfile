FROM eclipse-temurin:17-jre-alpine

WORKDIR /opt/app

COPY build/libs/blog-*.jar /opt/app/blog.jar

ENTRYPOINT ["java", "-jar", "/opt/app/blog.jar"]

EXPOSE 8080