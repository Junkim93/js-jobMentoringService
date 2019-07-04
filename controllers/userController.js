export const home = (req, res) => res.render("home");

export const getSearch = (req, res) => {
  const {
    query: { term: searchingBy }
  } = req;
  res.render("search", { pageTitle: "Search", searchingBy });
};

export const getJoin = (req, res) => res.send("Welcome, Join page");

export const getLogin = (req, res) => res.send("login plz");

export const getLogout = (req, res) => res.send("bye, friend");

export const getUsers = (req, res) => res.send("user page");

export const getEditProfile = (req, res) => res.send("Edit your profile");