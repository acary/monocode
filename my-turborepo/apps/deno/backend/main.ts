import { Application, Context, Router } from "https://deno.land/x/oak/mod.ts";
import { myCatalog } from "./constants/myCatalog.ts";
import Person, { sayHello } from "./interfaces/person.ts";

const router = new Router();

router
  .get("/", async (ctx: Context) => {
    ctx.response.body = sayHello(ada);
  })
  .get("/courses", async (ctx: Context) => {
    ctx.response.body = myCatalog;
  });

const ada: Person = {
  lastName: "Lovelace",
  firstName: "Ada",
};

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });
