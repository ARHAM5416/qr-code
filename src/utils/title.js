const appName = 'Sohail';

const helper = {
  setSubtitle: (subtitle) => {
    document.title = `${appName} • ${subtitle}`;
  },
};

export default helper;
