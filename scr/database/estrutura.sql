CREATE TABLE usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    senha TEXT NOT NULL,
    perfil TEXT NOT NULL CHECK (perfil IN ('aluno', 'professor', 'admin')),
    curso_turma TEXT
);

CREATE TABLE disciplinas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    codigo TEXT UNIQUE,
    semestre TEXT
);

CREATE TABLE vinculos_professor (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    id_professor INTEGER NOT NULL,
    id_disciplina INTEGER NOT NULL,
    FOREIGN KEY (id_professor) REFERENCES usuarios(id),
    FOREIGN KEY (id_disciplina) REFERENCES disciplinas(id)
);

CREATE TABLE notas_pareceres (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    id_aluno INTEGER NOT NULL,
    id_disciplina INTEGER NOT NULL,
    id_professor INTEGER NOT NULL,
    nota NUMERIC(4,2),
    parecer TEXT,
    data_registro DATE DEFAULT CURRENT_DATE,
    FOREIGN KEY (id_aluno) REFERENCES usuarios(id),
    FOREIGN KEY (id_disciplina) REFERENCES disciplinas(id),
    FOREIGN KEY (id_professor) REFERENCES usuarios(id)
);
