const log4js = require("log4js");

// %[[%d{yyyy-MM-dd hh:mm:ss}]

const logLevel = process.env.TRINITY_ENV_MODE === "dev" ? "debug" : "info";

log4js.configure({
  appenders: {
    out: {
      type: "stdout",
      layout: {
        type: "pattern",
        pattern: `%[[%d{yyyy-MM-dd hh:mm:ss}] %p | %m`,
      },
    },
  },
  categories: {
    default: { appenders: ["out"], level: logLevel },
  },
  pm2: true,
});
const LOGGER = log4js.getLogger();
LOGGER.level = logLevel;

module.exports = { LOGGER };