const baseAPIPixabay = "https://pixabay.com/api?";
const baseAPICocktailDB = "https://www.thecocktaildb.com/api/json/v1/1";

// In plain text because it's a demo
const keyAuth = "&key=16309596-afa5b52eef5e749efb496fa55";

// Only GET case why complicate us ?
const getPixabayData = async (url) => {
  const response = await fetch(baseAPIPixabay + url + keyAuth);

  if (response.status !== 200) {
    return uglyErrorHandler("Unexpected Error");
  }
  const finalResult = await response.json();
  return finalResult;
};

const getCocktaildbData = async (url) => {
  const response = await fetch(baseAPICocktailDB + url);

  if (response.status !== 200) {
    return uglyErrorHandler("Unexpected Error");
  }
  const finalResult = await response.json();
  return finalResult;
};

function uglyErrorHandler(message) {
  return {
    status: "error",
    message,
  };
}

// add your method on demand  get, POST, etc
export default { get: getPixabayData, cockTaildbApi: getCocktaildbData };
