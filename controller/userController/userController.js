const loadHomePage = async (req, res) => {
  try {
    res.render("user/home");
  } catch (error) {
    console.error(error);
  }
};
const loadRegisterComplaint = async (req, res) => {
  try {
    res.render("user/register");
  } catch (error) {
    console.error(error);
  }
};

const loadComplaintAnonymous = async (req, res) => {
    try {
      res.render("user/anonymousReg");
    } catch (error) {
      console.error(error);
    }
  };
  const RegisterComplaint=async(req,res)=>{
    try {
      // const {}=req.body
    } catch (error) {
      console.error(error)
    }
  }

module.exports = { loadHomePage, loadRegisterComplaint,loadComplaintAnonymous};
