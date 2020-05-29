//////////////////////// object ////////////////////////
export interface TabObj {
  id: number
  title: string
  initCommand: string
  active: boolean,
  timestamp: number
}


//////////////////////// props ////////////////////////
export interface TabContentProps {
  tabs: Array<TabObj>
  activeKey: string

  onClose(event: any): void
  onChange(activeKey: string): void
}