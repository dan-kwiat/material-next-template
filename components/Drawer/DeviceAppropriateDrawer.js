import PropTypes from 'prop-types'
import NavDrawer from '@material/react-drawer'

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

export default DeviceAppropriateDrawer