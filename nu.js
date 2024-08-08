// Define a warning function (assuming it's not defined elsewhere)
const df = {
  warn: function(message) {
    console.warn(message);
  }
};

// Example domain array which might be used in a log scale
let domain = [0, 10, 100];

// Check if the domain includes zero and log a warning if true
if (domain.includes(0)) {
  df.warn(`Log scale domain includes zero: ${domain}`);
}
