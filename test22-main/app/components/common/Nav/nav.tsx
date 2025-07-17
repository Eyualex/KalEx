import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import Switch from '@mui/material/Switch'
import Badge from '@mui/material/Badge'
import { Theme } from '@mui/material'
import { darkTheme } from '../../../theme/themes'
import { useCart } from '../../../context/cartContext'
import CartDrawer from '../Cart/cart'
import { FaMoon, FaSun } from 'react-icons/fa'
import { FaShop } from 'react-icons/fa6'

interface NavAppBarProps {
  onThemeToggle: () => void
  theme: Theme
}

const NavAppBar: React.FC<NavAppBarProps> = ({ theme, onThemeToggle }) => {
  const { cartItems } = useCart()
  const [cartOpen, setCartOpen] = React.useState(false)
  const badgeContent = cartItems ? cartItems.length : 0

  const toggleDrawer = () => {
    setCartOpen(!cartOpen)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <CartDrawer open={cartOpen} onClose={toggleDrawer} />
      <AppBar
        position='static'
        sx={{ backgroundColor: theme === darkTheme ? '#180d00' : '#824700' }}
      >
       <Toolbar>
  <Box sx={{ flexGrow: 1 }}>
    <img src="/logo.png" alt="Logo" style={{ height: 40 }} />
  </Box>

  <IconButton size='large' aria-label='cart' onClick={toggleDrawer} color='inherit'>
    <Badge badgeContent={badgeContent} color='warning'>
      <ShoppingCartIcon />
    </Badge>
  </IconButton>

  <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
    {theme === darkTheme ? <FaMoon /> : <FaSun />}
    <Switch
      checked={theme === darkTheme}
      onChange={onThemeToggle}
      color='default'
    />
  </Box>
</Toolbar>

      </AppBar>
    </Box>
  )
}

export default NavAppBar
