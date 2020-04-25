import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScriptLoaderService {
  static loadScript(url: string): Promise<boolean> {
    return new Promise((resolve) => {
      let isFound = false;
      const scripts = Array.from(document.getElementsByTagName('script'));
      for (const script of scripts) {
        if (script.getAttribute('src') != null && script.getAttribute('src').includes('loader')) {
          isFound = true;
        }
      }

      if (!isFound) {
        const dynamicScripts = [url];

        for (const dynamicScript of dynamicScripts) {
          const node = document.createElement('script');
          node.src = dynamicScript;
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
