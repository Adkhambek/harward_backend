const { PORT, app } = require("./app");

app.listen(PORT, () =>
  console.log(`server is running on http://localhost:${PORT}`)
);
