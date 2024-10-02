export class Router {
   routes = {}

   add(name, url) {
      this.routes[name] = url
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
   
      if (!route) return
   
      fetch(route).then(data => data.text()).then(text => {
         document.querySelector('#page').innerHTML = text
      })
   }
}