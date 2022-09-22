import './polyfills';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { preInitApp } from '@eui/core';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

preInitApp(environment).then(() => platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
      // Ensure Angular destroys itself on hot reloads.
      if (window['ngRef']) {
        window['ngRef'].destroy();
      }
      window['ngRef'] = ref;

      // Otherwise, log the boot error
    }).catch(err => console.error(err))
);
