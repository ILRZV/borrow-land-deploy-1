const { Reply, User, Request } = require("../models");
const { DAOError } = require("../error/DAOError");

class ReplyDataAccess {
  createReply(text, telegram, viber, whatsapp, facebook, vkontakte, userId, requestId) {
    return Reply.create({ 
        text,
        telegram, 
        viber, 
        whatsapp, 
        facebook, 
        vkontakte,
        UserId: userId,
        RequestId: requestId
     });
  }

  async findReplyById(id) {
    const reply = await Reply.findOne({
      where: {
        id,
      },
    });
    if (!reply) throw DAOError.notFound("There is no such reply");
    return reply;
  }

  getMyReplies(id, offset, limit) {
    return Reply.findAndCountAll({
      where: {
         UserId: id, 
      },
      include: {
        model: Request,
        include: {
          model: User,
          attributes: { exclude: ['password', 'role', 'verificationCode', 'createdAt', 'updatedAt'] }
        }
      },
      offset,
      limit
    })
  }

  async deleteReplyById(id) {
    const reply = await Reply.destroy({
      where: {
        id,
      },
    });
    if (!reply) throw DAOError.notFound("There is no such reply");
    return reply;
  }
  
  findReply(requestId, userId) {
    const reply = Reply.findOne({
      where: {
        RequestId: requestId,
        UserId: userId
      },
    });
    return reply;
  }

  getRepliesForRequest(requestId, offset, limit) {
    return Reply.findAll({
      where: {
        RequestId: requestId
      },
      include: [{
        model: Request,
      }, {
        model: User,
        attributes: { exclude: ['password', 'role', 'verificationCode', 'createdAt', 'updatedAt'] }
      }],
      offset,
      limit
    })
  }
}

module.exports = new ReplyDataAccess();
