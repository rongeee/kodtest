export const getCategoryList = async () => {
  let data = await require("../../../assets/mobile.json");
  return await data;
};
