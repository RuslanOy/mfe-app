export const initializeRemotes = async () => {
  const isLocal = window.location.host.includes('localhost');
  
  const REMOTES = {
    header: isLocal 
      ? 'http://localhost:3001/remoteEntry.js'
      : '/mfe-header/remoteEntry.js',
    footer: isLocal
      ? 'http://localhost:3002/remoteEntry.js'
      : '/mfe-footer/remoteEntry.js'
  };

  try {
    await Promise.all([
      loadScript('header', REMOTES.header),
      loadScript('footer', REMOTES.footer)
    ]);
    console.log('All remotes loaded successfully');
  } catch (error) {
    console.error('Remote loading failed:', error);
  }
};

const loadScript = (name: string, url: string) => new Promise((resolve, reject) => {
  if (document.querySelector(`script[src="${url}"]`)) return resolve('success');

  const script = document.createElement('script');
  script.src = url;
  script.onload = resolve;
  script.onerror = () => reject(new Error(`Failed to load ${name}`));
  document.head.appendChild(script);
});