# ts-server

Learn create server with typescript、postgrepsql、graqphql

## 启动

1.`cd ts-server`

2.`yarn`

3.`yarn start`

4.访问 http://localhost:4000 查看

## 创建数据库

1. 登录
   `psql postgres postgres`
2. 创建用户和实例

```sql
  create role pguser with encrypted password 'pguser';
  create database ts_server with owner = pguser template=template0 encoding='UTF8';
  grant all on database ts_server to pguser with grant option;
```

3. 登录
   `psql ts_server pguser`

## 查询和删除

![](https://github.com/liuxinl/ts-server/blob/master/doc/images/WechatIMG143.png)

![](https://github.com/liuxinl/ts-server/blob/master/doc/images/WechatIMG142.png)
