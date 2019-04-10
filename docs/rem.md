# REM布局

rem是相对根元素`<html>`的字体大小来进行计算的。

在下面的例子中，我们设置`html`的`font-size`属性为`100px`，则可知`.text-example`元素的宽度为`3 * 100 = 300px`：

```css
html {
    font-size: 100px;
}
.text-example {
    display: block;
    width: 3rem;
}
```

在移动端，我们可以在页面加载时判断浏览器的宽度，然后通过js修改`html`元素的`font-size`，从而实现***页面元素根据浏览器宽度动态调整大小***的效果。
