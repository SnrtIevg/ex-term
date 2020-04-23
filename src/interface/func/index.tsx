/**
 * 标签页关闭 函数接口
 */
export interface onTabClosed<T> {
  (index: number, item: T): void
}