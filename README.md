```
cd retailer

npm install

```
```
grunt
```
Run unit tests...
```
karma start test/karma.conf.js
```

I decided to make my shop responsive using a flexbox design. The benefit was that this minimised the need to use responsive libraries
such as bootstrap which contain large amounts of redundant (for this task) data.

I have avoided using Bower, preferring to manage dependencies solely through
NPM.

Using SASS has allowed me to use variables and nesting, improving readability and keeping my styles D.R.Y

I have split my html up into partials for clear visibility and modularity

I have aimed to keep my controller extremely light by encapsulating the business logic of
the basket in the BasketService factory.

Finally, I have used Grunt to compile SASS, as well as run linting, and in
general to speed up workflow.

Further work...

To take this project further, I would write additional end to end tests using protractor.
Secondly, I would add media queries in order to optimise how the basket pops up
on smaller viewports.
