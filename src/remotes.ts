export const initializeRemotes = async () => {
  await Promise.all([
    loadRemote('header', process.env.HEADER_REMOTE_URL as string),
    loadRemote('footer', process.env.FOOTER_REMOTE_URL as string),
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
