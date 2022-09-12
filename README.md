## 前言

hexo-theme-monie 卡片化设计

## 安装

### Git 安装

```shell
git clone https://gitee.com/lyboy6/hexo-themes-monie.git themes/monie

```

### npm 安装

```shell
npm install hexo-theme-monie --save
```

应用主题
修改 `hexo` 配置文件 `_config.yml` 把主题改成 `monie`

```yml
theme: monie
```

## 安装插件

如果你沒有 pug 以及 stylus 的渲染器，请下载安装:

```shell
npm install hexo-renderer-pug hexo-renderer-stylus --save

```

## 代码高亮

```yml
highlight:
  enable: false
  line_number: true
  auto_detect: false
  tab_replace: ''
  wrap: true
  hljs: false
prismjs:
  enable: false
  preprocess: true
  line_number: true
  tab_replace: ''
```
