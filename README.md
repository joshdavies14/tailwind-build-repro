This is a minimal reproduction for https://github.com/tailwindlabs/tailwindcss/issues/14454.

# Steps to reproduce
1. Clone this repository
2. Run `npm install`
3. Run `npm run dev`
4. Open the running app in your browser. Observe that loading is not instant.
5. Open `src/App.vue` and add an additional element in to the DOM. Observe that the hot reload is not instant.
