const path = require('path')
const setFrontmatter = require('./node_utils/setFrontmatter')
const getSidebarData = require('./node_utils/getSidebarData')
const { createPage, deletePage } = require('./node_utils/handlePage')
const chalk = require('chalk') // 命令行打印美化
const log = console.log

// siteConfig base 配置
let base = ''


// Theme API.
module.exports = (options, ctx) => {
  const { sourceDir, themeConfig, siteConfig } = ctx

  // base路径
  base = siteConfig.base || ''

  // 自动设置front matter
  setFrontmatter(sourceDir, themeConfig)

  // 自动生成结构化侧边栏
  const sidebar = themeConfig.sidebar
  if (sidebar === 'structuring' || sidebar && sidebar.mode === 'structuring') {
    const collapsable = themeConfig.sidebar.collapsable === false ? false : true
    const sidebarData = getSidebarData(sourceDir, collapsable)
    if (sidebarData) {
      themeConfig.sidebar = sidebarData
      log(chalk.blue('tip ') + chalk.green('add sidebar data. 成功生成侧边栏数据。'))
    } else {
      themeConfig.sidebar = 'auto'
      log(chalk.yellow('warning: fail to add sidebar data, switch to "auto". 未能添加侧边栏数据，将切换为“auto”。'))
    }
  }

  // 分类页
  if (themeConfig.category !== false) {
    createPage(sourceDir, 'categoriesPage')
  } else {
    deletePage(sourceDir, 'categoriesPage')
  }

  // 标签页
  if (themeConfig.tag !== false) {
    createPage(sourceDir, 'tagsPage')
  } else {
    deletePage(sourceDir, 'tagsPage')
  }

  // 归档页
  if (themeConfig.archive !== false) {
    createPage(sourceDir, 'archivesPage')
  } else {
    deletePage(sourceDir, 'archivesPage')
  }

  return {
    plugins: []
  }
}


