module.exports = {
  roots: ["./src"],
  transform: {
    "^.+\\.(ts|js)x?$": "ts-jest",
  },
  testPathIgnorePatterns: [
    "/node_modules/(?!@my-cool-package/)",
    "/src/context/__mocks__",
  ],
  testRegex: "(/test/.*|\\.(test|spec))\\.(ts|tsx|js)$",
  modulePaths: ["<rootDir>"],
  moduleFileExtensions: ["ts", "tsx", "js", "json"],
  moduleNameMapper: {
    "^me/(.*)": "<rootDir>/src/me/$1",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/assetsTransformer.js",
    "\\.(css|less)$": "identity-obj-proxy",
    "^@src(.*)$": "<rootDir>/src$1",
  },
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native(-.*)?|@react-native(-community)?|@axios)/)",
  ],
};
