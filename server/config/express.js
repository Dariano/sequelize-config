const express = require('express')
const app = express()

const load = require('express-load')

load('modules', { cwd: 'server', verbose:true})
    .into(app)


module.exports = app