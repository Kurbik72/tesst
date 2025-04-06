import { config } from '@vue/test-utils'
import { dataTestIdPlugin } from './findByTestId'

config.plugins.VueWrapper.install(dataTestIdPlugin)
config.global.renderStubDefaultSlot = true
