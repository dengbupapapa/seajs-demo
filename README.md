# seajs-demo

### 目录规范

            root
            ├── page
            │   ├── layout
            │   └── demo
            │       ├── demo.vm
            │       ├── demo.less
            │       └── demo.js
            └── public
                ├── components
                ├── lib
                └── static

**说明**

- `page` 用来存放各类页面级模板文件。
    - `layout` 模版骨架
- `public` 用来存放各类静态资源
    - `components` ui组件（包含html、css或js一体的组件）
    - `lib` 第三方js库、插件
    - `static` 静态资源


### 注意事项
1. seajs中别名使用

    '@components': '/public/components',
    '@lib': '/public/lib',
    '@static': '/public/static',
    '@style': '/public/static/style',
    '@js': '/public/static/javascript'

2. 项目中使用less，请使用编辑器预编译工具。如sublime请npm全局安装less，编辑器安装less2css
3. 项目本地开发使用sftp上传至开发环境进行，可以使用编辑器保存实时上传。




