const User = require("../models/user.js");
const { signup } = require("./user.js");
//signup form render page
module.exports.renderSignupForm = (req, res) => {
  res.render("users/signup.ejs");
};

// Signup Page Route
module.exports.signup = async (req, res) => {
  try {
    let { username, email, password } = req.body;
    const newUser = new User({ email, username });
    const registeredUser = await User.register(newUser, password);
    console.log(registeredUser);
    req.login(registeredUser, (err) => {
      if (err) {
        return next(err);
      }
      req.flash("error", "Welcome to AirBnB");
      res.redirect("/listings");
    });
  } catch (err) {
    req.flash("error", err.message);
    res.redirect("/signup");
  }
};

//login form render page
module.exports.renderLoginForm = (req, res) => {
  res.render("users/login.ejs");
};

// login page route
module.exports.login = async (req, res) => {
  // If this function gets called, authentication was successful.
  req.flash("error", "Welcome To AirBnB , You Are Logged In");
  let redirectUrl = res.locals.redirectUrl || "/listings";
  res.redirect(redirectUrl);
};

// logout middleware
module.exports.logout = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.flash("error", "You Are LogOut Now !");
    res.redirect("/listings");
  });
};
