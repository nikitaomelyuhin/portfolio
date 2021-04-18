import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/skills";
import "./scripts/hamburger";
import "./scripts/works";
import "./scripts/reviews";
import "./scripts/anchorlink";
import "./admin/main.js";