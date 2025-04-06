import { DOMWrapper } from '@vue/test-utils'

declare module '@vue/test-utils' {
  interface VueWrapper {
    findByTestId<T extends Element = Element>(testId: string): DOMWrapper<T>
    findAllByTestId<T extends Element = Element>(testId: string): DOMWrapper<T>[]
  }
}
