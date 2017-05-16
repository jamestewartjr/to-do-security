DROP TABLE IF EXISTS tasks;

CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  created TIMESTAMPTZ default now()
);

INSERT INTO tasks (title)
VALUES ('Your first task!');

INSERT INTO tasks (title)
VALUES ('Your second task!');

INSERT INTO tasks (title)
VALUES ('Your third task!');

INSERT INTO tasks (title)
VALUES ('Last!');

INSERT INTO tasks (title)
VALUES ('No I am the last one...');
