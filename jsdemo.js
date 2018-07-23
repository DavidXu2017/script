let fs = require('fs')

let dirName = process.argv[2]
let currentPath = process.cwd() + '/' + dirName
if (fs.existsSync(currentPath)) {
    console.log("error: dir exists")
} else {
    fs.mkdirSync("./" + dirName)
    process.chdir("./" + dirName)
    fs.mkdirSync('css')
    fs.mkdirSync('js')
    fs.writeFileSync("./index.html","<!DOCTYPE>\r<title>Hello</title>\r<h1>Hi</h1>")
    fs.writeFileSync("css/style.css", "h1{color: red;}")
    fs.writeFileSync("./js/main.js", "var string = 'Hello World' \r alert(string)")
}
process.exit(0)