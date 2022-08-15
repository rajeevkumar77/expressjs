const homeController = (req, res) => {
 res.render('index', { 'name': 'Sonam' })
}

export { homeController }