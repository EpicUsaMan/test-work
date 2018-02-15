// @flow

import React, { Fragment, Component } from 'react';
import SwitchLink from 'components/shared/SwitchLink';

type propTypes = {
  marginPagesDisplayed: number,
  pageCount: number,
  selected: number,
  pageRangeDisplayed: number,
};

class Pagination extends Component<propTypes> {
  createPageView = (index: number): React$Node => {
    return (
      <SwitchLink
        key={index}
        to={`/${index + 1}`}
        disabled={this.props.selected == index + 1}
      >
        {index + 1}
      </SwitchLink>
    );
  };

  render() {
    let items: Array<React$Node> = [];

    if (this.props.pageCount <= this.props.pageRangeDisplayed) {
      for (let index = 0; index < this.props.pageCount; index++) {
        items.push(this.createPageView(index));
      }
    } else {
      let leftSide: number = this.props.pageRangeDisplayed / 2;
      let rightSide: number = this.props.pageRangeDisplayed - leftSide;

      if (
        this.props.selected >
        this.props.pageCount - this.props.pageRangeDisplayed / 2
      ) {
        rightSide = this.props.pageCount - this.props.selected;
        leftSide = this.props.pageRangeDisplayed - rightSide;
      } else if (this.props.selected < this.props.pageRangeDisplayed / 2) {
        leftSide = this.props.selected;
        rightSide = this.props.pageRangeDisplayed - leftSide;
      }

      let page;
      let breakView;

      for (let index: number = 0; index < this.props.pageCount; index++) {
        page = index + 1;

        if (page <= this.props.marginPagesDisplayed) {
          items.push(this.createPageView(index));
          continue;
        }

        if (page > this.props.pageCount - this.props.marginPagesDisplayed) {
          items.push(this.createPageView(index));
          continue;
        }

        if (
          index >= this.props.selected - leftSide &&
          index <= this.props.selected + rightSide
        ) {
          items.push(this.createPageView(index));
          continue;
        }

        if (items[items.length - 1] !== breakView) {
          breakView = <Fragment key={index}>...</Fragment>;

          items.push(breakView);
        }
      }
    }

    return items;
  }
}

export default Pagination;
