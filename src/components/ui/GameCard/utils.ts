export const getPlatformImage = (platform: string) => {
  switch (platform) {
    case "Nintendo Switch":
      return {
        width: 30,
        src: "/platforms/nintendo_switch.webp",
      };
    case "PlayStation 4":
      return { src: "/platforms/playstation_4_.png", width: 90 };
    case "PlayStation 5":
      return { src: "/platforms/playstation_5.png", width: 90 };
    case "Xbox":
    case "Xbox One":
      return { src: "/platforms/xbox_one.png", width: 80 };
    case "Xbox 360":
      return { src: "/platforms/xbox_360.png", width: 90 };
    case "Xbox Series":
    case "Xbox Series X":
    case "Xbox Series S":
      return { src: "/platforms/xbox_series.png", width: 50 };
  }
};
