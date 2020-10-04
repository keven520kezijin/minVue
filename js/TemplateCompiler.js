// 创建一个TemplateCompiler模板编译工具
class TemplateCompiler {
    // 构造函数
    // 1) 视图线索
    // 2) 全局vm对象
    constructor(el, vm) {
        // 缓存重要的属性
        this.el = this.isElementNode(el) ? el : document.querySelector(el);
        this.vm = vm;
        // 判断视图存在
        if (this.el) {
            // 1. 把模板内容放入内存(片段)
            let fragment = this.node2fragment(this.el);
            debugger
            // 2. 解析模板
            this.compile(fragment);
            // 3. 把内存的结果，返回到页面
            // this.el.appendChild(fragment);
        }
    }

    // ***********工具方法***********
    isElementNode(node) {
        return node.nodeType === 1; // 1.元素节点， 2.属性节点， 3.文本节点
    }
    isTextNode(node) {
        return node.nodeType === 3
    }
    // ******************************

    // ***********核心方法***********
    // 把模板放入内存，等待解析
    node2fragment(node) {
        // 1. 创建内存片段
        let fragment = document.createDocumentFragment();
        let child = null;
        debugger;
        // 2. 把模板内容丢到内存
        while(child = node.firstChild) {
            fragment.appendChild(child)
        }
        // 3. 返回
        return fragment
    }
    compile(parent) {}
    // ******************************
}