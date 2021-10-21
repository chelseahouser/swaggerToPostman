import {Module} from '@nestjs/common';
import {SwaggerToPostmanModule} from './swaggerToPostman/swaggerToPostman.module';

@Module({
  imports: [SwaggerToPostmanModule],
})
export class AppModule {}
