import React from 'react';
import { Menu, Grid, Icon } from 'semantic-ui-react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    return (
        <Menu className='footer' borderless style={{ padding: '15px' }}>
          <Grid container={true} className='menugrid'>
            <Grid.Row centered={true} style={{ textTransform: 'uppercase', fontSize: '22px' }}>
              Hard Rock Cafe Honolulu
            </Grid.Row>
            <Grid.Row centered={true}>
              <Icon name="phone" /><a href="tel:+1-808-955-7383">+1-808-955-7383</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Icon name="envelope" /><a href="mailto:honolulu_sales@hardrock.com">Email Us</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Icon name="home" /><a href="https://goo.gl/maps/4pK8Z">280 Beachwalk, Honolulu, Hawaii 96815</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="https://twitter.com/hrchonolulu"><Icon name="twitter"></Icon></a>
              <a href="https://www.facebook.com/hardrockcafehonolulu"><Icon name="facebook f"></Icon></a>
              <a href="https://instagram.com/hrchonolulu/"><Icon name="instagram"></Icon></a>
              <a href="https://www.pinterest.com/HRCHonolulu/"><Icon name="pinterest"></Icon></a>
              <a href="http://www.tripadvisor.com/Restaurant_Review-g60982-d433958-Reviews-Hard_Rock_Cafe-Honolulu_Oahu_Hawaii.html"><i className="tripadvisor icon"></i></a>
            </Grid.Row>
          </Grid>
        </Menu>
    );
  }
}

export default Footer;
