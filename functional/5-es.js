// some is analogue to logical or - any
// every is analogue to logical and - all
const checkUsersValid = goodUsers => submittedUsers => submittedUsers.every(sU => goodUsers.some(goodUser => goodUser.id === sU.id));

module.exports = checkUsersValid;
