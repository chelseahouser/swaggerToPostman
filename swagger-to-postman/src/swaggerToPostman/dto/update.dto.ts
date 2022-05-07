import { ApiProperty } from '@nestjs/swagger';
import { CreateCollection } from './create.dto';

export class UpdateCollection extends CreateCollection {
  @ApiProperty({
    type: 'string',
    description: 'The id of the existing collection to update.',
  })
  collectionId: string;
}
