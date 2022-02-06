const SingleEntryPlugin = require("./SingleEntryPlugin")

// context文件目录
// item入口文件
// name = main
const itemToPlugin = function (context, item, name) {
    return new SingleEntryPlugin(context, item, name)
}

class EntryOptionPlugin {
  apply(compiler) {
      compiler.hooks.entryOption.tap('EntryOptionPlugin', (context, entry) => {
        itemToPlugin(context, entry, 'main').apply(compiler)
      })
  }
}

module.exports = EntryOptionPlugin