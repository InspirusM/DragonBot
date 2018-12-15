const chalk = require('chalk');
module.exports = client => { // eslint-disable-line no-unused-vars
  console.log(chalk.bgGreen.black('I\'m Online')); // console's the message

  client.user.setActivity('IGL eSports Ass.', {type: "WATCHING"});

};
