import { ListItem, ListItemButton } from '@mui/material'
import { RedirectLink } from '../../Navbar/style'
import { Item } from './style'

export function ItemMenuMobile({ text, href }) {
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <RedirectLink href={href}>
          <Item primary={text} />
        </RedirectLink>
      </ListItemButton>
    </ListItem>
  )
}
