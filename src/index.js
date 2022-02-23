var Velocity = require('velocityjs');
const { readFile } = require("fs/promises");
const path = require("path");
const context = require("../context.json");

const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  const template = (await readFile(path.join(__dirname, "../templates/template.vl.html"))).toString();

  const r = Velocity.render(template, context);
  // console.log(r);

  ctx.body = r;
});

app.listen(3001);

