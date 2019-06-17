const dotenv = require('dotenv');
dotenv.config();

const APP_SECRET = process.env.APP_SECRET;
const VALIDATION_TOKEN = process.env.VALIDATION_TOKEN;
const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;

var logger = require('morgan');
var http = require('http');
var bodyParser = require('body-parser');
var express = require('express');
var request = require('request');
var router = express();

//for caclculator
const Netmask = require('netmask').Netmask
const ip = require('ip-utils')
const fs = require('fs')
const yml = require('yaml').parse(fs.readFileSync('config.yml', 'utf8'))
const ip_class = require('ip-class')
const netpatser = require('netparser')

var app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
var server = http.createServer(app);

app.listen(process.env.PORT || 5000);

app.get('/', (req, res) => {
  res.send("Server is running.");
});

app.get('/webhook', function (req, res) {
  if (req.query['hub.verify_token'] === VALIDATION_TOKEN) {
    res.send(req.query['hub.challenge']);
  }
  res.send('Error, wrong validation token');
});

app.post('/webhook', function (req, res) {
  var entries = req.body.entry;
  for (var entry of entries) {
    var messaging = entry.messaging;
    for (var message of messaging) {
      var senderId = message.sender.id;
      if (message.message) {
        if (message.message.text) {
          var text = calc(message.message.text);
          sendMessage(senderId, text);
        }
      }
    }
  }

  res.status(200).send("OK");
});

function sendMessage(senderId, message) {
  request({
    url: 'https://graph.facebook.com/v3.3/me/messages',
    qs: {
      access_token: PAGE_ACCESS_TOKEN,
    },
    method: 'POST',
    json: {
      recipient: {
        id: senderId
      },
      message: {
        text: message
      },
    }
  });
}

function calc(command) {
  var chars = command.trim().split(/[\s,]+/g)
    var results = ''
    var _ad1 = chars[0]
    var _ad1_ip = _ad1.split("/")[0]
    results += yml[chars[0]]
   
    return results
}
