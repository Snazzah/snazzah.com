import { getFiles, setupPrecaching, setupRouting } from 'preact-cli/sw/';

setupRouting();
setupPrecaching(
  getFiles().map((file) => {
    if (file.url.startsWith('/assets/')) file.url = file.url.slice(8);
  })
);
