import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import MenuItems from '../../../enums/MenuItems';
import Link from "next/link";

export default class Sidebar extends React.Component {
    
    render() {
        const { component } = this.props;
        return (
            <ProSidebar>
                <Menu iconShape="square">
                    {
                        MenuItems.map((item, index) => {
                            return (
                            <MenuItem key={index} active={component == item}>
                                <Link href={item.toLowerCase()}> 
                                    {item} 
                                 </Link>
                            </MenuItem>
                            )
                        })
                    }
                </Menu>
            </ProSidebar>
        )
    }
}