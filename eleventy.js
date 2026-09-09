module.exports = function(eleventyConfig) {
  // Tells Eleventy to pass through any CSS/JS assets if you have them later
  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};