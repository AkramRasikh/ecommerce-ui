export const getDataAPI = async () => {
  try {
    const res = await fetch(`${process.env.REACT_APP_ENDPOINT}/data`);
    return res.json();
  } catch (error) {
    throw "Something has gone wrong. Try again 🤕!";
  }
};
