# Angularsystem

基于Angular的后台管理系统，拥有完整的前后台增删改查，后台使用express+moogose，使用Angular-cli构建。

# 使用

```
git clone https://github.com/zhi3210happy/angular-system.git;
```
切换到项目目录，

```
// 如果不能科学上网，请使用cnpm代替npm
// npm i -g cnpm
// 如果未安装angular-cli
// npm i -g @angular/cli
npm install 
```
安装后台：
```
cd server
npm install
npm run init(初始化数据)
npm start
```
启动开发模式：
```
ng serve
```

如果顺利，项目会运行在本地 http://localhost:4200

# 主要功能点

### angular基本功能的使用
### 带管理功能可切换的tab
    - tab可管理；
    - 自定义路由重用机制
### 一个增改查删的Demo（见人员管理）
    - 增改查删的实现
    - 多种表单控件
### 集成一些插件
    - 文本编辑器
    - 图表
    - 地图
    - 弹出框
    - 流程图
    - 树目录
    - 日程安排
### 与后台交互使用Rxjs
    - 异步编程使用Rxjs
### 集成Material Design风格和Bootstrap风格的UI

如果喜欢，还请挪一下鼠标给我一个star~~

# 效果图


#### 人员管理
![person-list](https://github.com/zhi3210happy/angular-system/blob/master/src/jietu.png)

#### 日程安排
![calendar](https://github.com/zhi3210happy/angular-system/blob/master/src/jietu.png)

#### 图表
![echarts](https://github.com/zhi3210happy/angular-system/blob/master/src/jietu1.png)

#### 流程图
![jsplumb](https://github.com/zhi3210happy/angular-system/blob/master/src/jietu2.png)

#### 树结构
![ztree](https://github.com/zhi3210happy/angular-system/blob/master/src/jietu3.png)

#### 地图
![amap](https://github.com/zhi3210happy/angular-system/blob/master/src/jietu4.png)





