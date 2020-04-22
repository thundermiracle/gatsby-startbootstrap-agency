export default (str) => {
  if (typeof str !== "string") {
    str = str.toString();
  }

  return str.replace(/\r\n/g, "<br />").replace(/\n|\r/g, "<br />");
};
