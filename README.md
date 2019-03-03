# html5-cli

Rapidly create an h5 boilerplate with everything out of the box.

## What HTML5 here means?

Here the html5-cli is mean to create `HTML5 projects`, which have the following characteristics:

* Usually need to be created in a hurry.

* Short-term (will be offline soon after being online, i.e., you do not need to maintain them).

* Usually have a nice look when compared to those long-term projects.

* Usually have only a little business logic in them.

Do you remember those projects you created for some holidays? Do you remember those projects you created to draw people's attention to your core products? Haha, I quite mean those projects here.

## Why you need html5-cli

Do you find the following features very necessary?

* use an html template engine (such as `EJS`).

* write ES6/7/8 javascript code.

* write sass/less together instead of direct css.

* compress .html, .js, .css files for production purpose.

* proxy requests to fix cross-domain problem in local development.

Do you find the following functions very common?

* switch between slide and slide.

* show a loading animation before static images are loaded.

* show a toast/alert/confirm dialog.

* make an ajax/jsonp request.

* let user copy text easily.

* operate dom nodes.

If your answers are yes, you can give html5-cli a try, and you will like it.

## Usage

Firstly, you will need to install `html5-cli` globally:

```bash
npm install -g html5-cli
```

Then, you will be able to use `html5` (or `h5` as an alias) command in your command line tools. Try the following command to create an `HTML5 project`:

```bash
# replace <project-name> with your target name
html5 init <project-name>

# or use h5 alias
h5 init <project-name>
```

Now you have successfully created the project. You can now go to the project root (`cd <project-name>`), and use the following commands to do your job:

* `npm run start`: Develop locally.

* `npm run lint`: Lint your javascript code.

* `npm run build`: Generate files available to deploy to production environment.

* `npm run deploy`: Deploy your files to your server through SFTP protocol.

## Contribution

Contribution is welcome.

## License

MIT.
