const database = require('../database/database');

// comment 가져오기
exports.getTasks = async (req, res) => {
  try {
    const allTasks = await database.query(
      'SELECT * FROM community where write_number=$1'
    );

    return res.status(201).json(allTasks.rows);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
