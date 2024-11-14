const express = require("express")
const log = require("../utils/log")
const teamMemberRoute = require("../controllers/common/team_members")
const storyRoute = require("../controllers/common/stories")
const eventRoute = require("../controllers/common/events")
const feedBackRoute = require("../controllers/common/feedback")
const route = express.Router()

route.use(log)
route.use('/team_members',teamMemberRoute)
route.use('/stories',storyRoute)
route.use('/events',eventRoute)
route.use('/feedback',feedBackRoute)

module.exports = route