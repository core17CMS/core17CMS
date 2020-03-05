import { Module } from '@nestjs/common';
import { AppController } from './_controllers/app.controller';
import { AdminController } from './_controllers/admin.controller';
import { AppService } from './_services/app.service';
import { FileService } from './_services/file.service';
import { PageFactory } from './_factories/page.factory';
import { ContactPageFactory } from './_factories/contactpage.factory';
import { FeaturedPageFactory } from './_factories/featuredpage.factory';
import { LandingPageFactory } from './_factories/landingpage.factory';
import { NewsPageFactory } from './_factories/newspage.factory';
import { StandardPageFactory } from './_factories/standardpage.factory';

@Module({
  imports: [PageFactory,
    ContactPageFactory,
    FeaturedPageFactory,
    LandingPageFactory,
    NewsPageFactory,
    StandardPageFactory],
  controllers: [
    AppController,
    AdminController,
  ],
  providers: [AppService,
    FileService],
})
export class AppModule {
}
