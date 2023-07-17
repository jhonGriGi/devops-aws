export interface BaseMapper<TModel, TDto> {
  fromModelToDto: (model: TModel) => TDto
  fromDtoToModel: (dto: TDto) => TModel
}
