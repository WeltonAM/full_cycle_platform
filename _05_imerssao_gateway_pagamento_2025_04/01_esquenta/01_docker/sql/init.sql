CREATE TABLE IF NOT EXISTS produtos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    preco DECIMAL(10, 2) NOT NULL
);

INSERT INTO
    produtos (nome, descricao, preco)
VALUES
    (
        'Caixa de Aço',
        'Caixa de Aço com 100 unidades',
        100.00
    );

INSERT INTO
    produtos (nome, descricao, preco)
VALUES
    (
        'Caixa de Bandeja',
        'Caixa de Bandeja com 100 unidades',
        100.00
    );

INSERT INTO
    produtos (nome, descricao, preco)
VALUES
    (
        'Caixa de Papel',
        'Caixa de Papel com 100 unidades',
        100.00
    );

INSERT INTO
    produtos (nome, descricao, preco)
VALUES
    (
        'Caixa de Vidro',
        'Caixa de Vidro com 100 unidades',
        100.00
    );

INSERT INTO
    produtos (nome, descricao, preco)
VALUES
    ('Caneta', 'Caneta com 100 unidades', 100.00);