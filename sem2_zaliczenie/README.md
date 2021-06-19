# Reminder

Utworzono za: https://create-react-app.dev/docs/getting-started/ komendami

```bash
npx create-react-app my-app
cd my-app
npm start
```
# Kolejne uruchomienie

```bash
cd my-app
npm start
```

# Wymagania

Apka powinna miec to o czym byla mowa na cwiczeniach, tj.:
- uzywac useState-ow 
- uzywac useMemo (opcjonalne, jesli bedzie taka potrzeba)
- uzywac useEffect-ow (localStorage)
- uzywac wlasnych Hookow
[do zrobienia, tylko custom hook przy fetch API wymagalby useMemo
(opcjonalne, patrz wyzej), prosciej (mniej kodu + i tak jest to uzyte
tylko w 1 miejscu) bedzie to zrobic w useEffect]
	+ [info o useMemo](https://medium.com/@shaymalchi/understanding-reacts-usememo-hook-through-a-simple-example-ea05b78075e9)
	+ [info o fetchData i useMemo 1](https://divyanshu013.dev/blog/react-debounce-throttle-hooks/)
	+ [info o fetchData i useMemo 2](https://kyleshevlin.com/debounce-and-throttle-callbacks-with-react-hooks)
- uzywac useReducer-ow
- miec nawigacje
  + strona logowania
  + podstawowa autoryzaca
  + nie wpuszczanie nie zalogowanych userow
  + powrot do strony logowania
- spelniac poprzednie (sem1) wymagania
  + filtrowanie todosow po: zakonczone, nie zakonczone, dodawanie/usuwanie todosow
  + edycja todosow (opcjonalna)
