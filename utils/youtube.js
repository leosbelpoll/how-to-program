export const getVideoThumbnailFromEmbedUrl = (embedUrl) => {
  const videoId = embedUrl.split("?")[0].split("/")[4];

  return `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
};
