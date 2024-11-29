import path from "path";
import { appConfig } from '../app-config';

export function loadResourceJsonFile(filename: string): any {
    return require(path.resolve(`./src/resources/${appConfig.executionEnv}`, filename));
}