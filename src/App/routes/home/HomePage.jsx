import React from 'react';
import importcss from 'importcss';
import { Grid, Row, Col, Nav, NavItem, Jumbotron } from 'react-bootstrap';
import { Card, CardBlock, CardTitle } from 'reactstrap';
import Component from 'lsk-general/General/Component';
import Header from '../../components/Header';
import PostCard from '../../components/PostCard';

@importcss(require('./HomePage.css'))
export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Header siteTitle={this.props.siteTitle} />
        <Grid styleName="content">
          <Row>
            <Col>
              <Jumbotron><h1>Pogodin Dmitry Alexandrovich</h1></Jumbotron>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4}>
              <Card>
                <CardBlock>
                  <CardTitle>Categories</CardTitle>
                  <Nav bsStyle="pills" stacked activeKey={1}>
                    <NavItem eventKey={1}>NavItem 1 content</NavItem>
                    <NavItem eventKey={2}>NavItem 2 content</NavItem>
                    <NavItem eventKey={3}>NavItem 3 content</NavItem>
                  </Nav>
                </CardBlock>
              </Card>
            </Col>
            <Col xs={12} md={8}>
              <PostCard>
                <PostCard.Head
                  id={1}
                  name="Иван"
                  surname="Петров"
                  date={new Date('2017-01-12')}
                />
              </PostCard>
            </Col>
            <Col xs={12} md={8}>
              <PostCard>
                <PostCard.Head
                  id={2}
                  name="Петр"
                  surname="Сидоров"
                  date={new Date('2017-03-17')}
                />
              </PostCard>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
