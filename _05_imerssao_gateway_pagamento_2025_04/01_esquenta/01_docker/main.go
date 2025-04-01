package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	_ "github.com/lib/pq"
)

type Produto struct {
	ID        int     `json:"id"`
	Nome      string  `json:"nome"`
	Descricao string  `json:"descricao"`
	Preco     float64 `json:"preco"`
}

func main() {
	connStr := "host=postgres port=5432 user=postgres password=postgres dbname=imersao sslmode=disable"
	db, err := sql.Open("postgres", connStr)

	if err != nil {
		log.Fatal(err)
	}

	defer db.Close()

	http.HandleFunc("/produtos", func(w http.ResponseWriter, r *http.Request) {
		if r.Method != http.MethodGet {
			w.WriteHeader(http.StatusMethodNotAllowed)
			return
		}

		produtos, err := listarProdutos(db)

		if err != nil {
			w.WriteHeader(http.StatusInternalServerError)
			fmt.Fprintf(w, "Erro ao listar produtos: %v", err)
			return
		}

		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(produtos)
	})

	fmt.Println("Servidor executando em http://localhost:8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}

func listarProdutos(db *sql.DB) ([]Produto, error) {
	rows, err := db.Query("SELECT id, nome, descricao, preco FROM produtos")

	if err != nil {
		return nil, err
	}

	defer rows.Close()

	var produtos []Produto

	for rows.Next() {
		var p Produto
		err := rows.Scan(&p.ID, &p.Nome, &p.Descricao, &p.Preco)

		if err != nil {
			return nil, err
		}

		produtos = append(produtos, p)
	}

	return produtos, nil
}
