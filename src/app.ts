import { PLATFORM } from 'aurelia-pal';
import { RouterConfiguration, Router } from "aurelia-router";

export class App {
  message = 'Hello World!';

  configureRouter(config: RouterConfiguration, router: Router) {
    config.options.pushState = true;

    config.map([
      { route: ['', 'popular'], name: 'popular', title: 'Popular movies', moduleId: PLATFORM.moduleName('pages/popularmovies'), nav: true },
    ]);
  }
}
