module.exports = {
  stripAtSign: str => {
    str = str.trim();
    str = str[0] === "@" ? str.substring(1, str.length) : str;
    return str;
  }
};
