import * as fs from 'fs';
import * as util from 'util';

export const STATUS_OK = "STATUS_OK";
export const STATUS_FAILED = "STATUS_FAILED";

export const CALL_PAGE_FACTORY = "CALL_PAGE_FACTORY";
export const CALL_AREA_FACTORY = "CALL_AREA_FACTORY";
export const CALL_ELEMENT_FACTORY = "CALL_ELEMENT_FACTORY";

export const Log = (error: string) => {
  const logFile = fs.createWriteStream('./logs/failures.log');
  const stdout = process.stdout;
  logFile.write(new Date() + ' : ' + util.format(error) + '\n');
  stdout.write(new Date() + ' : ' + util.format(error) + '\n');
};
