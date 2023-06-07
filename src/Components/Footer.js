import React ,{useContext} from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { ThemeContext } from './ThemeProvider';

function Footer() {
  const {theme} = useContext(ThemeContext);

  return (
    <div className='footer-container' style={{backgroundColor:theme.primary}}>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading' style={{color:theme.black}}>
          Join the Fashion newsletter to receive our best cosmetics upcomings
        </p>
        <p className='footer-subscription-text' style={{color:theme.black}}>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
              style={{backgroundColor:theme.black}}
            />
            <div className="footer-btns">
            <Button buttonStyle='btn--outline' style={{backgroundColor:theme.secondary}}>Subscribe</Button></div>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/signup' style={{color:theme.black}}>Our Fashion Store</Link>
            
            <Link to='/'style={{color:theme.black}}>Terms of Service</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/' style={{color:theme.black}}>Contact</Link>
            <Link to='/' style={{color:theme.black}}>Support</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
         
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to="https://www.instagram.com/akrem_ghalgaoui/?hl=fr" style={{color:theme.black}}>Instagram</Link>
            <Link to="https://www.facebook.com/ghalgaoui.akrem" style={{color:theme.black}}>Facebook</Link>
            <Link to='/' style={{color:theme.black}}>Youtube</Link>
            <Link to='/' style={{color:theme.black}}>Twitter</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo' style={{color:theme.black}}>
              FASHION
              <i className='fab fa-typo3' style={{color:theme.black}} />
            </Link>
          </div>
          <small className='website-rights' style={{color:theme.black}}>FASHION © 2023</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
              style={{color:theme.black}}
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
              style={{color:theme.black}}
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
              style={{color:theme.black}}
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
              style={{color:theme.black}}
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
              style={{color:theme.black}}
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
