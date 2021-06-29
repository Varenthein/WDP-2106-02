


# WDP Projekt Zespołowy

## Opis projektu

Projekt jest przykładową stroną sklepu zakodowaną z darmowego szablonu PSD, w celu nauki kodowania stron. Stworzony w oparciu o technologie: JavaScript, React, Redux, SASS.

## Inicjacja projektu

Po sklonowaniu projektu, zainstaluj wymagane paczki komendą `yarn install` (lub `npm install`).

Teraz możesz zacząć pracę, korzystając z przygotowanych taska `yarn start` (lub `npm start`).

Wszystkie potrzebne do pracy pliki źródłowe znajdują się w folderach `src` oraz `public`.

## NPM Scripts

Dostępne są 3 główne skrypty przyspieszające pracę:

- `build`: na bazie plików z folderów `src` i `public` buduje project w folderze `build`
- `start`: obserwuje zmiany w folderze `src` i uruchamia podgląd roboczy
- `test`: uruchomienie testów jednostkowych
- `refactor`: skrypt dokonuje automatycznego formatowania plików w folderze `src/`
  zgodnie z przyjętą konwencją formatowania kodu, a także sprawdza błędy za pomocą ESLinta

## Git Hooks

Projekt korzysta z Git Hooks - możliwości uruchamiania skryptów w reakcji na wybrane zdarzenia programu Git.

Za każdym razem gdy wykonasz komendę `git commit` zostaną uruchomione testy jednostkowe, formatowanie oraz lintowanie
dla plików, które zostały wybrane za pomocą `git add` i mają być zapisane w commicie.

## Konwencje i dobre praktyki

- Foldery i pliki grupowane są wg funkcjonalności (3 gówne foldery: components, redux i styles);
- Struktura pliku components dodatkowo pogrupowana jest wg funkcji danego elementu;
- Zawartość folderu to pliki .js, .module.scss, .test.js, wraz z przedrostkiem NazwaKomponentu;
- Nazewnictwo w pliku components zgodnie z notacją PascalCase;
- Nazewnictwo w pliku redux zgodnie z notacją cascalCase;
- Nazewnictwo klas wg konwencji OOCSS;
- Style globalne umieszczone są w katalogu styles, style dla poszczególnych komponentów wraz z nimi w plikach komponentu;
- Commity pisane są w języku angielskim, jako krótka informacja o konkretnej zmianie (np. Add styles to komponent (…));
- Projekt utrzymany w zgodzie z zasadami KISS i DRY.