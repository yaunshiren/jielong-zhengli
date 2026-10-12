const assert = require('node:assert/strict');
const fs = require('node:fs'), vm = require('node:vm');
const html = fs.readFileSync('index.html', 'utf8');
const scripts = [...html.matchAll(/<script(?:\s+[^>]*)?>([\s\S]*?)<\/script>/g)];
const logic = scripts.find(x=>x[1].includes('接龙整理台 v0.2.0'));
assert(logic, 'Core parser is missing');
const sandbox={module:{exports:{}}};
vm.runInNewContext(logic[1], sandbox, {timeout: 2000});
const core=sandbox.module.exports;
const cases=[
 ['1. 张三\n2、李四+1\n3 王五 共3人\n4：小陈 取消报名', [4,3,6]],
 ['１．阿花 已付款\n２: 小李 未付款\n３）小赵 带2人', [3,3,5]],
 ['接龙报名\n1. 张三\n2. 张三\n备注：以上是虚构姓名', [2,2,2]],
 ['2026年10月活动\n1) 王小明\n2）李雷', [2,2,2]]
];
for (const [input,expected] of cases) {
  const {people}=core.parse(input);const s=core.summarize(people);
  assert.deepEqual([people.length,s.rows,s.attendees],expected);
}
const dup=core.parse('1. 张三\n2. 张三').people;
assert.equal(core.summarize(dup).warnings,2,'Duplicates require review');
assert.equal(core.extractStatus('未付款'),'unpaid');
assert.equal(core.extractStatus('已取消'),'canceled');
assert.equal(core.extractCount('小王+2'),3);
assert.throws(()=>core.parse('x'.repeat(350001)),/过长/);
const raw=core.parse('1. =2+2').people;
assert(core.asCsv(raw).includes("'=2"),'Prevent spreadsheet formula execution even when the plus sign is parsed as a participant suffix');
assert(!core.asCsv(core.parse('1. 小王 取消报名').people).includes('小王'));
for(const p of ['guide.html','sitemap.xml']) assert(fs.existsSync(p),p+' missing');
assert(html.includes('https://yaunshiren.github.io/jielong-zhengli/'));
console.log('PASS: 4 input formats, status/count, duplicate, bounds, CSV safety, site pages');
