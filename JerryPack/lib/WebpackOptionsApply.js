const EntryOptionPlugin = require("./EntryOptionPlugin")


class WebpackOptionsApply {
  process(options, compiler) {
    new EntryOptionPlugin().apply(compiler)

    // 为什么这边主动调用了这个方法
    // 这个方法调用后导致 Compiler下面回调不执行了, 应该是系统有个默认make的实现， 回调了callback
  //   this.hooks.make.callAsync(compilation, (err) => {
  //     console.log('调用了beforeRun')
  //     console.log('make钩子监听触发了~~~~~')
  //     callback()
  // })
    compiler.hooks.entryOption.call(options.context, options.entry)
  }
}

module.exports = WebpackOptionsApply
