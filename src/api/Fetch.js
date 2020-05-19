const baseApiUri = "https://pixabay.com/api?";
// In plain text because it's a demo
const keyAuth = "&key=16309596-afa5b52eef5e749efb496fa55";

// Only GET case why complicate us ?
async function getData(url) {
  const response = await fetch(baseApiUri + url + keyAuth);

  if (response.status !== 200) {
    return uglyErrorHandler("Unexpected Error");
  }
  const finalResult = await response.json();
  return finalResult;
}

function uglyErrorHandler(message) {
  return {
    status: "error",
    message,
  };
}

// add your method on demand  get, POST, etc 
export default { get: getData };
