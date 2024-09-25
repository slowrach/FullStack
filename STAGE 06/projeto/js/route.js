export class Router {
   routes = {}

   add(name, link) {
      this.routes[name] = link
   }

   route(event) {
      event = event || window.event
      event.preventDefault()
   
      window.history.pushState({}, "", event.target.href)
   
      this.locations()
   }
   
   locations() {
      const { pathname } = window.location
      const route = this.routes[pathname]
   
      fetch(route || routes['/']).then(data => data.text()).then(html => {
         document.querySelector('#app').innerHTML = html
      })
   }
}