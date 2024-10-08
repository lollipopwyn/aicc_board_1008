const database = require('../database/database');
// const { v4: uuid4 } = require('uuid');

// comment post
exports.postTasks = async (req, res) => {
  try {
    const values = [
      req.body.key,
      req.body.date,
      req.body.description,
      req.body.userId,
    ];
    await database.query(
      'INSERT INTO agreement(user_key, date,description,userId) values($1,$2,$3,$4)',

      values
    );

    return res.status(201).json({ message: 'Agreement post successfully' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
