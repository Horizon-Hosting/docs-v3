// @ts-nocheck
/// <reference types="vite/client" />
import { dynamic } from 'fumadocs-mdx/runtime/dynamic';
import * as Config from '../source.config';

const create = await dynamic<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>(Config, {"configPath":"/Users/hayden1321/Developer/horizon/docs/source.config.ts","environment":"vite","outDir":"/Users/hayden1321/Developer/horizon/docs/.source"}, {"doc":{"passthroughs":["extractedReferences"]}});