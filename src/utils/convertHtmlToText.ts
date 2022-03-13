const convertHtmlToText = (html: string) => {
  return html.replace(/<\/?[^>]+(>|$)/g, "");
};
export default convertHtmlToText;
