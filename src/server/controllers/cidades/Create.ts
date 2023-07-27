import { Request, Response } from "express";

interface ICidade {
  nome: string;
}

export function create(req: Request<unknown, unknown, ICidade>, res: Response) {
  const data = req.body;

  console.log(data);

  return res.send("Create");
}
