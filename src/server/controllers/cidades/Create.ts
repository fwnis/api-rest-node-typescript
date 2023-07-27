import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";

interface ICidade {
  nome: string;
}

const bodyValidation: yup.ObjectSchema<ICidade> = yup.object().shape({
  nome: yup.string().required().min(3),
});

export async function create(
  req: Request<unknown, unknown, ICidade>,
  res: Response
) {
  let validateData: ICidade | undefined = undefined;
  try {
    validateData = await bodyValidation.validate(req.body);
  } catch (error) {
    const yupError = error as yup.ValidationError;

    return res.json({
      errors: {
        default: yupError.message,
      },
    });
  }
  console.log(validateData);

  return res.send("Create");
}
