import fs from 'fs'

export default (json, filename) => {
  if (process.env.WRITEJSON !== 'true') return

  // 檢查有沒有資料夾
  const exists = fs.existsSync('./dump')
  // 如果沒有資料夾，建立一個資料夾
  if (!exists) {
    fs.mkdirSync('./dump')
  }
  fs.writeFileSync(`./dump/${filename}.json`, JSON.stringify(json, null, 2))
}
