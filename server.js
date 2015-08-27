'use strict';

var statik = require('statik');
statik({
  port: process.env.PORT || 3000,
  root: './dist',
  verbose: true
});
