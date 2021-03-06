import React, { Component } from 'react';
import { Dropdown, DropdownMenu, DropdownItem } from 'reactstrap';

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  sidebarToggle = e => {
    e.preventDefault();
    document.body.classList.toggle('sidebar-hidden');
  };

  sidebarMinimize = e => {
    e.preventDefault();
    document.body.classList.toggle('sidebar-minimized');
  };

  mobileSidebarToggle = e => {
    e.preventDefault();
    document.body.classList.toggle('sidebar-mobile-show');
  };

  asideToggle = e => {
    e.preventDefault();
    document.body.classList.toggle('aside-menu-hidden');
  };

  render() {
    return (
      <header className="app-header navbar">
        <button
          className="navbar-toggler mobile-sidebar-toggler d-lg-none"
          type="button"
          onClick={this.mobileSidebarToggle}
        >
          &#9776;
        </button>
        <a className="navbar-brand" href="#" />
        <ul className="nav navbar-nav d-md-down-none">
          <li className="nav-item">
            <button
              className="nav-link navbar-toggler sidebar-toggler"
              type="button"
              onClick={this.sidebarToggle}
            >
              &#9776;
            </button>
          </li>
          <li className="nav-item px-3">
            <a className="nav-link" href="#">
              Dashboard
            </a>
          </li>
          <li className="nav-item px-3">
            <a className="nav-link" href="#">
              Users
            </a>
          </li>
          <li className="nav-item px-3">
            <a className="nav-link" href="#">
              Settings
            </a>
          </li>
        </ul>
        <ul className="nav navbar-nav ml-auto">
          <li className="nav-item d-md-down-none">
            <a className="nav-link" href="#">
              <i className="icon-bell" />
              <span className="badge badge-pill badge-danger">5</span>
            </a>
          </li>
          <li className="nav-item d-md-down-none">
            <a className="nav-link" href="#">
              <i className="icon-list" />
            </a>
          </li>
          <li className="nav-item d-md-down-none">
            <a className="nav-link" href="#">
              <i className="icon-location-pin" />
            </a>
          </li>
          <li className="nav-item">
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <button
                onClick={this.toggle}
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                type="button"
                aria-haspopup="true"
                aria-expanded={this.state.dropdownOpen}
              >
                <img
                  src={'http://via.placeholder.com/50x50'}
                  className="img-avatar"
                  alt="admin@bootstrapmaster.com"
                />
                <span className="d-md-down-none">admin</span>
              </button>

              <DropdownMenu className="dropdown-menu-right">
                <DropdownItem header className="text-center">
                  <strong>Account</strong>
                </DropdownItem>

                <DropdownItem>
                  <i className="fa fa-bell-o" /> Updates<span className="badge badge-info">42</span>
                </DropdownItem>
                <DropdownItem>
                  <i className="fa fa-envelope-o" /> Messages<span className="badge badge-success">42</span>
                </DropdownItem>
                <DropdownItem>
                  <i className="fa fa-tasks" /> Tasks<span className="badge badge-danger">42</span>
                </DropdownItem>
                <DropdownItem>
                  <i className="fa fa-comments" /> Comments<span className="badge badge-warning">42</span>
                </DropdownItem>

                <DropdownItem header className="text-center">
                  <strong>Settings</strong>
                </DropdownItem>

                <DropdownItem>
                  <i className="fa fa-user" /> Profile
                </DropdownItem>
                <DropdownItem>
                  <i className="fa fa-wrench" /> Settings
                </DropdownItem>
                <DropdownItem>
                  <i className="fa fa-usd" /> Payments<span className="badge badge-default">42</span>
                </DropdownItem>
                <DropdownItem>
                  <i className="fa fa-file" /> Projects<span className="badge badge-primary">42</span>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <i className="fa fa-shield" /> Lock Account
                </DropdownItem>
                <DropdownItem>
                  <i className="fa fa-lock" /> Logout
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </li>
          <li className="nav-item d-md-down-none">
            <button
              className="nav-link navbar-toggler aside-menu-toggler"
              type="button"
              onClick={this.asideToggle}
            >
              &#9776;
            </button>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
