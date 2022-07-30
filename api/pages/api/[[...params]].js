export default function handler(req, res) {
  const { params } = req.query;
  console.log(req.query);
  res.status(200).json(params);
}
