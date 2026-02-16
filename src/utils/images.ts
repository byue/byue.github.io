type ResponsiveImageOptions = {
  sizes: string;
  widths: number[];
  defaultWidth?: number;
  quality?: number;
};

type ResponsiveImageProps = {
  src: string;
  srcSet?: string;
  sizes?: string;
};

const UNSPLASH_HOST_SUFFIX = ".unsplash.com";
const DEFAULT_QUALITY = 68;

const sortUniqueWidths = (widths: number[]) =>
  Array.from(new Set(widths.filter((width) => Number.isFinite(width) && width > 0).map((width) => Math.round(width))))
    .sort((first, second) => first - second);

const getUnsplashUrl = (url: string) => {
  try {
    const parsedUrl = new URL(url);
    return parsedUrl.hostname.endsWith(UNSPLASH_HOST_SUFFIX) ? parsedUrl : null;
  } catch {
    return null;
  }
};

const buildUnsplashVariant = (sourceUrl: URL, width: number, quality: number) => {
  const variantUrl = new URL(sourceUrl.toString());
  variantUrl.searchParams.set("auto", "format");

  if (!variantUrl.searchParams.has("fit")) {
    variantUrl.searchParams.set("fit", "crop");
  }

  variantUrl.searchParams.set("w", `${width}`);
  variantUrl.searchParams.set("q", `${quality}`);
  return variantUrl.toString();
};

export const getResponsiveImageProps = (
  url: string,
  { sizes, widths, defaultWidth, quality = DEFAULT_QUALITY }: ResponsiveImageOptions,
): ResponsiveImageProps => {
  const unsplashUrl = getUnsplashUrl(url);
  if (!unsplashUrl) {
    return { src: url, sizes };
  }

  const uniqueWidths = sortUniqueWidths(widths);
  if (uniqueWidths.length === 0) {
    return { src: buildUnsplashVariant(unsplashUrl, defaultWidth ?? 1200, quality), sizes };
  }

  const resolvedDefaultWidth = defaultWidth && defaultWidth > 0
    ? Math.round(defaultWidth)
    : uniqueWidths[Math.floor(uniqueWidths.length / 2)];

  return {
    src: buildUnsplashVariant(unsplashUrl, resolvedDefaultWidth, quality),
    srcSet: uniqueWidths
      .map((width) => `${buildUnsplashVariant(unsplashUrl, width, quality)} ${width}w`)
      .join(", "),
    sizes,
  };
};
