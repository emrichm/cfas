import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScriptLoaderService {
  static loadScript(url: string): Promise<boolean> {
    return new Promise((resolve) => {
      var isFound = false;
      var scripts = document.getElementsByTagName('script')
      for (var i = 0; i < scripts.length; ++i) {
        if (scripts[i].getAttribute('src') != null && scripts[i].getAttribute('src').includes('loader')) {
          isFound = true;
        }
      }

      if (!isFound) {
        const dynamicScripts = [url];

        for (var i = 0; i < dynamicScripts.length; i++) {
          const node = document.createElement('script');
          node.src = dynamicScripts[i];
          node.type = 'text/javascript';
          node.async = true;
          node.defer = true;
          document.getElementsByTagName('head')[0].appendChild(node);
        }

      }
      resolve(true);
    });
  }
}
