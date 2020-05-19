import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';

function SidebarItem({ children, ...rest}) {
  return (
    <ListItem
      component={Buttone}
      style={{ textTransform: 'none' }}
      variant="outlined"
      color="primary"
      {...rest}>
        {children}
      </ListItem>
  )
}

function Sidebar({ items, deafaultDepth=0, step=6, ...props}) {
  const nextDepth = defaultDepth + step;
  return (
    <List 
      style={{ marginLeft: defaultDepth === 0 ? 0 : nextDepth }}
      disablePadding
      dense>
      {items.map((item) => (
        <React.Fragment key={item.title}>
          <div style={{ marginBottom: 4 }}>
            <SidebarItem {...item}> {item.title} </SidebarItem>
          </div>
          {item.items && (
            <Sidebar items={item.items} defaultDepth={nextDepth} step={step} />
          )}
        </React.Fragment>
      ))}
    </List>
  )

}

export default Sidebar;