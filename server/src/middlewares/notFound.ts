import { Request, Response } from "express";

export const notFound = (req: Request, res: Response) => {
  res.status(404).json({ message: "404: Not Found" });
};
