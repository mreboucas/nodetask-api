/**
 * @LOGGER -> Arquivo para manter os logs da API
 */

import fs from "fs";
import winston from "winston";

if (!fs.existsSync("logs")) {
    fs.mkdirSync("logs")
}

module.exports = new winston.loggers({
    transports: [
        new winston.transports.File({
            level: "info",
            fileName: "logs/app.log",
            maxsize: 1048576,
            maxFiles: 10,
            colorize: false
        })
    ]
});