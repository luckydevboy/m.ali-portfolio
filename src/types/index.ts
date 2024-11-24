import { RootNode } from "@strapi/blocks-react-renderer/dist/BlocksRenderer";

export interface Work {
  id: number;
  documentId: string;
  description: RootNode[];
  title: string;
  date: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  images: Image[];
  localizations: any[];
}

interface Image {
  id: number;
  documentID: string;
  name: string;
  alternativeText: null;
  caption: null;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: EXT;
  mime: MIME;
  size: number;
  url: string;
  previewURL: null;
  provider: string;
  providerMetadata: null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

enum EXT {
  Jpg = ".jpg",
}

interface Formats {
  thumbnail: Size;
  medium: Size;
  small: Size;
  large: Size;
}

interface Size {
  name: string;
  hash: string;
  ext: EXT;
  mime: MIME;
  path: null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}

enum MIME {
  ImageJPEG = "image/jpeg",
}

export interface Response<T> {
  data: T;
  meta: Meta;
}

interface Meta {
  pagination: Pagination;
}

interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
