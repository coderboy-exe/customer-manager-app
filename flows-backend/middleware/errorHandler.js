const errorHandler = (err, req, res, next) => {
    const { constants } = require("../constants");  
    const statusCode = res.statusCode ? res.statusCode : 500;

    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({
                title: "Validation Failed",
                message: err.message,
                stackTrace: err.stack
,            })
            break;
        case constants.NOT_FOUND:
            res.json({
                title: "Resource Not Found",
                message: err.message,
                stackTrace: err.stack
,            })
        case constants.UNAUTHORIZED:
            res.json({
                title: "Unauthorized",
                message: err.message,
                stackTrace: err.stack
,            })
        case constants.FORBIDDEN:
            res.json({
                title: "Forbidden Request",
                message: err.message,
                stackTrace: err.stack
,            })
        case constants.SERVER_ERROR:
            res.json({
                title: "Forbidden Request",
                message: err.message,
                stackTrace: err.stack
,            })
    
        default:
            console.log("No errors found")
            break;
    }

}

module.exports = errorHandler;