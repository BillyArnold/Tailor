package main

import (
	"context"
	"fmt"
  "io/ioutil"
  "log"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

// Greet returns a greeting for the given name
func (a *App) Greet(name string) string {
	return fmt.Sprintf("Hello %s, It's show time!", name)
}

func (a *App) ListFiles(folderPath string) {
  files, err := ioutil.ReadDir(folderPath)
  if (err != nil) {
    log.Fatal(err)
  }

  for _, file := range files {
    fmt.Println(file.Name())
  }
}

func (a *App) ProcessFile(file string) string {
  fmt.Sprintf("Saving File...");
  return fmt.Sprintf(file)
}
