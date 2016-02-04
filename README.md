Subtotal refers to price before voucher discount.

Used NPM only to make simpler to manage dependencies, rather than utilising
Bower.

Used SASS to allow me to use variables and nesting, making css clearer

Split my html up into partials for clear visibility and mofularity

Aimed to keep controller extremely light my encapsulating business logic of
basket in the BasketService factory.

Used Grunt to compile SASS, run tests and lint.

Decided to make responsive using flexbox, which is now supported well.  The
additional benefit was that this minimised the need to use responsive libraries
such as bootstrap which contain massive amounts of redundant information for
this task.

npm install

grunt
