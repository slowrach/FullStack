import { Router } from "./route.js"

const router = new Router()

router.add("/", "/pages/home.html")
router.add("/noticias", "/pages/noticias.html")
router.add("/curiosidades", "/pages/curiosidades.html")
router.add("/video", "/pages/video.html")
router.add("/contato", "/pages/contato.html")

router.locations()

window.onpopstate = () => router.locations()
window.route = () => router.route()