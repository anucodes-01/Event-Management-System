const express = require('express');
const path = require('path');
const app = express();

// Serve all static files in current folder (like index.html, CSS, images)
app.use(express.static(__dirname));

const PORT = 3030; // You can use any free port
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
});
 
