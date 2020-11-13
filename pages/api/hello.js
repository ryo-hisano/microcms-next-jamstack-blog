export default (req, res) => {
  const now = new Date().toISOString();
  res.status(200).json({
    date: now,
    message: "Hello",
  });
};
