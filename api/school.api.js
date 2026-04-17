const db = require("../config/db");
async function addSchool(req, res) {
  const { name, address, latitude, longitude } = req.body;

  if (!name || !address || latitude == null || longitude == null) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const sql = `
    INSERT INTO schools (name, address, latitude, longitude)
    VALUES (?, ?, ?, ?)
  `;

  db.query(sql, [name, address, latitude, longitude], (err, result) => {
    if (err) return res.status(500).json({ message: err });

    res
      .status(201)
      .json({ message: "School added successfully"});
  });
}

async function fetchSchoolList(req, res) {
  const { latitude, longitude } = req.query;

  if (!latitude || !longitude) {
    return res
      .status(400)
      .json({ message: "Latitude & Longitude is required" });
  }

  const lat = parseFloat(latitude);
  const long = parseFloat(longitude);

  const sql = `
    SELECT *,
    (6371 * ACOS(
      COS(RADIANS(?)) * COS(RADIANS(latitude)) *
      COS(RADIANS(longitude) - RADIANS(?)) +
      SIN(RADIANS(?)) * SIN(RADIANS(latitude))
    )) AS distance
    FROM schools
    ORDER BY distance ASC
  `;

  db.query(sql, [lat, long, lat], (err, results) => {
    if (err) return res.status(500).json({ message: err });

    res.json(results);
  });
}

module.exports = {
  addSchool,
  fetchSchoolList,
};
