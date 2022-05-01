"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
let port = process.env.PORT || app_1.default.PORT;
app_1.default.server.listen(port, function () {
    console.log(`server running in" + ${port}`);
});
