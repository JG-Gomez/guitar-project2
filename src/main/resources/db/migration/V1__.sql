CREATE TABLE guitarprojectdata
(
    id     BIGINT GENERATED BY DEFAULT AS IDENTITY NOT NULL,
    name   VARCHAR(255),
    age    INTEGER                                 NOT NULL,
    option VARCHAR(255),
    CONSTRAINT pk_guitarprojectdata PRIMARY KEY (id)
);