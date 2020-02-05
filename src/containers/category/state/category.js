import CategoryMobile from "../../../assets/mobile.json";

// Fake API calls
export const getCategoryList = () => {
  fetch("../../../assets/mobile.json").then(response => {
    if (!response.ok) {
      throw Error(
        `Status: ${response.status}\nStatustext: ${response.statusText}`
      );
    }
    return response.json();
  });
};
