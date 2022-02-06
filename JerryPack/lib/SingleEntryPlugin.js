
class SingleEntryPlugin {
    constructor(context, entry, name) {
      this.context = context
      this.entry = entry
      this.name = name
    }
  
    apply(compiler) {
      compiler.hooks.make.tapAsync('SingleEntryPlugin', (compilation, callback) => {
        const { context, entry, name } = this
        console.log("make 钩子监听执行了~~~~~~")
        
        // 开始编译
        // callback就是告诉上面 编译完成
        compilation.addEntry(context, entry, name, callback)

        // callback()
      })
    }
  }
  
  module.exports = SingleEntryPlugin
  