import styled from "@emotion/styled";
import {NavLink} from 'react-router-dom';

export const LogoContainer = styled.strong`
        display: inline-flex;
        align-items: center;
        
        .logo-title {
            padding-left: 10px;
            font-weight: 100;
            font-size: 18px;
            
            span:first-of-type {
                color: ${p => p.theme.colors.secondary};
            }
            
            span:last-of-type {
                color: ${p => p.theme.colors.accent};
                padding-left: 3px;
            }
        }
    
    @media screen and (min-width: 1200px) {
        position: relative;
        padding-right: 25px;
        &:after {
            content: '';
            position: absolute;
            bottom: 0;
            right: 2px;
            width: 2px;
            height: 28px;
            transform: translateY(15%);
            border-right: 1px solid ${p => p.theme.colors.primary};
            
        }
    }
`

export const NavigateMenuStyle = styled.nav`
    ul {
        display: flex;
        
        li a {
            text-transform: uppercase;
        }
        
        li + li {
            margin-left: 15px;
        }
    }
	
	@media screen and (min-width: 1200px) {
		padding-left: 20px;
    }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: #9B9FAA;

  &.active {
    color: #212121;
  }
`;

export const Menu = styled.menu`
    .icon-box {
        background-color: transparent;
        outline: none;
        border: none;
        cursor: pointer;
    }
    
    .menu-list {
        display: none;
    }
    
    .menu-mobile-box {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        min-height: 100vh;
        padding-top: ${p => p.theme.space[7]}px;
        background-color: #264061;
        
        z-index: 3;
        
        li {
            text-align: center;
            
            a {
                display: inline-block;
                padding-top: 5px;
                padding-bottom: 5px;
                
                font-size: 18px;
                font-weight: ${props => props.theme.fontWeights.bold};
                text-transform: uppercase;
                color: ${props => props.theme.colors.text};
                
                transition: background-color 0.25ms cubic-bezier(0.4, 0, 0.2, 1);
                
                &:focus {
                    color: ${p => p.theme.colors.primary};
                }
            }
        }
        
        li + li {
            margin-top: ${p => p.theme.space[4]}px;
        }
    }
    
    @media screen and (min-width: 1200px) {
        margin-left: 20px;
        
        .icon-box, .menu-mobile-box {
            display: none;
        }
        
        .menu-list {
            display: flex;
            text-transform: uppercase;
            
            li:first-of-type {
                padding-right: 20px;
            }
        }
    }
`;