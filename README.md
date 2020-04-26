# Gloomhaven Helper

Recursos:

- https://github.com/any2cards/gloomhaven
- https://asgrabowski.github.io/
- https://imagecompressor.com/

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

Para generar una página (dentro del directorio pages y con sufijo "page" en el nombre):

> ng generate component pages/nombre-pagina-page

Ejemplo:

> ng generate component pages/history-page

Para generar un componente que no sea una página (dentro del directorio components y sin sufijo):

> ng generate component components/nombre-componente

Ejemplo:

> ng generate component components/menu

Si te has equivocado creando un componente y lo quires borrar:

1) Eliminar el directorio del componente con los 4 archivos
2) Eliminar la declaración componente en la sección declarations de app.module.ts y eliminar el import de dicho componente en ese mismo fichero.

Para generar un servicio (dentro del directorio services y sin sufijo):

> ng generate service services/nombre-servicio

Ejemplo:

> ng generate service services/scenario-creator

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

Como el proyecto no está alojado en la raíz del dominio, sino que está en https://carherco.es/envelope-openers, hay que hacer el build indicando el base-href:

> ng build --base-href=/envelope-openers/ --prod

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
