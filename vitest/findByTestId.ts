import { VueWrapper } from '@vue/test-utils'

export const dataTestIdPlugin = (wrapper: VueWrapper) => {
  const findByTestId = (selector: string) => {
    return wrapper.find(`[data-testid='${selector}']`)
  }

  const findAllByTestId = (selector: string) => {
    return wrapper.findAll(`[data-testid='${selector}']`)
  }

  return {
    findByTestId,
    findAllByTestId,
  }
}
