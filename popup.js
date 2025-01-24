// Social media links
const links = {
  gmail: "anjal.bij@gmail.com",
  personal_mail: "bijghavaneanjal23@gmail.com",
  linkedin: "https://www.linkedin.com/in/anjal-bijghavane/",
  github: "https://github.com/bijghavaneanjal23",
  huggingface: "https://huggingface.co/proanj",
  leetcode: "https://leetcode.com/u/bijghavaneanjal23/",
  codeforces: "https://codeforces.com/profile/theprokid",
  codechef: "https://www.codechef.com/users/itsanjalb"
};

// Attach event listeners to buttons
document.addEventListener("DOMContentLoaded", () => {
  Object.keys(links).forEach((key) => {
    const button = document.getElementById(key);
    button.addEventListener("click", () => copyToClipboard(links[key]));
    
  });
});

// Function to copy the link to the clipboard
function copyToClipboard(link) {
    navigator.clipboard.writeText(link).catch(err => {
      console.error("Failed to copy: ", err);
    });
  }
  