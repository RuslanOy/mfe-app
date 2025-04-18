interface RemoteConfig {
  devUrl: string;
  prodUrl: string;
}

const REMOTE_CONFIGS: Record<string, RemoteConfig> = {
  header: {
    devUrl: 'http://localhost:3001/mfe-header/remoteEntry.js',
    prodUrl: 'https://ruslanoy.github.io/mfe-header/remoteEntry.js',
  },
  footer: {
    devUrl: 'http://localhost:3002/mfe-footer/remoteEntry.js',
    prodUrl: 'https://ruslanoy.github.io/mfe-footer/remoteEntry.js',
  },
};

export const initializeRemotes = async () => {
  const isProd = process.env.NODE_ENV === 'production';

  await Promise.all(
    Object.entries(REMOTE_CONFIGS).map(([name, urls]) =>
      loadRemote(name, isProd ? urls.prodUrl : urls.devUrl)
    )
  );
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
