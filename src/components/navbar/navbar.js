import React, { Component } from 'react';
import { Col, Collapse, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Row, UncontrolledDropdown } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import flag from './resources/uk-flag.png';
import './navbar.css';

class navbar extends Component {
    constructor(props){
        super(props)
        this.toggleOurSynergy = this.toggleOurSynergy.bind(this)
        this.toggleBusinessPortofolio = this.toggleBusinessPortofolio.bind(this)
        this.toggleESG = this.toggleESG.bind(this)
        this.toggleInvestors = this.toggleInvestors.bind(this)
        this.toggleMedia = this.toggleMedia.bind(this)
        this.toggle = this.toggle.bind(this)
        this.state = {ourSynergy: false}
        this.state = {businessPortofolio: false}
        this.state = {ESG: false}
        this.state = {dropdownOpen: false}
    }

    toggleOurSynergy(){
        this.setState({ourSynergy: !this.state.ourSynergy})
    }

    toggleBusinessPortofolio(){
        this.setState({businessPortofolio: !this.state.businessPortofolio})
    }

    toggleESG(){
        this.setState({ESG: !this.state.ESG})
    }
    
    toggleInvestors(){
        this.setState({investors: !this.state.investors})
    }

    toggleMedia(){
        this.setState({media: !this.state.media})
    }

    toggle(){
        this.setState({dropdownOpen: !this.state.dropdownOpen})
    }

