const homeController = (req, res) => {
  // res.render('index', { 'name': 'sonam' })
  const data = {
    name: "Rajeev",
    id: 21,
    marks: [40, 60, 80, 70, 20],
  };
  res.render("index", data);
};

export { homeController };
