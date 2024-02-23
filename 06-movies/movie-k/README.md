# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



# APUNTES

// const API_KEY = '6a2512c4';


/* response
1- https://www.omdbapi.com/?apikey=6a2512c4&s=Avengers
2- https://www.omdbapi.com/?apikey=6a2512c4&s=benjalindo

no controlada 
    const sumbitForm = (e) => {
        e.preventDefault();

        const { query } = Object.fromEntries(
            new window.FormData(e.target)
            );

        if (!query.trim()) return
    };

*/