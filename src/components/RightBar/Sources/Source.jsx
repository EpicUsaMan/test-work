// @flow

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Article: React$StatelessFunctionalComponent<*> = styled.article`
  flex: 1 1 40%;
  border: 1px solid #eee;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 20px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 20px;

  &:hover {
    div {
      display: flex;
    }
  }
`;

const HoverContainer: React$StatelessFunctionalComponent<*> = styled.div`
  display: none;
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
  box-sizing: border-box;

  span {
    flex: 1 1 100%;
    text-align: center;
  }

  div a {
    margin: 20px;
    color: #fff;
    padding: 8px 24px;
    box-sizing: border-box;
    border-radius: 20px;
    background: #aaa;
    text-decoration: none;
    &:hover {
      background: #888;
    }
  }
`;

type Props = {
  url: string,
  id: string,
  description: string,
  name: string,
};

class Source extends Component<Props> {
  render() {
    return (
      <Article>
        <h3>{this.props.name}</h3>
        <HoverContainer>
          <span>{this.props.description}</span>
          <div>
            <a href={this.props.url} target="_blank">
              Источник
            </a>
            <Link to={`/${this.props.id}/latest`}>Выбрать</Link>
          </div>
        </HoverContainer>
      </Article>
    );
  }
}
export default Source;
