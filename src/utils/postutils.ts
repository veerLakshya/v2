export const getPostColorFromCategory = (category: string) => {
  switch (category) {
    case "Sustainibility":
      return "lime";
    case "Innovation":
      return "cyan";
    case "Security":
      return "violet";
    default:
      return "fuchsia";
  }
};
