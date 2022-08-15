const allStudent = (req, res) => {
  res.send("All Student");
};

const deleteStudent = (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  console.log(id);
  if (id == 10) {
    res.send("Ye Sonam ki ID hai 10 so ye Delete nahi hoga");
  } else {
    res.send(`Student Delete ${id}`);
  }
};
const addStudent = (req, res) => {
  res.send("create and add student");
};

export { allStudent, deleteStudent, addStudent };
// module.exports = {allStudent, deleteStudent}
