# Ember-app-setup-example

## .editorconfig

Ayuda a definir y mantener estilo de codigo consistente entre los distintos editores.

En un proyecto puedo definir mas de un editor config siendo el primer editor config aquel que tenga la instruccion root = true. Generalmente ubicado en la raiz del proyecto.

Puedo definir mas de un editor config y se van sobre escribiendo las reglas.

En el editor config raiz puedo definir rutas exctas a archivos o usar los wildcards: ```/templates/components/*.hbs```

> Ember ya trae un editorconfig por defecto.

> La diapositiva pude ser una imagen de 3 editores con distinto tipo de configuracion.

More info in [editorconfig.org](http://editorconfig.org)

* [Vim](https://github.com/editorconfig/editorconfig-vim#readme)
* [Sublime](https://github.com/sindresorhus/editorconfig-sublime#readme)
* [Atom](https://github.com/sindresorhus/atom-editorconfig#readme)

## .jshintrc

Es una herramienta que nos permite detectar errores y posibles problemas en nuestro codigo javascript mediante un conjunto de reglas configurables.

Definimos un archivo .jshint en la raiz del proyecto y en el definimos todas las reglas comunes para usar en el proyecto.

Con el uso de directivas podemos definir reglas puntuales a nivel de archivo, a nivel de un bloque o a nivel de una linea.

Define para un archivo que compruebe undefined y unused. Tambien definie una variabe global.

```javascript
  /* jshint undef: true, unused: true */
  /* globals MY_GLOBAL */
```

Definir una Blacklist para prevenir el uso de alguna libreria o variable

```javascript
  /* globals -window */

  window.location.href
```

Ignorar un bloque de codigo

```javascript
  // jshint ignore:start
  let title = window.document.title;
  if (title === 'Great title') {
    window.document.title = 'Not allowed code :-(';
  }
  // jshint ignore:end
```

Ignorar una linea de nuestro codigo

```
let x = lineWithError; // jshint ignore:line
```

> Ember ya trae un archivo .jshint por defecto.

> camelcase rule is deprecated. Esto es porque jshint se encarga de correccion. Correcciones de estilo de cofigo como estos, son corregidos por JSCS (javascript code style).


More info in [jshint.com](http://jshint.com)

* [All Options](http://jshint.com/docs/options/)

## JSCS (JavaScript Code Style)

Es un linter y formater para nuestro codigo JS.

Un buen punto de partida es usar un preset ya armado y crear un archivo .jscsrc anulando o agregando las reglas que quiero personalizar.

> Actualmente usa broccoli-jscs para validar JSCS rules y en un futuro la idea es usar ESLint.

> Ember suave incluye: "validateIndentation": 2 que puede entrar en conflicto con editorconfig, en el caso de un archivo en particular se puede utilizar // jscs: disable validateIndentation

## ember-suave

* que es
* preset mas conf customs
* ejemplo en ember
* plugins editores
* eslint vs jscs futuro del addon.

Ember suave addon

Update module-for-acceptance.js

```javascript
options.afterEach.apply(this, arguments);
```

## template lint

* ejemplo en ember

## scss lint

* que es
* ejemplo en ember
* [investigar] Como configurar para usar solo css.


## y otros

    ember-better-errors 0.0.2 (tener pronto un caso que de errror).
    npm-check

![npm-check screen](https://www.dropbox.com/s/sne4tcnk0ip1hys/npm-check.png?dl=0)

    ember-cli-code-coverage

## heroku

Create the app in heroku using a buildpack

```
$ cd your-app/
$ heroku login
$ heroku create ember-montevideo-setup-demo --buildpack https://github.com/tonycoco/heroku-buildpack-ember-cli.git
```

Push your app to heroku

```
$ git push heroku master
```

Open your app


```
$ heroku open
```

## gitlab ci

Create a `.gitlab-ci` file with the configuration

Add heroku API key as env variable in gitlab

* In heroku go to **[Manager Account](https://dashboard.heroku.com/account) -> API Key**
* In Gitlab go to **the repository -> project settings -> variables**

Do a change to the repo and push it to gitlab to trigger the CI

```
$ git add .
$ git commit -m "test ci build"
$ git push origin master
```

## slack + gitlab

* In slack go to **Apps & Integrations -> Search Incoming WebHooks -> Add Configuration** and create a new webhook
* In Gitlab go to **the repository -> Settings -> Services -> Slack** and configure the slack service

## heroku + gitlab

Install Papertrail heroku addon

```
$ heroku addons:create papertrail:choklad
```

Configure an alert in papertrail

* In heroku go to **App Resources -> Papertrail -> Events**

In the search add `Slug compilation failed` and click `Save Search And Add Alert`. Configure the Alert

## Tajpado

A simple touch typing learning app written in Ember. Visit http://tajpado.herokuapp.com/ to see it in action.

[github.com/san650/tajpado](https://github.com/san650/tajpado)

## License

tajpado is licensed under the MIT license.

See [LICENSE](./LICENSE) for the full license text.
