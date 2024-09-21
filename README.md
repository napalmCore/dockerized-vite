# Dockerized React + Vite

Minimal docker container for a basic react + vite app based on this tutorial: https://dev.to/code42cate/how-to-dockerize-vite-44d3
to set up and run:

```bash
docker build -t vite-app .
docker run -p 8080:8080 vite-app



This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