    render(){
        return(
            <div className="navbarWeb">
                <Navbar className='Navbar' color='light' expand='md' light>
                    <Collapse className='Collapse' navbar>
                        <Nav className='Nav ms-auto' >
                            <NavItem className='NavItem'>
                                <Dropdown className='Dropdown' isOpen={this.state.ourSynergy} toggle={this.toggleOurSynergy}>
                                    <DropdownToggle className='DropdownToggle' data-toggle="dropdown" tag="span" aria-expanded={this.state.ourSynergy} onClick={this.toggleOurSynergy}>
                                        OUR SYNERGY
                                        &nbsp;
                                        <FontAwesomeIcon icon={faAngleDown}/>
                                    </DropdownToggle>
                                    <DropdownMenu className='ourSynergy'>
                                        <Row>
                                            <Col className='ourSynergySummary'>
                                                <Col className='image'>
                                                    <img src='https://images.wallpaperscraft.com/image/single/sky_nature_river_landscape_90818_1280x720.jpg'/>
                                                </Col>
                                                <Col className='Description'>
                                                    <h5>Our Synergy</h5>
                                                    <p>As Indonesia’s leading diversified energy company, we bring together resources, services and infrastructure into a complete value chain that provides energy solutions to meet national and global needs..</p>
                                                </Col>
                                            </Col>
                                            <Col className='ourSynergyMenus'>
                                                <li>Our Synergy</li>
                                                <li>Vision, Mission, and Values</li>
                                                <li>Operations</li>
                                                <li>Milestones</li>
                                                <li>Leadership</li>
                                            </Col>
                                        </Row>
                                    </DropdownMenu>
                                </Dropdown>
                            </NavItem>
                            <NavItem className='NavItem'>
                                <Dropdown className='Dropdown' isOpen={this.state.businessPortofolio} toggle={this.toggleBusinessPortofolio}>
                                    <DropdownToggle className='DropdownToggle' data-toggle="dropdown" tag="span" aria-expanded={this.state.businessPortofolio} onClick={this.toggleBusinessPortofolio}>
                                        BUSINESS PORTOFOLIO
                                        &nbsp;
                                        <FontAwesomeIcon icon={faAngleDown}/>
                                    </DropdownToggle>
                                    <DropdownMenu className='BusinessPortofolio'>
                                        <Row>
                                            <Col className='BusinessPortofolioSummary'>
                                                <Col className='image'>
                                                    <img src='https://images.wallpaperscraft.com/image/single/sky_nature_river_landscape_90818_1280x720.jpg'/>
                                                </Col>
                                                <Col className='Description'>
                                                    <h5>Business Portofolios</h5>
                                                    <p>Indika Energy has grown into one of Indonesia’s leading diversified companies with a portfolio of business spanning from energy resources, energy services, infrastructure, and diversifying into a number of businesses with strong growth opportunities.</p>
                                                </Col>
                                            </Col>
                                            <Col className='BusinessPortofolioMenus'>
                                                <li>Energy Resources</li>
                                                <li>Energy Infrastructures</li>
                                                <li>Energy Services</li>
                                                <li>Diversified Portofolios </li>
                                            </Col>
                                        </Row>
                                    </DropdownMenu>
                                </Dropdown>
                            </NavItem>
                            <NavItem className='NavItem'>
                                <Dropdown className='Dropdown' isOpen={this.state.ESG} toggle={this.toggleESG}>
                                    <DropdownToggle className='DropdownToggle' data-toggle="dropdown" tag="span" aria-expanded={this.state.ESG} onClick={this.toggleESG}>
                                        ESG
                                        &nbsp;
                                        <FontAwesomeIcon icon={faAngleDown}/>
                                    </DropdownToggle>
                                    <DropdownMenu className='ourSynergy'>
                                        <Row>
                                            <Col className='ourSynergySummary'>
                                                <Col className='image'>
                                                    <img src='https://images.wallpaperscraft.com/image/single/sky_nature_river_landscape_90818_1280x720.jpg'/>
                                                </Col>
                                                <Col className='Description'>
                                                    <h5>ESG</h5>
                                                    <p>Indika Energy believes that long-term growth in energy markets hinges on concern for and nurturing of the natural environment and relationships with communities.</p>
                                                </Col>
                                            </Col>
                                            <Col className='ourSynergyMenus'>
                                                <li>Environmental</li>
                                                <li>Social</li>
                                                <li>Governance</li>
                                                <li>ESG Gallery</li>
                                            </Col>
                                        </Row>
                                    </DropdownMenu>
                                </Dropdown>
                            </NavItem>
                            <NavItem className='NavItem'>
                                <Dropdown className='Dropdown' isOpen={this.state.investors} toggle={this.toggleInvestors}>
                                    <DropdownToggle className='DropdownToggle' data-toggle="dropdown" tag="span" aria-expanded={this.state.investor} onClick={this.toggleInvestors}>
                                        INVESTORS
                                        &nbsp;
                                        <FontAwesomeIcon icon={faAngleDown}/>
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <div onClick={this.toggleInvestors}>Put stuff here</div>
                                        <div onClick={this.toggleInvestors}>Put stuff here</div>
                                        <div onClick={this.toggleInvestors}>Put stuff here</div>
                                        <div onClick={this.toggleInvestors}>Put stuff here</div>
                                    </DropdownMenu>
                                </Dropdown>
                            </NavItem>
                            <NavItem className='NavItem'>
                                <Dropdown className='Dropdown' isOpen={this.state.media} toggle={this.toggleMedia}>
                                    <DropdownToggle className='DropdownToggle' data-toggle="dropdown" tag="span" aria-expanded={this.state.media} onClick={this.toggleMedia}>
                                        MEDIA
                                        &nbsp;
                                        <FontAwesomeIcon icon={faAngleDown}/>
                                    </DropdownToggle>
                                    <DropdownMenu className='menuMedia'>
                                        <li>News Coverage</li>
                                        <li>Press Releases</li>
                                        <li>Gallery</li>
                                    </DropdownMenu>
                                </Dropdown>
                            </NavItem>
                            <NavItem className='NavItem'>
                                <NavLink className='NavLink'>
                                GOVERNANCE
                                </NavLink>
                            </NavItem>
                            <NavItem className='NavItem'>
                                <NavLink className='NavLink'>
                                CAREERS
                                </NavLink>
                            </NavItem>
                            <NavItem className='NavItem'>
                                <NavLink className='NavLink'>
                                CONTACT US
                                </NavLink>
                            </NavItem>
                            <NavItem className='NavItem'>
                                <NavLink className='NavLink'>
                                    <FontAwesomeIcon icon={faMagnifyingGlass}/>
                                </NavLink>
                            </NavItem>
                            <NavItem className='NavItem'>
                                <NavLink className='NavLink'>
                                    <img src={flag} width="30%"/>
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}

export default navbar;