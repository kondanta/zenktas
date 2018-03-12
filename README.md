## zenktas
Simple hepsiburada parser for iOS products, and writing them into database and .txt file.

### Prerequisites
- Npm
- Node
- eslint [Optional if you want to run linter]

### Installing
- [How to install Node.js and npm package manager](https://docs.npmjs.com/getting-started/installing-node)
- Installing core packages
  ```npm update```
- Downloading optional packages
  ```npm i eslint```


## Usage
Its expected from user to use main.js to test these functionalities.

- Parsing
  - Running parser. It also returns to the data itself for letting users manipulate if it's necessary. Parser also generates the output.txt file of the product with available product features.
  ```
  parser = new Parser(
        "hepsiburada url")
    parser.parser((error, data) => {});
  ```
    - Running search Method to check if given category is available
    ```
    parser.simpleSearch("category you want to check");
    ```
- Database
  - Getting information of products available on database:
  ```
  var Db = require("./db);"
  db = new Db();
  db.getProduct(function(err, data){
    console.log(data);
  });
    ```
- Inserting into database requires name of the product, and array of javascript objects that contains available features of the product.
  ```
  db.insertIntoProduct("name", "array that contains js objects");
  ```

### Warnings

- I mainly use eslint for static checking. However it breaks my development environment in many levels. Please think twice before running eslint with --fix argument.
- Since this program uses online instance of mongodb, it has limited amount of space. While doing insertion, please keep this in mind.
- Mongodb instance url is already provided in `db.js` file. The user *kon in our case* has admin privilege.


## Built With

* [Cheerio](https://github.com/cheeriojs/cheerio) - Html parser
* [Request](https://github.com/request/request) - Simplified http request package
* [Mongoose](https://github.com/Automattic/mongoose) - Mongodb interface for javascript.


## Authors

* **Taylan Dogan**  - [kondanta](https://github.com/kondanta)
