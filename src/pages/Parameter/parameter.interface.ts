import { TypeParameterEnum } from "@/pages/Parameter/parameter.enum";

export interface ParameterDtoInterface {
  id: string;
  name: string;
  type: TypeParameterEnum;
}

export interface CreateParameterFormInterface {
  name: string;
  type: TypeParameterEnum;
}
