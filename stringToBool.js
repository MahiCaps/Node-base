const strConvert = (string) => {
  //   return typeof string === "number" ? string :
  console.log(string && (Number(string) || string.toLowerCase().trim()));
  switch (
    string &&
    (typeof string == "number" ? string : string.toLowerCase().trim())
  ) {
    case "true":
    case "yes":
    case "1":
      return true;

    case "false":
    case "no":
    case "0":
    case null:
    case undefined:
      return false;

    default:
      return string;
  }
};

console.log(strConvert("1"));
