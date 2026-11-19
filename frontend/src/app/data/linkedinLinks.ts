// Pairs a Blogger article with its LinkedIn article, for posts that do NOT yet have the LinkedIn link inside them.
// For new posts you do not need this file: if the Blogger post itself contains a link to the LinkedIn article
// (for example "Read on LinkedIn: https://www.linkedin.com/pulse/..."), the website finds it automatically.
//
// Format:  "<Blogger article address>": "<LinkedIn article address>",
export const linkedinLinks: Record<string, string> = {
  "https://theacesjournal.blogspot.com/2026/10/an-educator-does-five-jobs-how-many-are.html":
    "https://www.linkedin.com/pulse/educator-does-five-jobs-how-many-you-yywqf/",
};
