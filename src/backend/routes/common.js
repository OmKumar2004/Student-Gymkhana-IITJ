const express = require("express")
const log = require("../utils/log")
const teamMemberRoute = require("../controllers/common/team_members")
const storyRoute = require("../controllers/common/stories")
const route = express.Router()

route.use(log)
route.use('/team_members',teamMemberRoute)
route.use('/stories',storyRoute)

module.exports = route