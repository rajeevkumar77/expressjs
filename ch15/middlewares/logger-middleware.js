var myLogger = (req, res, next) => {
 console.log("Logged")
 next()
}

export default myLogger