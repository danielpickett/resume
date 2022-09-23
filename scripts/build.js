import fs from 'fs'
import * as ReactDOMServer from 'react-dom/server'
import Root from '../build/index.js'

const content = ReactDOMServer.renderToStaticMarkup(Root)

fs.writeFile('./public/index.html', `<!DOCTYPE html>${content}`, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.log('Success')
  }
})
