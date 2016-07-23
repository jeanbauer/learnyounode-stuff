function loadUsers(userIds, load, done) {
  const users = [];
  const count = 0;
  userIds.forEach((id, idx) => {
  	load(id, data => {
  		users[idx] = data;
  		++count;
  		if(count === userIds.length) return done(users);
  	})
  })
}

module.exports = loadUsers;
