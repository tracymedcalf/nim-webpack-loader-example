Example that uses [nim-loader](https://github.com/idle-z/nim-loader.git) with Webpack.

The main addition that this example makes to similar examples of nim-loader is the flag argument passed to the Nim compiler. Without the argument, the Nim compiler doesn't output the generated JavaScript to the nimcache directory and thus the loader doesn't know where to the find the generated JavaScript. See webpack.config.js for details.

Note that to run this example, you must have Nim installed.
