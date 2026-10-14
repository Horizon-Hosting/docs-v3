// @ts-nocheck
/// <reference types="vite/client" />
import { dynamic } from 'fumadocs-mdx/runtime/dynamic';
import * as Config from '../source.config';

const create = await dynamic<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>(Config, {"configPath":"/home/hayden1321/Developer/docs-v3/source.config.ts","environment":"vite","outDir":"/home/hayden1321/Developer/docs-v3/.source"}, {"doc":{"passthroughs":["extractedReferences"]}});