const regModel = require("../Model/user");
const bcrypt = require("bcrypt");

// ================ GET METHOD ====================

const userget = async (req, res) => {
  const data = await regModel.find();
  res.send(data);
};

// ================ POST METHOD ====================

const userpost = async (req, res) => {
  const b_pass = await bcrypt.hash(req.body.password, 10);
  console.log(b_pass);

  const data = await regModel.create({
    name: req.body.name,
    email: req.body.email,
    password: b_pass,
    mobile: req.body.mobile,
    address: req.body.address,
    gender: req.body.gender,
    city: req.body.city,
    pincode: req.body.pincode,
  });

  console.log(data);
  res.send(data);
};

// ================ PUT /UPDATE METHOD ====================

const userput = async (req, res) => {
  const data = await regModel.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    mobile: req.body.mobile,
    address: req.body.address,
    gender: req.body.gender,
    city: req.body.city,
    pincode: req.body.pincode,
  });
  res.send(data);
};

// ================ DELETE METHOD ====================

const userdelete = async (req, res) => {
  const data = await regModel.findByIdAndDelete(req.params.id, {});
  res.send(data);
};

// ================ LOGIN---- POST METHOD ====================

const userlogin = async (req, res) => {
  try {
    const {email,password} = req.body
    // console.log(email,password);

    const user = await regModel.findOne({ email: email });
    const pass = await bcrypt.compare(password,user.password);

    if(user.email === email){
     
        if(pass){
          res.send(user)
          
        }else{
          res.send({message: "password is invalid"})
        }

    }else{
        res.send({message: "email is invalid"})
    }
    // res.send(user);
  } catch (error) {
    res.send({message: "email and password is invalid"})
  }
};

module.exports = {
  userget,
  userpost,
  userput,
  userdelete,
  userlogin,
};
