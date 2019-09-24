/**
 * 以下为百度复制过来的例子
 */
export const initMenu = (router, menu) => {
 if (menu.length === 0) {
  return
 }
 let menus = formatRoutes(menu);
 // 最后添加
 let unfound = { path: '*', redirect: '/404', hidden: true }
 menus.push(unfound)
 router.addRoutes(menus)
 store.commit('ADD_ROUTERS',menus)
}
 
export const formatRoutes = (aMenu) => {
 const aRouter = []
 aMenu.forEach(oMenu => {
  const {
   path,
   component,
   name,
   icon,
   childrens
  } = oMenu
  if (!validatenull(component)) {
   let filePath;
   const oRouter = {
    path: path,
    component(resolve) {
     let componentPath = ''
     if (component === 'Layout') {
      require(['../views/layout/Layout'], resolve)
      return
     } else {
      componentPath = component
     }
     require([`../${componentPath}.vue`], resolve)
    },
    name: name,
    icon: icon,
    children: validatenull(childrens) ? [] : formatRoutes(childrens)
   }
   aRouter.push(oRouter)
  }
 
 })
 return aRouter
}