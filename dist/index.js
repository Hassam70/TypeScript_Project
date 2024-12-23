"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_service_1 = require("./services/user.service");
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
// const unauthorized: boolean = false;
// app.use((req: Request, res: Response, next: NextFunction) => {
//   if (unauthorized) {
//     res.status(403).json({
//       error: true,
//       message: "You are not authorized",
//     });
//   }
//   next();
// });
app.get("/", (req, res) => {
    res.status(200).json({
        succes: "OK",
        message: "HS Bank Server is running",
    });
});
app.post("/login", (req, res) => {
    console.log(req.body);
    const auth = (0, user_service_1.authenticateUser)({
        email: req.body.email,
        password: req.body.password,
    });
    res.status(200).json({
        auth,
        message: "User is logged in",
    });
});
app.get("/", (req, res) => {
    res.status(200).json({
        succes: "Ok",
        message: "HS BANK is open",
    });
});
app.listen(port, () => {
    console.log(`THIS SERVER STARTED LISTENING ON PORT: ${port}`);
});
