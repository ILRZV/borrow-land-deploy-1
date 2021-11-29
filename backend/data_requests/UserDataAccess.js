const { User } = require("../models");
const { DAOError } = require("../error/DAOError");

class UserDataAccess {
    async findUserByEmail(email) {
        const user = await User.findOne({
          where: {
            email,
          },
        });
        if (!user) throw DAOError.notFound("There is no user with this email");
        return user;
      }

      async findUserById(id) {
        const user = await User.findOne({
          where: {
            id,
          },
        });
        if (!user) throw DAOError.notFound("There is no user with this id");
        return user;
      }

      findAllUsers() {
        return User.findAll();
      }
      
      createUser(name, email, password, phone) {
        return User.create({ name, email, password, phone });
      }
}

module.exports = new UserDataAccess;
