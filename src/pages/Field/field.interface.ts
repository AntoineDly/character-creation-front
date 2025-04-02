import { TypeParameterEnum } from '@/pages/Parameter/parameter.enum'
import { TypeFieldEnum } from '@/pages/Field/field.enum'

export interface FieldDtoInterface {
  id: string
  parameterId: string
  name: string
  value: string
  typeParameterEnum: TypeParameterEnum
  typeFieldEnum: TypeFieldEnum
}
