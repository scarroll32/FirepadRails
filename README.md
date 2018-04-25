# FirepadRails

Example app demonstrating how implement collaborative editing with a Rails app, using Codemirror as the shared editing environment and Firebase as the backend.

This app integrates a Rails 5.2 website, with Turbolinks, Devise and Bootstrap 4, with [Firepad](https://firepad.io/). The data is persisted by the Rails application, stored as rendered HTML and displayed on the **show** view.

The editor content is stored both as rendered HTML, in **articles.rendered_description** and plain text with line breaks, in **articles.raw_description**. Keeping both versions of the text is useful for other downstream text processing.

Collaboration is possible by simply opening an **edit** view, and sharing the generated url with another user. The form can be re-edited and the data is loaded from the Rails backend into Firebase.

### TODO

- [ ] Integrate [Firebase Ruby](https://github.com/oscardelben/firebase-ruby)
- [ ] Provide a [Firebase configuration guide](https://medium.com/@channaly/connect-to-firebase-realtime-database-from-rails-application-f42c81dbb532)
- [ ] Fix CSS issues
- [ ] Describe and comment JS
