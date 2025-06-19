import { TypeFieldEnum } from '@/components/Field/field.enum'
import { TypeParameterEnum } from '@/pages/Parameter/parameter.enum'

export interface FieldDtoInterface {
  id: string
  parameterId: string
  name: string
  value: string
  typeParameterEnum: TypeParameterEnum
  typeFieldEnum: TypeFieldEnum
}
