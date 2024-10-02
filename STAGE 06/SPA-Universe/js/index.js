import { Router } from "./routes.js"

const router = new Router()

router.add("/", "/pages/home.html")
router.add("/index.html", "/pages/home.html")
router.add("/universo", "/pages/universo.html")
router.add("/exploracao", "/pages/exploracao.html")

router.locations()

window.onpopstate = () => router.locations()
window.route = () => router.route()