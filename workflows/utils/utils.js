module.exports = {
  async wait(time = 0) {
    return new Promise(resolve => setTimeout(resolve, time));
  },
  randomRangeNumber(start = 500, end = 1000) {
    return (Math.random() * (end - start) + start) >> 0;
  },
  /**
   * 清理cookie中的无效字符（如换行符、回车符、制表符等）
   * @param {string} cookie
   * @returns {string}
   */
  sanitizeCookie(cookie) {
    if (!cookie) return cookie;
    // 移除换行符、回车符、制表符等无效字符
    return cookie.replace(/[\r\n\t]/g, '').trim();
  },
  getUsersCookie(env) {
    const users = [env.COOKIE];

    const keys = Object.keys(env).filter(key => key.match(/^COOKIE_([0-9])+$/));
    keys.forEach(key => users.push(env[key]));

    return users.filter(cookie => !!cookie).map(cookie => this.sanitizeCookie(cookie));
  }
};
