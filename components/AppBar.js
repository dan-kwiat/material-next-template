import PropTypes from 'prop-types'
import TopAppBar from '@material/react-top-app-bar'
import MaterialIcon from '@material/react-material-icon'

const renderDrawerIcon = onClick => (
  <MaterialIcon
    icon='menu'
    onClick={onClick}
  />
)

const AppBar = ({ setIsDrawerOpen }) => (
  <>
    <TopAppBar
      className='mobile-appbar'
      title='Title'
      navigationIcon={renderDrawerIcon(() => setIsDrawerOpen(true))}
    />
    <TopAppBar
      className='desktop-appbar'
      title='Title'
      fixed
    />
    <style jsx>{`
      @media (min-width: 840px) {
        .mobile-appbar {
          display: none !important;
        }
      }
      @media (max-width: 839px) {
        .desktop-appbar {
          display: none !important;
        }
      }
    `}</style>
  </>
)
AppBar.propTypes = {
  setIsDrawerOpen: PropTypes.func.isRequired,
}

export default AppBar