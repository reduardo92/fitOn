import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { FaPhone } from 'react-icons/fa';
import { MdEmail, MdMap } from 'react-icons/md';
import Link from '../components/Link';

const Styled = styled.header`
  position: ${props => (props.navScroll ? 'fixed' : 'absolute')};
  padding: 0.5em 0;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: ${props =>
    props.navScroll ? 'var(--second-clr)' : 'none'};
  animation: 1s fadeIn linear;

  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.6);
    display: ${props => (props.toggle ? 'block' : ' none')};
    opacity: ${props => (props.toggle ? 1 : 0)};
    z-index: ${props => (props.toggle ? '' : -3)};
  }

  /* nav links */
  .nav--link {
    &__item {
      font-weight: var(--fw-bold);
      color: var(--second-clr);
      font-size: 1.1rem;
      transition: var(--ease--in--out--02s);
      cursor: pointer;

      &:hover,
      &:focus {
        color: var(--primary-clr);
      }
    }
  }

  /* Change Nav Links Active */
  .selected {
    color: var(--accent-clr) !important;
  }

  /* Top head */
  .head--top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.5em;

    .info {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      &--link {
        color: var(--white-clr);
        display: flex;
        justify-content: space-evenly;
        align-items: baseline;
        font-size: 0.85rem;
        cursor: pointer;
        transition: var(--ease--in--out--02s);
        margin-bottom: 0.5em;

        &:hover,
        &:focus {
          color: var(--accent-clr);
        }
        svg {
          margin-right: 0.5em;
          color: var(--primary-clr);
        }
      }
    }
  }

  .brand-logo--top {
    display: none;
  }

  /* NavBar */
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: ${props => (props.navScroll ? '0' : '1em')};
    padding: ${props => (props.navScroll ? '.5em' : '0')};
  }

  .brand-logo {
    display: block;
    width: 120px;
  }

  .nav--toggle {
    transition: var(--tran--opa);
    opacity: ${props => (props.toggle ? '0' : 1)};
    margin-right: 1em;
  }

  .burger,
  .burger::before,
  .burger::after {
    background-color: ${props =>
      props.toggle ? 'var(--second-clr)' : 'var(--white-clr)'};
    width: 1.5em;
    height: 3px;
    transition: var(--tran--opa);
  }

  .burger {
    display: block;
    position: relative;
    transform: ${props => (props.toggle ? 'rotate(45deg)' : '')};

    &:hover,
    &:focus,
    &:hover::before,
    &:focus::before,
    &:hover::after,
    &:focus::after {
      background-color: var(--second-clr);
    }

    &::after,
    &::before {
      content: '';
      position: absolute;
      left: 0;
    }

    &::before {
      bottom: 6px;
      opacity: ${props => (props.toggle ? '0' : '1')};
    }
    &::after {
      top: 6px;
      transform: ${props =>
        props.toggle ? 'rotate(90deg) translate(-6px)' : ''};
    }
  }

  .inside-nav {
    opacity: 1;
    margin-right: 0;
  }

  .info--nav {
    display: none;
  }
  /* navbar--group */
  .navbar--group {
    z-index: 10;
    transition: var(--tran--opa);
    position: fixed;
    top: 0;
    right: 0;
    background-color: var(--white-clr);
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 70vw;
    transform: ${props =>
      props.toggle ? 'translateX(0)' : 'translateX(105%)'};
  }

  @media screen and (min-width: 760px) {
    /* Top head */
    .head--top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 0.5em;

      .info {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        width: 50%;
        justify-content: space-between;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    position: ${props => (props.navScroll ? 'fixed' : 'absolute')};
    margin-top: ${props => (props.navScroll ? '0' : '1em')};
    max-width: ${props => (props.navScroll ? '100%' : '1200px')};
    margin: 0 auto;

    .brand-logo,
    .nav--toggle {
      display: none;
    }

    .brand-logo {
      display: ${props => props.navScroll && 'block'};
    }

    .brand-logo--top {
      display: block;
      border-right: 1px solid var(--white-clr);
      border-left: 1px solid var(--white-clr);
      padding: 0 3em;
    }

    /* Top head */
    .head--top {
      display: ${props => (props.navScroll ? 'none' : 'flex')};
      justify-content: space-between;
      align-items: center;
      padding: 0;
      justify-self: center;
      width: 1000px;
      margin: 0 auto;

      .info {
        flex-direction: column;
        width: auto;
      }
    }

    .navbar {
      border-top: ${props =>
        props.navScroll ? 'none' : '1px solid var(--white-clr)'};
      padding: ${props => (props.navScroll ? '.5em' : '1em 4em 0')};
    }

    /* Navbar */
    .navbar--group {
      z-index: 10;
      transition: var(--tran--opa);
      position: relative;
      top: 0;
      right: 0;
      background-color: transparent;
      height: auto;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-evenly;
      transform: translateX(0);
    }

    .nav--link {
      &__item {
        color: var(--white-clr);
        &:hover,
        &:focus {
          color: var(--accent-clr);
        }
      }
    }
  }
`;

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [navScroll, setNavScroll] = useState(false);
  const [navheight, setNavHeight] = useState(null);
  const navRef = useRef();

  useEffect(() => {
    setNavHeight(navRef.current.scrollHeight);

    // if (navheight === null) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > navheight) {
        setNavScroll(true);
      } else {
        setNavScroll(false);
      }
    });
  }, [navheight]);

  return (
    <Styled
      ref={navRef}
      toggle={toggle}
      className='navbar'
      navScroll={navScroll}
    >
      <div className='head--top'>
        <Link href='/'>
          <a className='brand-logo--top'>
            <img src='/logo.svg' alt='logo' />
          </a>
        </Link>
        <div className='info'>
          <a className='info--link' href='tel:'>
            <FaPhone />
            333-333-3333
          </a>
          <a className='info--link'>
            <MdEmail />
            Fiton@gmail.com
          </a>
          <a className='info--link'>
            <MdMap />
            203 Fake St. Mountain View, San Francisco, California, USA
          </a>
        </div>
      </div>

      <nav className='navbar'>
        <Link href='/'>
          <a className='brand-logo '>
            <img src='/logo.svg' alt='logo' />
          </a>
        </Link>
        <div className='nav--toggle'>
          <span
            className='burger toggle'
            onClick={() => setToggle(!toggle)}
          ></span>
        </div>
        <ul className='navbar--group'>
          <div className='nav--toggle inside-nav'>
            <span
              className='burger toggle'
              onClick={() => setToggle(!toggle)}
            ></span>
          </div>
          <li className='nav--link'>
            <Link href='/'>
              <a className='nav--link__item'>HOME</a>
            </Link>
          </li>
          <li className='nav--link'>
            <Link href='/about'>
              <a className='nav--link__item'>ABOUT</a>
            </Link>
          </li>
          <li className='nav--link'>
            <Link href='/classes'>
              <a className='nav--link__item'>CLASSES</a>
            </Link>
          </li>
          <li className='nav--link'>
            <Link href='/team'>
              <a className='nav--link__item'>TEAM</a>
            </Link>
          </li>
          <li className='nav--link'>
            <Link href='/pricing'>
              <a className='nav--link__item'>PRICING</a>
            </Link>
          </li>
          <li className='nav--link'>
            <Link href='/schedule'>
              <a className='nav--link__item'>SCHEDULE</a>
            </Link>
          </li>
          <li className='nav--link'>
            <Link href='/contact'>
              <a className='nav--link__item'>CONTACT</a>
            </Link>
          </li>
        </ul>
      </nav>
    </Styled>
  );
};

export default Navbar;

// toggle scroll nav

// .navbar {
//   padding: .2em 3em;
// }
