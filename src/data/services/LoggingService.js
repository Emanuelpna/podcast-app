export class LoggingService {
  static log(...messages) {
    this.#sendLogToConsole('log', ...messages)
  }

  static warn(...messages) {
    this.#sendLogToConsole('warn', ...messages)
  }

  static error(...messages) {
    this.#sendLogToConsole('error', ...messages)
  }

  static #sendLogToConsole(logType, ...messages) {
    const loggers = {
      log: console.log,
      warn: console.warn,
      error: console.error,
    }

    /**
     * Multiples Console.log can slow down too much a code because of it's synchronous nature
     * Places like the PodcastChannel fetch that checks all episodos to save has multiple logs to show the steps completion
     * Making it log inside a setTimeout with 0 miliseconds makes it send the function to the next place on the queue but without interrupting the main thread
     *
     * Basically, it will fire as soon as the main thread is empty.
     * It's a cheap way to create asynchronous code (don't use this with critical code)
     *
     * Check link below for a visual example of this:
     * https://www.jsv9000.app/?code=ZnVuY3Rpb24gbG9nKG1lc3NhZ2UpIHsKICBmdW5jdGlvbiBsb2dJblNldFRpbWVvdXQoKSB7CiAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTsKICB9CiAgCiAgc2V0VGltZW91dChsb2dJblNldFRpbWVvdXQsIDApCn0KCmZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCA0OyBpbmRleCsrKSB7CiAgbG9nKGBsb2cgY29tIHNldFRpbWVvdXQ6ICR7aW5kZXggKyAxfWApCiAgCiAgY29uc29sZS5sb2coYGxvZyBjb20gY29uc29sZTogJHtpbmRleCArIDF9YCkKfQ%3D%3D
     */
    setTimeout(() => {
      loggers[logType]?.(...messages)
    }, 0)
  }
}
