module.exports = {
  stripAtSign: str => {
    str = str.toString().trim();
    str = str[0] === "@" ? str.substring(1, str.length) : str;
    return str;
  }
};
