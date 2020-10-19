import loadSprite from './sprite';

export default function (mapbox, baseUrl, options = {}) {
  const opts = { update: false, ...options };
  return loadSprite(baseUrl)
    .then((sprite) => {
      for (const id in sprite) {
        const { data, ...options } = sprite[id];
        if (!mapbox.hasImage(id)) {
          mapbox.addImage(id, data, options);
        } else if (opts.update) {
          mapbox.updateImage(id, data);
        }
      }
      return sprite;
    });
}
