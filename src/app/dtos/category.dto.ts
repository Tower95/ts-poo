import { IsNotEmpty, IsUrl, Length, IsEnum, validateOrReject } from 'class-validator';

import { AccessType, Category } from "../models/category.model";


export interface CreateCategoryDto extends Omit<Category, 'id'> { }

export class CreateCategoryDto implements CreateCategoryDto {

  @IsNotEmpty()
  @Length(4, 140)
  public name!: string;

  @IsUrl()
  @IsNotEmpty()
  public image!: string;

  @IsNotEmpty()
  @IsEnum(AccessType)
  public access?: AccessType | undefined;

}

(async () => {
  try {

    const dto = new CreateCategoryDto();
    dto.name = 'aasdf';
    dto.image = 'https://image.com';
    dto.access = AccessType.PRIVATE;
    await validateOrReject(dto);

  } catch (error) {

    console.log(error);
  }
})();
