/**
 * Components
 *
 * @bootstrap
 *
 * This file automatically imports all defined components
 * would be <core-drawer /> and components/StatsCard.vue would
 * be <stats-card />
 */

// Lib Imports
import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const requireComponent = require.context(
  '@/components', true, /\.vue$/
)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\//, '').replace(/\.\w+$/, ''))
  )

  Vue.component(componentName, componentConfig.default || componentConfig)
})
