    /** @type {import('tailwindcss').Config} */
    export default {
      content: [
          "./index.html",
          "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
          extend: {},
      },
      plugins: [],
      "tailwindCSS.includeLanguages": { 
      "plaintext": "javascript" ,
      "html": "HTML"},
      "tailwindCSS.emmetCompletions": true, // remove this line if you don't use Emmet
      "editor.inlineSuggest.enabled": true,
      "editor.quickSuggestions": {
          "strings": true
      },
      "css.validate": false,
      "emmet.includeLanguages": {
          "javascript": "javascriptreact"
      }
  }