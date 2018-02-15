// @flow

import React, { Component } from 'react';
import tempus from 'tempusjs';
import type { Article as ArticleType } from 'types/newsApi';
import styled from 'styled-components';

const StyledArticle: React$StatelessFunctionalComponent<*> = styled.article`
  border-radius: 8px;
  border: 1px solid #eee;
  box-sizing: border-box;
  padding: 20px;
  width: 100%;
  float: left;
  margin: 20px 0;

  img {
    width: 100%;
  }

  a {
    float: right;
  }
`;

class Article extends Component<ArticleType> {
  render() {
    return (
      <StyledArticle>
        {this.props.urlToImage ? <img src={this.props.urlToImage} /> : null}
        <h3>{this.props.title}</h3>
        {this.props.author ? (
          <span>{this.props.author.split(',')[0]}</span>
        ) : null}
        <p>{this.props.description}</p>
        <span>{tempus(this.props.publishedAt).format('%D.%M.%Y в %H:%m')}</span>
        <a href={this.props.url}>Читать далее</a>
      </StyledArticle>
    );
  }
}

export default Article;
