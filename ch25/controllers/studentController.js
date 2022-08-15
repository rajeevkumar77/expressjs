class StudentController {
  static session_example = (req, res) =>{
    req.session.device = "Mobile"
    if(req.session.count){
      req.session.count++
    } else {
      req.session.count = 1
    }
    res.send(`Count: ${req.session.count}`)
  }

  static get_session_data = (req, res) =>{
    if(req.session.device){
      res.send(`Device: ${req.session.device} Count: ${req.session.count}`)
    } else{
      res.send("Session Data Device not found")
    }
  }
}

export default StudentController