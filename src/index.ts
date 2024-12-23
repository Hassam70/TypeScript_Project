import express, { Request, Response, NextFunction } from "express";
import { ILoginBody } from "./dto";
import { authenticateUser } from "./services/user.service";

const app = express();
const port = 3000;

app.use(express.json());

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

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    succes: "OK",
    message: "HS Bank Server is running",
  });
});

app.post("/login", (req: Request<{}, {}, ILoginBody>, res: Response) => {
  console.log(req.body);
  const auth = authenticateUser({
    email: req.body.email,
    password: req.body.password,
  });
  res.status(200).json({
    auth,
    message: "User is logged in",
  });
});

app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        succes: "Ok",
        message: "HS BANK is open",
    });
});

app.listen(port, () => {
  console.log(`THIS SERVER STARTED LISTENING ON PORT: ${port}`);
});
