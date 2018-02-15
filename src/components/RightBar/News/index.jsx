// @flow

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { fetchArticles } from 'actions/fetchArticles';
import { connect } from 'react-redux';
import Article from './Article';
import Loader from 'components/shared/Loader';
import Header from 'components/RightBar/Header';
import type { Article as ArticleType } from 'types/newsApi';
import type { Articles } from 'types/articles';
import styled from 'styled-components';

type NewsProps = {
  sources: string,
  articles: Articles,
  type: string,
  match: Object,
};

type BoundNewsProps = NewsProps & { fetchArticles: Function };

const NewsContainer: React$StatelessFunctionalComponent<*> = styled.div`
  display: block;
  height: calc(100vh - 72px);
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 20px 40px;
  box-sizing: border-box;
`;

const PageContainer: React$StatelessFunctionalComponent<*> = styled.div`
  width: calc(100vw - 320px);
`;

class News extends Component<BoundNewsProps> {
  componentDidMount() {
    this.loadArticles(this.props);
  }

  componentWillReceiveProps(nextProps: BoundNewsProps) {
    if (nextProps.articles.errorMessage != this.props.articles.errorMessage)
      alert(nextProps.articles.errorMessage);

    this.loadArticles(nextProps);
  }

  loadArticles: Function = (nextProps: BoundNewsProps): void => {
    var offset = nextProps.articles.values.length;

    if (
      this.props.sources != nextProps.sources ||
      this.props.type != nextProps.type
    ) {
      offset = 0;
    }

    this.props.fetchArticles(nextProps.sources, nextProps.type, offset);
  };

  handleScroll: Function = (e: SyntheticEvent<HTMLDivElement>): void => {
    if (
      e.currentTarget.scrollTop + e.currentTarget.offsetHeight >=
      e.currentTarget.scrollHeight
    )
      this.loadArticles(this.props);
  };

  render() {
    return (
      <PageContainer>
        <Header match={this.props.match} />
        {this.props.articles.loader ? (
          <div>
            <Loader />
          </div>
        ) : (
          <NewsContainer onScroll={this.handleScroll}>
            {this.props.articles.values.map(
              (article: ArticleType, index: number) => (
                <Article key={index} {...article} />
              ),
            )}
          </NewsContainer>
        )}
      </PageContainer>
    );
  }
}

function mapStateToProps(
  { articles }: { articles: Articles },
  { match }: { match: { params: { sources: string, type: string } } },
): NewsProps {
  return {
    sources: match.params.sources,
    articles,
    type: match.params.type,
    match,
  };
}

function mapDispatchToProps(dispatch: Function) {
  return bindActionCreators({ fetchArticles }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(News);
