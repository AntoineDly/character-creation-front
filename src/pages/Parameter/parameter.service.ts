import { authenticatedAxiosInstance } from "@/config/axios";
import {
  CreateParameterFormInterface,
  ParameterDtoInterface,
} from "./parameter.interface";

async function getParameters(): Promise<ParameterDtoInterface[]> {
  const response = await authenticatedAxiosInstance.get("/parameters");
  return response.data.data;
}

async function createParameter(
  data: CreateParameterFormInterface,
): Promise<void> {
  await authenticatedAxiosInstance.post("/parameters", data);
}

export { getParameters, createParameter };
