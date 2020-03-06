import { Module } from '@nestjs/common';
import { MainController } from './_controllers/main.controller';
import { AdminController } from './_controllers/admin.controller';
import { AppService } from './_services/app.service';
import { FileService } from './_services/file.service';
import { PageFactory } from './_factories/page.factory';
import { ContactPageFactory } from './_factories/_page-factories/contactpage.factory';
import { FeaturedPageFactory } from './_factories/_page-factories/featuredpage.factory';
import { LandingPageFactory } from './_factories/_page-factories/landingpage.factory';
import { NewsPageFactory } from './_factories/_page-factories/newspage.factory';
import { StandardPageFactory } from './_factories/_page-factories/standardpage.factory';

@Module({
  imports: [PageFactory,
    ContactPageFactory,
    FeaturedPageFactory,
    LandingPageFactory,
    NewsPageFactory,
    StandardPageFactory],
  controllers: [
    MainController,
    AdminController,
  ],
  providers: [AppService,
    FileService],
})
export class AppModule {
}
