module.exports = {
    "track": "**/*", // globby to which files in the build dir you want to track (default)
    "limits": [
        {
            "server/chunks/**/*": {
                "maxSize": "1mb",
            }
        },
        {
            "static/chunks/app/page*": {
                "maxSize": "10kb",
                "maxDifference": "10%",
                "prohibitedModules": [ // not yet supported
                    "lodash",
                    "moment",
                ]
            }
        },
    ]
};