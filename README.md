# Ember Montevideo Setup Demo

## .editorconfig

EditorConfig helps developers define and maintain consistent coding styles between different editors.

```
ember new my-app
```

Installs a default .editorConfig in the root folder

More info in [editorconfig.org](http://editorconfig.org)

## JSHint

JSHint is a tool that helps to detect errors and potential problems in our
JavaScript.

```
npm install -g jshint
```

We can define all the rules in a **.jshintrc** JSON file placed in the root
directory.

```javascript
{
  "browser": true,
  "curly": true,
  "debug": true
  ...
}
```

Some useful directives to handle code warnings

Directives
* jshint
* globals
* ignore

More info in [jshint.com](http://jshint.com/)

## JSCS

JSCS is a code style linter and formatter for your style guide.

```
npm install jscs -g
```

* Adds a .jscsrc file
* Select a preset (define rules)
* Code looks better!

More info in [jscs.info](http://jscs.info)

## Ember Suave

Ensures super stylish code by enforcing the DockYard JavaScript and Ember style guide rules.

```
ember install ember-suave
```

```javascript
// file .jscsrc
{
  "preset": "ember-suave"
}
```

ember-suave preset has a set of predefined rules you can override

```javascript
{
  "preset": "ember-suave",
  "disallowDanglingUnderscores": true,
  "disallowEmptyBlocks": null
}
```
* Migrate addon to ESLint [github issue](https://github.com/DockYard/ember-suave/issues/113)

More info in [ember-suave](https://github.com/DockYard/ember-suave)

## Template lint

**ember-cli-template-lint** is powered by ember-template-lint which allows configuration by using a **.template-lintrc.js** file in the root of your project.

```
ember install ember-cli-template-lint
```

And then configure rules for my application.

More info in [ember-cli-template-lint](https://github.com/rwjblue/ember-cli-template-lint)

## SCSS lint

An Ember CLI addon to integrate scss-lint for standards adherence and improved style consistency.

```
gem install scss-lint

ember install ember-cli-scss-lint
```

Configure rules in **.scss-lint.yml** file and every time you run an Ember CLI building your stylesheets will be linted and any errors output to the command line.

## heroku

Create the app in heroku using a buildpack

```
$ cd your-app/
$ heroku login
$ heroku create ember-montevideo-setup-demo \
--buildpack https://github.com/tonycoco/heroku-buildpack-ember-cli.git
```

Push your app to heroku

```
$ git push heroku master
$ heroku open
```

More info about [heroku buildpack](https://github.com/tonycoco/heroku-buildpack-ember-cli)

## gitlab ci

Create a `.gitlab-ci` file with the configuration

Add heroku API key as env variable in gitlab

* In heroku go to **[Manager Account](https://dashboard.heroku.com/account) -> API Key**
* In Gitlab go to **the repository -> project settings -> variables**

Do a change to the repo and push it gitlab to trigger the CI

```
$ git add .
$ git commit -m "test ci build"
$ git push origin master
```

More info about [gitlab ci](http://docs.gitlab.com/ce/ci/quick_start/README.html)

## slack + gitlab

* In slack go to **Apps & Integrations -> Search Incoming WebHooks -> Add Configuration** and create a new webhook

* In Gitlab go to **the repository -> Settings -> Services -> Slack** and configure the slack service

## slack + heroku

Install Papertrail heroku addon

```
$ heroku addons:create papertrail:choklad
```

Configure an alert in papertrail

* In heroku go to **App Resources -> Papertrail -> Events**

Search

```
Slug compilation failed
```

and then click *Save Search And Add Alert*

## Tajpado

We used Tajpado code base for this talk. You can find the original [github.com/san650/tajpado](https://github.com/san650/tajpado)

### License

tajpado is licensed under the MIT license.

See [LICENSE](./LICENSE) for the full license text.
