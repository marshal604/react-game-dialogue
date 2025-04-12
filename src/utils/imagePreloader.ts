/**
 * 預載單個圖片
 * @param src 圖片URL
 * @returns Promise
 */
const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (!src) {
      resolve();
      return;
    }

    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
    img.src = src;
  });
};

/**
 * 圖片預載器
 * 用於預先載入對話中所有可能用到的圖片
 */
export class ImagePreloader {
  private loadedImages: Set<string> = new Set();
  private loadingPromises: Map<string, Promise<void>> = new Map();

  /**
   * 預載單個圖片
   * @param src 圖片URL
   * @returns Promise
   */
  preloadImage(src: string): Promise<void> {
    // 如果圖片已載入或正在載入中，直接返回
    if (this.loadedImages.has(src)) {
      return Promise.resolve();
    }

    if (this.loadingPromises.has(src)) {
      return this.loadingPromises.get(src)!;
    }

    // 開始載入圖片
    const promise = preloadImage(src).then(() => {
      this.loadedImages.add(src);
      this.loadingPromises.delete(src);
    });

    this.loadingPromises.set(src, promise);
    return promise;
  }

  /**
   * 批量預載圖片
   * @param srcs 圖片URL數組
   * @returns Promise
   */
  preloadImages(srcs: string[]): Promise<void[]> {
    const validSrcs = srcs.filter(src => !!src);
    return Promise.all(validSrcs.map(src => this.preloadImage(src)));
  }

  /**
   * 檢查圖片是否已預載
   * @param src 圖片URL
   * @returns 是否已預載
   */
  isImageLoaded(src: string): boolean {
    return this.loadedImages.has(src);
  }

  /**
   * 清空已載入的圖片緩存
   */
  clearCache(): void {
    this.loadedImages.clear();
  }
}

// 導出一個全局單例
export const imagePreloader = new ImagePreloader(); 