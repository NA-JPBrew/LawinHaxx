const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const file = "./Config/config.ini"
rl.question("ユーザーネームの文字列を入力してください: ", (toStr) => {
    try {
        let text = fs.readFileSync(file, "utf8");
        let replaced = text.replace(new RegExp("好きな名前に変更してください", "g"), toStr);
        fs.writeFileSync(file, replaced, "utf8");
        console.log(`✅ ディスプレイネームを "${toStr}" に書き換えました！`);
    } catch (err) {
        console.error("❌ エラー:", err.message);
    }
    rl.close();
});

