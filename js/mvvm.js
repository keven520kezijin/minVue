// 创建一个mvvm框架类
// 作用：解析视图模板，把对应的数据，渲染到页面
class MVVM {
    // 构造器 (创建实力的模板代码)
    constructor(options) {
        this.$vm = this;
        this.$el = options.el
        this.$data = options.data

        // 判断视图是否存在
        if (this.$el) {
            // 创建模板编译器，来解析视图
            this.$compiler = new TemplateCompiler(this.$el, this.$vm)
        }
    }
}