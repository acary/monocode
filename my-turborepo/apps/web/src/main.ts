import { Brand } from "@repo/ui/brand";
import "./style.css";
import typescriptLogo from "/typescript.svg";
import { Counter } from "@repo/ui/counter";
import { setupCounter } from "@repo/ui/setup-counter";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Monorepo Starter</h1>
    <h2>Web</h2>
    <p>Welcome to the monorepo starter web app.</p>
    <ul>
      <li>ExpressJS app (Coming soon)</li>
      <li>hapi.dev app (Coming soon)</li>
      <li>sails.js app (Coming soon)</li>
    </ul>
    <hr />
    <h2>Thanks for visiting</h2>
    <p>This is a vanilla <code>vite</code> + <code>typescript</code> app.</p>
    <h3>Made with ❤️</h3>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    ${Brand({ title: "Sandbox" })}
    <div class="card">
      ${Counter()}
    </div>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
