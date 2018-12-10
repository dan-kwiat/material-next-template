import React from 'react'
import PropTypes from 'prop-types'
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
    console.log(`List.handleSelect index: ${selectedIndex}`)
    this.setState({ selectedIndex })
  }
  handleClick = selectedIndex => () => {
    console.log(`ListItem.onClick index: ${selectedIndex}`)
    this.setState({ selectedIndex })
    this.props.onItemClick()
  }
  render() {
    return (
      <List
        singleSelection
        selectedIndex={this.state.selectedIndex}
        handleSelect={this.setSelectedIndex}
      >
        <ListItem onClick={this.handleClick(0)}>
          <ListItemGraphic graphic={<MaterialIcon icon='home'/>} />
          <ListItemText primaryText='Home' />
        </ListItem>
        <ListItem onClick={this.handleClick(1)}>
          <ListItemGraphic graphic={<MaterialIcon icon='search'/>} />
          <ListItemText primaryText='Search' />
        </ListItem>
        <ListItem onClick={this.handleClick(2)}>
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

export default DrawerList