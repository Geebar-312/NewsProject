/*
 * @Author: Geebar_312 3399457143@qq.com
 * @Date: 2024-04-20 00:13:08
 * @LastEditors: Geebar_312 3399457143@qq.com
 * @LastEditTime: 2024-04-24 15:26:31
 * @FilePath: \newsproject\server\controllers\admin\UserController.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const UserService = require("../../services/admin/UserService")
const JWT = require("../../util/JWT")

const UserController = {
    login: async (req, res) => {
        var result = await UserService.login(req.body)

        if (result.length === 0) {
            res.send({
                code: "-1",
                error: "用户名密码不匹配"
            })
        } else {
            //生成token
            const token = JWT.generate({
                _id: result[0]._id,
                username: result[0].username
            }, "1d")

            res.header("Authorization", token)
            res.send({
                ActionType: "OK",
                data: {
                    username: result[0].username,
                    gender: result[0].gender ? result[0].gender : 0,
                    introduction: result[0].introduction,
                    avatar: result[0].avatar,
                    role: result[0].role
                }
            })
        }

    }
}

module.exports = UserController