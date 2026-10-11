# 接龙整理台 · Beta 0.2

免费把**已经发生的**微信群编号文字接龙整理为 Excel/WPS 可打开的 CSV 名单和 A4 签到表。不需要用户重新填写报名表。

- [打开免费工具](https://yaunshiren.github.io/jielong-zhengli/)
- [使用指南（含示例、限制与常见问题）](https://yaunshiren.github.io/jielong-zhengli/guide.html)
- [市场验证记录与替代产品](VALIDATION.md)

**基础流程**：复制已有接龙 → 粘贴 → 点击整理 → 人工核对重复姓名/人数/取消记录 → 导出 CSV 或打印签到表。

支持示例：`1. 张三`、`2、李四+1`、`3 王五 共3人`、`4：小陈 取消报名`。

**重要限制**：不是微信官方工具、不能读取群聊或核验真实付款、不保证所有格式准确，下载的是 CSV 不是原生 .xlsx。请仅处理有权使用的资料，并在导出前人工核对。

**隐私**：名单在浏览器本地处理，没有上传名单接口或第三方分析脚本，也不会自动留存；GitHub Pages 的静态网站访问日志由托管方按其政策处理。

**反馈**：[匿名格式问题模板](https://github.com/yaunshiren/jielong-zhengli/issues/new?template=parser-report.yml)（需要 GitHub 登录；请勿公开真实姓名、电话、群聊文字或其他隐私内容）。

**测试与部署**：修改主分支会运行 `tests/smoke.cjs`；通过测试后才由 GitHub Actions 发布至 Pages。

**当前商业状态**：免费测试版，真实用户数量未知，暂无收入或付费验证。不会把 GitHub 星标、部署成功等同于市场验证。
