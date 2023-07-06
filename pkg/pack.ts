// Copies index.html to `html.ts`

const encode = new TextEncoder()
const decode = new TextDecoder()
const targets = ["x86_64-unknown-linux-gnu", "x86_64-pc-windows-msvc", "x86_64-apple-darwin", "aarch64-apple-darwin"]
const html = decode.decode(await Deno.readFile("../dist/index.html"));

Deno.writeFile('./html.ts', new TextEncoder().encode(`export default "data:text/html,${encodeURIComponent(html)}"`));

targets.forEach(async target => {
    console.log(await new Deno.Command("deno", {
        args: [
            "compile",
            "--unstable",
            "-A",
            ...`--target ${target}`.split(' '),
            ...`--output ${target}`.split(' '),
            "main.ts"
        ]
    }).output())
})