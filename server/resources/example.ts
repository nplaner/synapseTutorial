@expose("POST /")
  @schema(User.schema.exclude("user_id", "password").extend({ password: new Hash(6) }))
  static async register({ username, password }) {
    const findQuery = `SELECT username FROM users WHERE username = '${username}'`;
    const findResult = await db.query(findQuery);
    if (!findResult.rows[0]) {
      const query = `INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *`;
      const values = [`${username}`, `${password}`];
      const result = await db.query(query, values); 
      const toReturn = await User.create(result.rows[0]);
      return toReturn;
    }
    return State.FORBIDDEN("USERNAME MUST BE UNIQUE");
  }
