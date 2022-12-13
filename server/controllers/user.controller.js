exports.allAccess = (req, res) => {
  res.status(200).send("Public Visualizations");
};

exports.userBoard = (req, res) => {
  res.status(200).send("Your Visualizations");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin board");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator board");
};
