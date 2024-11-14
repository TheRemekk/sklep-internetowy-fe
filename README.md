# Projekt "Sklep internetowy"

Stworzone z użyciem [Angular CLI](https://github.com/angular/angular-cli) na wersji 15.2.3.  
Projekt tworzony był podczas kursu na witrynie Udemy pt. "(2024) Angular i Java Spring Od zera do Fullstack developera". Na bieżąco planuję rozwijać ten projekt i dodawać nowe możliwości lub zmieniać design.

Link do oryginalnego projektu stworzonego przez autora kursu [GitLab](https://gitlab.com/udemycourses3053026/projekt-wspolny-fe).

## Spis treści

1. [Opis](#l1)
2. [Instalacja](#l2)
3. [Role i funkcje](#l3)
4. [Struktura projektu](#l4)

<a id="l1"></a>
## Opis

Frontendowy interfejs użytkownika stworzony z użyciem TypeScript, SCSS oraz HTML w środowisku [Angular CLI](https://github.com/angular/angular-cli).  
Projekt ma za zadanie imitować sklep internetowy na którym można zakupić produkty wystawione przez administratora.
Do wykonania poszczególnych funkcji może być wymagana konkretna rola.  
Aby dowiedzieć się o tym jakie role są dostępne należy przejść do [Role i funkcje](#l3).

<a id="l2"></a>
## Instalacja

Aby uruchomić ten projekt lokalnie, wykonaj poniższe kroki:

1. Klonowanie repozytorium  
```bash
  cd <scieżka_w_której_chcesz_umieścić_projekt>
  git clone https://github.com/TheRemekk/sklep-internetowy-fe
  ``` 

2. Instalacja zależności
```bash
  npm install  # lub yarn install
  ``` 

3. Uruchomienie projektu
```bash
  ng serve  
  ``` 
  
Zalecam korzystać ze środowiska VS Code lub WebStorm w celu przeglądania projektu lub jego edycji.  

Uwaga! Projekt nie będzie działał poprawnie bez użycia części backendowej oraz bazy danych.  
Tutaj znajduje się [backend](https://github.com/TheRemekk/sklep-internetowy-be), baza danych tworzona jest z użyciem PostgreSQL przy pomocy 
biblioteki Flyway ze Spring Boot'a oraz z użyciem Dockera. Więcej informacji w repozytorium backendu.

<a id="l3"></a>
## Role i funkcje

Dostępne role w interfejsie oraz ich przydział funkcji:  
* Administrator (ADMIN) - Ma dostęp do wszystkich funkcji witryny.  
  Posiada on dodatkową zakładkę "Administracja", której nie posiada użytkownik.  
  W zakładce tej można dodawać/usuwać produkty oraz dodawać nowe kategorie produktów.
* Użytkownik (USER) - Ma kilka udostępnionych funkcji, m.in:
  * Dostęp do przeglądania produktów i filtrowania ich po różnych kryteriach
  * Opcja dodawania produktów do koszyka
  * Opcja przeglądania produktów aktualnie znajdujących się w koszyku
  * Zakup produktów z koszyka
* Gość (GUEST) - Na aktualną chwilę niezalogowany użytkownik ma takie same przywileje co użytkownik.

<a id="l4"></a>
## Struktura projektu

W ścieżce app/modules znajdują się poszczególne sekcje witryny:
* administration - Komponenty dostępne tylko dla roli administratora pozwalające na:
  * dodawanie oraz usuwanie produktów 
  * dodawanie kategorii
* auth - Komponenty związane z weryfikacją i autoryzacją użytkownika
* basket - Komponenty do zarządzania koszykiem produktów
* core - Najbardziej rozbudowana sekcja, w której znajdują się m.in:
  * nagłówek z poszczególnymi zakładkami (Strona główna, Produkty, Logowanie)
  * guards służące do zabezpieczenia przechodzenia do danej ścieżki strony
  * interceptors wyłapujące błędy podczas komunikacji z backendem lub bazą danych
* home - Komponent odpowiadający za widok strony głównej
* orders - Komponenty odpowiadające za wypełniania formularza oraz wyświetlania zamówień posiadanych przez użytkownika
* products - Komponenty wyświetlające produkty do zakupu
* shared - Różne elementy udostępnione do reszty komponentów znajdujących się w projekcie


