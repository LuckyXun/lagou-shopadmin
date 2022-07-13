import { utils, writeFile, BookType } from 'xlsx'

export const jsonToExcel = (
  options: {
        data:any[],
        fileName:string,
        bookType:BookType,
        header:Record<string, string>
    }
) => {
  const wb = utils.book_new()
  if (options.header) {
    options.data = options.data.map(item => {
      const obj: Record<string, any> = {}
      for (const key in item) {
        if (options.header[key]) {
          obj[options.header[key]] = item[key]
        } else {
          obj[key] = item[key]
        }
      }
      return obj
    })
  }
  const ws = utils.json_to_sheet(options.data)
  utils.book_append_sheet(wb, ws)
  writeFile(wb, options.fileName, {
    bookType: options.bookType || 'xlsx'
  })
}
