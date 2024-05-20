# Tailwind

Framework CSS basado en Utilidades. Cada clase posee propiedades

Ventajas:
- Estilos se definen sin depender de archivos/modulos CSS externos
- Mantencion más facil por tanto, ya que no habra codigo legado que no se sabe si se esta utilizando o no
- Remueve preocupación por nombrar clases
- Remueve inconsistencias creadas por herencia de reglas CSS

Instalar con (en vite):
[Guias de Instalación](https://tailwindcss.com/docs/guides/vite) 
`npm install -D tailwindcss postcss autoprefixer`
`npx tailwind init -p`

tailwind.config:
- Content especifica donde debe actuar
- 

Agregar directivas a `index.css`
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

# Customs Hooks

Crear una carpeta en `/src/hooks`, respentando nomenclatura `use{name}`

