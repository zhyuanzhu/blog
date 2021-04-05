# cookie

> `cookie` 分为 `会话cookie` 和 `持久cookie`。区别是 `cookie` 的过期时间

- 版本 0 的 `Set-Cookie` 首部
```js
  `Set-Cookie`: `name=value [; expires=date] [; path=path] [; domain=domain] [; secure]` 

```

- 版本 1 的 `Set-Cookie` 首部

|  Set-Cookie2 属性  |  描述及实例  |
| ------------------ | :--------: |
| name=value         | `强制的` 创建任意的 `name=value` 关联 |
| Version            | `强制的` 为版本1 `Version=1`  |
| Comment            | `可选` 说明了服务器准备如何使用这个 `cookie`，必须采用 `UTF-8` 编码 |
| CommentURL         | `可选` 提供了一个 `URL` 指针，指向详细描述了 `cookie` 目的及策略文档 |
| Disacard           | `可选` 如果提供了这个属性，就会在客户端程序终止时提示客户端放弃这个 `cookie` |
| Domain             | `可选` 浏览器只向指定域中的服务器主机发送 `cookie` |
| Max-Age            | `可选` 用于设置以秒为单位的 `cookie` 生存期 |
| Path               | `可选` 为服务器上的特定文档指定 `cookie`，通常为 `/` |
| Port               | `可选` 可以单独作为关键字使用，也可以包含一个由 `,` 分割的可以引用 `cookie` 的端口列表 |
| Secure             | `可选` 如果包含这个属性，就只有在 `HTTP` 使用 `SSL` 安全连接时才能发送 `cookie` |
| | 
