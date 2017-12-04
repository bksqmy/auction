# Auction

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).












1：Angular ： 提供的组件比较多。统一的构建方式。
2：vue 是国内的大牛搞的，灵活，并不限制你的构建方式。尺寸比较大。
3： 使用angular的命令行工具。
    使用到的命令：
4:生成目录的讲解
  e2e测试目录
  4-1： 命令行的项目是按照一定的规则进行创建的。
  4-2:angular-cli.json 是一个json文件，是命令行的工具文件
  4-3：karma.conf.js  单元测试的执行器
  4-4： package.json 列明了版本的依赖包
  4-5：polyfills.ts  单元测试
5： 数据绑定
6：（组件必备属性）装饰器、模板、控制器
   （可选属性）输入属性，提供器，生命周期钩子（用来触发解决各种业务逻辑）
   （可选的输出对象） 生命周期钩子，样式表，动画，输出属性
7： 命令
安装jquery               npm install jquery --save
安装bootstrap            npm install bootstrap --save
安装类型描述文件          npm install @types/jquery --save-dev
                         npm install @types/bootstrap --save-dev
                         
                         
                         生成组件：  ng a component navbar

npm install -g @angular/cli


ng new auction  -- 用来创建一个项目

组件元数据装饰器  @Component

模板是组件的必备特性


组件的值，替换到双大括号
{{title}}



属性绑定，事件绑定，双向绑定 


导航条























