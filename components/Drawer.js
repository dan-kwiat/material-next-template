import React from 'react'
import PropTypes from 'prop-types'
import NavDrawer, {
  DrawerHeader,
  DrawerSubtitle,
  DrawerTitle,
  DrawerContent,
} from '@material/react-drawer'
import List, {
  ListItem,
  ListItemText,
  ListItemGraphic,
  ListItemMeta,
} from '@material/react-list'
import MaterialIcon from '@material/react-material-icon'

class DrawerList extends React.Component {
  state = {
    selectedIndex: 0,
  }
  setSelectedIndex = selectedIndex => {
    console.log(`Selected index: ${selectedIndex}`)
    this.setState({ selectedIndex })
  }
  render() {
    const { onItemClick } = this.props
    return (
      <List
        singleSelection
        selectedIndex={this.state.selectedIndex}
        handleSelect={this.setSelectedIndex}
      >
        <ListItem onClick={onItemClick}>
          <ListItemGraphic graphic={<MaterialIcon icon='home'/>} />
          <ListItemText primaryText='Home' />
        </ListItem>
        <ListItem onClick={onItemClick}>
          <ListItemGraphic graphic={<MaterialIcon icon='search'/>} />
          <ListItemText primaryText='Search' />
        </ListItem>
        <ListItem onClick={onItemClick}>
          <ListItemGraphic graphic={<MaterialIcon icon='settings'/>} />
          <ListItemText primaryText='Settings' />
          <ListItemMeta meta='meta info' />
        </ListItem>
      </List>
    )
  }
}
DrawerList.propTypes = {
  onItemClick: PropTypes.func.isRequired,
}

const DeviceAppropriateDrawer = ({ isOpen, setIsDrawerOpen, children }) => (
  <>
    <NavDrawer
      className='permanent-drawer'
    >
      {children}
    </NavDrawer>
    <NavDrawer
      className='modal-drawer'
      modal
      open={isOpen}
      onOpen={() => setIsDrawerOpen(true)}
      onClose={() => setIsDrawerOpen(false)}
    >
      {children}
    </NavDrawer>
    <style jsx>{`
      @media (min-width: 840px) {
        .modal-drawer {
          display: none !important;
        }
      }
      @media (max-width: 839px) {
        .permanent-drawer {
          display: none !important;
        }
      }
    `}</style>
  </>
)
DeviceAppropriateDrawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsDrawerOpen: PropTypes.func.isRequired,
}

const Drawer = props => (
  <DeviceAppropriateDrawer {...props}>
    <DrawerHeader>
      <DrawerTitle>
        Drawer Title
      </DrawerTitle>
      <DrawerSubtitle>
        Drawer Subtitle
      </DrawerSubtitle>
    </DrawerHeader>
    <DrawerContent>
      <DrawerList
        onItemClick={() => {
          props.setIsDrawerOpen && props.setIsDrawerOpen(false)
        }}
      />
      <a href='/'>plain link</a>
    </DrawerContent>
  </DeviceAppropriateDrawer>
)
Drawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsDrawerOpen: PropTypes.func.isRequired,
}

export default Drawer