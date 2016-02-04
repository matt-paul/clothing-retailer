##Getting Started
```
git clone

cd retailer

npm install

```
Start up server, lint etc..
```
grunt
```
To run unit tests in a seperate terminal...
```
karma start test/karma.conf.js
```
The basket can be viewed in the top right of the screen;

##Considerations Of The Task

I decided to make my shop responsive using a flexbox design. The benefit was that this minimised the need to use responsive libraries such as Bootstrap which contain large amounts of redundant (for this task) data.  The disadvantage of this was that it took a lot longer to code css than if I had used a framework, which resulted in less time for other tasks. I hope that this has been worthwhile however, and demonstrated a greater understanding of front end work than had I simply used Bootstrap. Certainly I have learnt a lot, including some of the limitations of flexbox and how to get around them, the hidden 'ghost' div's being one example.

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
