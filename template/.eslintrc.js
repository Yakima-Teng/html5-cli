module.exports = {
    parser: 'babel-eslint',
    extends: 'standard',
    plugins: [
        'react',
    ],
    rules: {
        /*********************************************
         * react、jsx相关规则
         *********************************************/
        // 检测元素是否需要设置key属性，通常对由遍历数组产生的元素需要添加key属性
        'react/jsx-key': 2,
        // 防止笔误将jsx中的注释误弄成文本节点
        'react/jsx-no-comment-textnodes': 2,
        // JSX中的元素不允许拥有重复的属性
        'react/jsx-no-duplicate-props': 2,
        // 若需要对a元素添加target='_blank'，则必须同时添加rel='noreferrer noopener'，否则会有安全隐患，详见：https://mathiasbynens.github.io/rel-noopener
        'react/jsx-no-target-blank': 2,
        // 不允许在jsx中竖线未声明的变量
        'react/jsx-no-undef': 2,
        // 防止import React导致React被报错为未使用的变量
        'react/jsx-uses-react': 2,
        // 防止在jsx中使用的变量被认为是未被使用的
        'react/jsx-uses-vars': 2,
        // 不允许对jsx元素使用prop属性
        'react/no-children-prop': 2,
        // 在jsx元素内部有子元素时不允许对该jsx元素设置dangerouslySetInnerHTML属性
        'react/no-danger-with-children': 2,
        // 不允许使用React中已经不建议使用的方法（需要在setting.react中指定react版本号）
        'react/no-deprecated': 2,
        // 不允许直接修改this.state，请使用this.setState
        'react/no-direct-mutation-state': 2,
        // 不允许使用findDOMNode，请使用回调refs，详见：https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-find-dom-node.md
        'react/no-find-dom-node': 2,
        // 不允许使用this.isMounted()方法
        'react/no-is-mounted': 2,
        // 不允许使用render方法的返回值
        'react/no-render-return-value': 2,
        // 避免使用字符串方式<div ref='hello' />来引用组件，请使用回调方式
        'react/no-string-refs': 2,
        // 不允许在标记中出现无效字符串（有些字符需要escaped一下），详见：https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-unescaped-entities.md
        'react/no-unescaped-entities': 2,
        // 不允许出现未知的属性（比如class应该用className，其他属性大部分也都需要用驼峰式，跟平时的html元素属性名不太一样）
        'react/no-unknown-property': 2,
        // 定义React组件时必须进行属性验证，否则别人复用该组件时容易出错
        'react/prop-types': 2,
        // 使用jsx时必须有React存在，因为这些jsx元素最后都会调用类似React.createElement('a')的方法
        'react/react-in-jsx-scope': 2,
        // render方法中必须通过return来返回返回值
        'react/require-render-return': 2,
        'react/jsx-tag-spacing': ['error', {
            'closingSlash': 'never',
            'beforeSelfClosing': 'always',
            'afterOpening': 'never',
            'beforeClosing': 'never',
        }],

        /*********************************************
         * 其他规则
         *********************************************/
        'comma-dangle': [2, 'always-multiline'],
        'indent': ['error', 4],
        'no-console': [2],
    },
    globals: {
        alert: true,
        $: true,
        location: true,
        history: true,
    },
    settings: {
        react: {
            // Regex for Component Factory to use, default to "createReactClass"
            createClass: 'createReactClass',
            // Pragma to use, default to "React"
            pragma: 'React',
            // React version, default to the latest React stable release
            version: '16.8.6',
        },
    },
}
