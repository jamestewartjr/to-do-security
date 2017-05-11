DROP TABLE IF EXISTS tasks;

CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  created TIMESTAMPTZ default now()
);

INSERT INTO tasks (title)
VALUES ('Your first task!');
