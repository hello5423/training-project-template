const ready = (fn: () => void) => {
  if (document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
};

// convert string to JSON and vice versa
const convertToJSON = <T>(json: string): T => {
  return JSON.parse(json);
};

const convertToJSONString = <T>(obj: T): string => {
  return JSON.stringify(obj);
};

const convertToDateFormat = (input: Date): string => {
  const date = new Date(input);
  // convert to format: hh/mm/ss dd/mm/yyyy
  return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${date.getDay()}/${date.getMonth() +
    1}/${date.getFullYear()}`;
};

export { convertToJSON, convertToJSONString, convertToDateFormat };

export default ready;
