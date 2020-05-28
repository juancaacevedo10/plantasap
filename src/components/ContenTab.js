import React, { Component } from 'react';
import { Tab } from 'react-bootstrap';
import Content1 from './Content1';

class ContenTab extends Component {
    render() {
        return (
            <div className="card-body">
                <Tab.Content>
                    <Tab.Pane eventKey="link-1">
                        <Content1/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="link-2">
                    <p>How are you?</p>
                    </Tab.Pane>
                </Tab.Content>
            </div>
        );
    }
}

export default ContenTab;