import { Webview } from "https://deno.land/x/webview@0.7.5/mod.ts";
import html from "./html.ts";
const view = new Webview();
view.navigate(html);
view.title = "Note Forge"
view.run();