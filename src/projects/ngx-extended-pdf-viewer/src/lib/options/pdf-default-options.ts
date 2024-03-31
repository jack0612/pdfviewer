const _isIE11 = typeof window === 'undefined' ? false : !!(<any>window).MSInputMethodContext && !!(<any>document).documentMode;
const isEdge = typeof navigator === 'undefined' || /Edge\/\d./i.test(navigator.userAgent);
const needsES5 = typeof ReadableStream === 'undefined' || typeof Promise['allSettled'] === 'undefined';

export const pdfjsVersion = '4.0.851';
export const pdfjsBleedingEdgeVersion = '4.1.753';
export function getVersionSuffix(folder: string): string {
  if (folder?.includes('bleeding-edge')) {
    return pdfjsBleedingEdgeVersion;
  }
  return pdfjsVersion;
}

export function assetsUrl(url: string, postfixIfPathIsRelativ = ''): string {
  if (url.includes('://')) {
    // the assets folder is on an absolute path (like https://example.com/assets)
    return url;
  }
  return `./${url + postfixIfPathIsRelativ}`;
}

const AnnotationMode = {
  DISABLE: 0,
  ENABLE: 1,
  ENABLE_FORMS: 2,
  ENABLE_STORAGE: 3,
};

const AnnotationEditorType = {
  DISABLE: -1,
  NONE: 0,
  FREETEXT: 3,
  INK: 15,
};

function getDefaultLanguage(): string {
  if (typeof navigator !== 'undefined') {
    return navigator?.language || 'en-US';
  }
  return 'en-US';
}

export let pdfDefaultOptions = {
  needsES5: _isIE11 || isEdge || needsES5,
  annotationEditorMode: 0,
  annotationMode: 2,
  defaultZoomDelay: 400, // milliseconds
  cursorToolOnLoad: 0,
  defaultUrl: '',
  defaultZoomValue: undefined,
  disableHistory: false,
  disablePageLabels: false,
  enablePermissions: false,
  docBaseUrl: '',
  enablePrintAutoRotate: true,
  externalLinkRel: 'noopener noreferrer nofollow',
  externalLinkTarget: 0,
  historyUpdateUrl: false,
  ignoreDestinationZoom: false,
  imageResourcesPath: './images/',
  maxCanvasPixels: 16777216,
  forcePageColors: false,
  pageColorsBackground: 'Canvas',
  pageColorsForeground: 'CanvasText',
  pdfBugEnabled: false,
  printResolution: 150,
  rangeChunkSize: 65536,
  removePageBorders: false,
  renderer: 'canvas',
  renderForms: true,
  enableXfa: true,
  fontExtraProperties: false,
  sidebarViewOnLoad: -1,
  scrollModeOnLoad: -1,
  spreadModeOnLoad: -1,
  textLayerMode: 1,
  useOnlyCssZoom: false,
  // viewerCssTheme: 0, // not supported by ngx-extended-pdf-viewer
  viewOnLoad: 0,
  cMapPacked: true,
  cMapUrl: () => `${assetsUrl(pdfDefaultOptions.assetsFolder, '/..')}/cmaps/`,
  disableAutoFetch: false,
  disableFontFace: false,
  disableRange: false,
  disableStream: true,
  isEvalSupported: true,
  isOffscreenCanvasSupported: true,
  maxImageSize: -1,
  pdfBug: false,
  postMessageTransfers: true,
  verbosity: 1,
  workerPort: null,
  assetsFolder: 'assets',
  _internalFilenameSuffix: '.min', // don't modify this - it's an internal field
  sandboxBundleSrc: () =>
    pdfDefaultOptions.needsES5
      ? `./pdf.sandbox-${getVersionSuffix(assetsUrl(pdfDefaultOptions.assetsFolder))}-es5${pdfDefaultOptions._internalFilenameSuffix}.mjs`
      : `./pdf.sandbox-${getVersionSuffix(assetsUrl(pdfDefaultOptions.assetsFolder))}${pdfDefaultOptions._internalFilenameSuffix}.mjs`,
  workerSrc: () =>
    pdfDefaultOptions.needsES5
      ? `${assetsUrl(pdfDefaultOptions.assetsFolder)}/pdf.worker-${getVersionSuffix(assetsUrl(pdfDefaultOptions.assetsFolder))}-es5.mjs`
      : `${assetsUrl(pdfDefaultOptions.assetsFolder)}/pdf.worker-${getVersionSuffix(assetsUrl(pdfDefaultOptions.assetsFolder))}.mjs`,
  standardFontDataUrl: () => `${assetsUrl(pdfDefaultOptions.assetsFolder, '/..')}/standard_fonts/`,

   
  doubleTapZoomFactor: 'page-width',
  doubleTapZoomsInHandMode: true,
  doubleTapZoomsInTextSelectionMode: false,
  doubleTapResetsZoomOnSecondDoubleTap: false,
  enableScripting: true,
  defaultCacheSize: 50,
  passwordPrompt: undefined,
  locale: getDefaultLanguage(),
  activateWillReadFrequentlyFlag: false,
};

if (typeof window !== 'undefined') {
  if ((<any>window).pdfDefaultOptions) {
    pdfDefaultOptions = (<any>window).pdfDefaultOptions;
  } else {
    (<any>window).pdfDefaultOptions = pdfDefaultOptions;
  }
}
