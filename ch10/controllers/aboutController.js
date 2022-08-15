import { join } from 'path'
const aboutController = (req, res) => {
 // res.send('<h1>About Page</h1>')
 // res.sendFile('c:\\expressjs\\ch10\\views\\about.html')
 console.log(join(process.cwd(), 'views', 'about.html'))
 res.sendFile(join(process.cwd(), 'views', 'about.html'))
}

export { aboutController }