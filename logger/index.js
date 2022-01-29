const { format, createLogger, transports } = require('winston');

const { timestamp, combine, printf } = format;

const logFormat = printf(({ level, message, timestamp, stack }) => {
  return `${timestamp} ${level}: ${stack || message}`;
});

const logger = createLogger({
  format: combine(
    format.colorize(),
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    logFormat,
  ),
  transports: [new transports.Console({ level: 'debug' })],
});
module.exports = logger;
