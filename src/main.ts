

import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import * as hbs from 'hbs';
import * as fs from 'fs';


async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );

  const loadComponents = (pathName: string) => {
    const partialsDir = __dirname + `/../views/${pathName}`;
    const filenames = fs.readdirSync(partialsDir);
    filenames.forEach(function (filename) {
      const matches = /^([^.]+).hbs$/.exec(filename);
      if (!matches) {
        return;
      }
      const name = `${matches[1]}`;
      const template = fs.readFileSync(partialsDir + '/' + filename, 'utf8');
      hbs.registerPartial(name, template);
    });
  };

  hbs.registerHelper("setVar", function(varName, varValue, options) {
    options.data.root[varName] = varValue;
  });

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');

  loadComponents('partials/areas');
  loadComponents('partials/elements');
  loadComponents('partials');

  app.set('view options', { layout: '/partials/index.hbs' });



  await app.listen(3000);
}

bootstrap();



console.log(`


      ### NEST APPLICATION RUNNING ON http://localhost:3000 ###


`);
