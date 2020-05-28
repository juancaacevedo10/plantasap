import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';

class MenuTab extends Component {
    render() {
        return (
                <div className="card-header">
                    <Nav fill variant="tabs">
                      <Nav.Item>
                        <Nav.Link eventKey="link-1">Clasificación de plantas</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="link-2">Formulario</Nav.Link>
                      </Nav.Item>
                    </Nav>
                </div>
        );
    }
}

export default MenuTab;