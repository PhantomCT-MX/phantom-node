require("dotenv").config();

module.exports = {
  port: process.env.PHANTOM_PORT || 3000,
};  