package cli

import (
	"fmt"
	"os"
	"strconv"
	"time"

	"books/internal/service"
)

// BookCLI lida com a interface de linha de comando para buscar livros.
type BookCLI struct {
	service *service.BookService
}

// NewBookCLI cria uma nova instância de BookCLI.
func NewBookCLI(service *service.BookService) *BookCLI {
	return &BookCLI{service: service}
}

// Run executa o CLI.
func (cli *BookCLI) Run() {
	// Verifica se o nome do livro foi fornecido.
	if len(os.Args) < 3 {
		fmt.Println("Uso: books search <nome_do_livro>")
		return
	}

	// Pega o nome do livro (terceiro argumento).
	bookName := os.Args[2]

	// Chama o serviço para buscar livros pelo nome.
	cli.searchBooks(bookName)
}

// searchBooks busca e exibe livros com base no nome fornecido.
func (cli *BookCLI) searchBooks(name string) {
	books, err := cli.service.SearchBooksByName(name)
	if err != nil {
		fmt.Println("Erro ao buscar livros:", err)
		return
	}

	// Verifica se algum livro foi encontrado.
	if len(books) == 0 {
		fmt.Println("Nenhum livro encontrado com o nome:", name)
		return
	}

	// Exibe os livros encontrados.
	fmt.Printf("Encontrado(s) %d livro(s):\n", len(books))
	for _, book := range books {
		fmt.Printf("ID: %d, Título: %s, Autor: %s, Gênero: %s\n",
			book.ID, book.Title, book.Author, book.Genre)
	}
}

// simulateReading simula a leitura de livros com base nos IDs fornecidos.
func (cli *BookCLI) simulateReading(bookIDsStr []string) {
	var bookIDs []int
	for _, idStr := range bookIDsStr {
		id, err := strconv.Atoi(idStr)
		if err != nil {
			fmt.Println("ID de livro inválido:", idStr)
			continue
		}
		bookIDs = append(bookIDs, id)
	}

	// Chama o serviço para simular a leitura de múltiplos livros
	responses := cli.service.SimulateMultipleReadings(bookIDs, 2*time.Second)

	// Exibe os resultados
	for _, response := range responses {
		fmt.Println(response)
	}
}