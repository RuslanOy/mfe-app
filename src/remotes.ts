export const initializeRemotes = async () => {
  const isDev = window.location.hostname === 'localhost';
  
  const REMOTE_URLS = {
    header: isDev
      ? 'http://localhost:3001/mfe-header/remoteEntry.js'
      : 'https://ruslanoy.github.io/mfe-header/remoteEntry.js',

    footer: isDev
      ? 'http://localhost:3002/mfe-footer/remoteEntry.js'
      : 'https://ruslanoy.github.io/mfe-footer/remoteEntry.js',
  };

  await Promise.all([
    loadRemote('header', REMOTE_URLS.header),
    loadRemote('footer', REMOTE_URLS.footer),
  ]);
};

const loadRemote = (name: string, url: string) => {
  return new Promise((resolve, reject) => {
    const element = document.createElement('script');
    element.src = url;
    element.type = 'text/javascript';
    element.async = true;

    element.onload = () => {
      console.log(`Remote ${name} loaded`);
      resolve('success');
    };

    element.onerror = () => {
      console.error(`Failed to load remote ${name}`);
      reject();
    };

    document.head.appendChild(element);
  });
};
