import { Injectable } from '@nestjs/common';
import { STATUS_FAILED, STATUS_OK } from '../_utilities/constants.class';
import { IDatabaseQueryResolution } from '../_interfaces/IDatabaserQueryResolution.interface';
import * as fs from 'fs';

@Injectable()
export class FileService {


  static queryDb(dbFileString: string): any {
    return new Promise<IDatabaseQueryResolution>((resolve, reject) => {
      try {
        const file: any = fs.readFileSync(`database/${dbFileString}.json`);
        resolve(
          {
            status: STATUS_OK,
            payload: JSON.parse(file),
          },
        );
      } catch (error) {
        reject({
          status: STATUS_FAILED,
          payload: `There was a problem querying the database. ${error}`,
        });
      }
    });
  }

  static updateDb(dbFileString: string, payload: any): any {
    return new Promise<IDatabaseQueryResolution>((resolve, reject) => {
      const prepareDataForStorage = incomingData => JSON.stringify(incomingData);
      fs.writeFile(`database/${dbFileString}.json`, prepareDataForStorage(payload), (err) => {
        if (err) {
          reject({
            status: STATUS_FAILED,
            payload: `Data writing FAILED. Error report: ${err}`,
          });
        }
        resolve({
          status: STATUS_OK,
          payload: 'Data written to file.',
        });
      });
    });
  }

}
