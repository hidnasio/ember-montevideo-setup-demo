# Tajpado

A simple touch typing learning app written in Ember. Visit http://tajpado.herokuapp.com/ to see it in action.

[github.com/san650/tajpado](https://github.com/san650/tajpado)

# Ember-app-setup-example

## .editorconfig (julio)

* que es
* ejemplo de reglas
* plugins
* diapo link, sitio, link a reglas, plugins

Allows us to have a shared configuration across IDEs

More info in [editorconfig.org](http://editorconfig.org)

* [Vim](https://github.com/editorconfig/editorconfig-vim#readme)
* [Sublime](https://github.com/sindresorhus/editorconfig-sublime#readme)
* [Atom](https://github.com/sindresorhus/atom-editorconfig#readme)

## .jshintrc (julio)

* que es
* ejemplo de reglas
* plugins para editores
* diapo link, sitio, link a reglas, plugins


JSHint allow us to detect errors and potential problems in the code. Ember-cli
creates a default the file .jshintrc with the basic configuration.

More info in [jshint.com](http://jshint.com)

* [All Options](http://jshint.com/docs/options/)

## ember-suave (julio)

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

## template lint (julio)

* que es
* preset mas conf customs
* ejemplo en ember

## scss lint (julio)

* que es
* ejemplo en ember
* [investigar] Como configurar para usar solo css.


## y otros (julio)

    ember-better-errors 0.0.2 (tener pronto un caso que de errror).
    npm-check

![npm-check screen](https://www.dropbox.com/s/sne4tcnk0ip1hys/npm-check.png?dl=0)

    ember-cli-code-coverage

## gitlab ci (luis)

.gitlab-ci

## slack + gitlab (luis)


## heroku (luis)

buildpack

```
$ heroku create APP_NAME --buildpack https://github.com/tonycoco/heroku-buildpack-ember-cli.git
$ git push heroku master
```

## heroku + gitlab (luis)

auto deploy

# License

tajpado is licensed under the MIT license.

See [LICENSE](./LICENSE) for the full license text.
