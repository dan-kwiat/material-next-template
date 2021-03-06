import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'next/router'
import getConfig from 'next/config'
import List, {
  ListItem,
  ListItemGraphic,
  ListItemText,
  ListItemMeta,
} from '@material/react-list'
import MaterialIcon from '@material/react-material-icon'

const { publicRuntimeConfig } = getConfig()
const { HOME_ROUTE } = publicRuntimeConfig

const NAV_LINKS = [
  {
    path: '/',
    icon: 'home',
    label: 'Home',
  },
  {
    path: '/search',
    icon: 'search',
    label: 'Search',
  },
  {
    path: '/settings',
    icon: 'settings',
    label: 'Settings',
    meta: 'meta info',
  },
]

const DrawerList = ({ onItemClick, router }) => (
  <List
    tag="nav"
    singleSelection
    selectedIndex={NAV_LINKS.findIndex(x => x.path === router.pathname)} // needs polyfill?
  >
    {NAV_LINKS.map(({ path, icon, label, meta }) => (
      <ListItem
        tag="a"
        key={path}
        href={`${HOME_ROUTE}${path}`}
        onClick={e => {
          // could prefetch routes in componentDidMount?
          e.preventDefault()
          router.push(`${HOME_ROUTE}${path}`)
          onItemClick()
        }}
      >
        <ListItemGraphic graphic={<MaterialIcon icon={icon}/>} />
        <ListItemText primaryText={label} />
        <ListItemMeta meta={meta || ''} />
      </ListItem>
    ))}
  </List>
)
DrawerList.propTypes = {
  onItemClick: PropTypes.func.isRequired,
}

export default withRouter(DrawerList)