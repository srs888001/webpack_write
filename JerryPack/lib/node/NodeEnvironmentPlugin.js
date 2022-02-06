const fs = require('fs')

class NodeEnvironmentPlugin {
    constructor(options) {
        this.options = options || {}
    }

    apply(complier) {
        // 只是需要读写能力， 这里直接使用fs
        complier.inputFileSystem = fs
        complier.outputFileSystem = fs
    }
}

module.exports = NodeEnvironmentPlugin