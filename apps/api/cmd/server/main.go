package main

import (
	"log"
	"net/http"
	"os"

	"chasm/apps/api/internal/server"
)

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	handler := server.New()
	log.Printf("chasm api listening on :%s", port)

	if err := http.ListenAndServe(":"+port, handler); err != nil {
		log.Fatal(err)
	}
}
