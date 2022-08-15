const homeController = (req, res) => {
 res.render('index', { 'title': 'Home' })
}

export { homeController }