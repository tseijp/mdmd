import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import MathJax from 'react-mathjax';
import RemarkMathPlugin from 'remark-math';
import { MDBContainer, MDBRow, MDBCol, MDBTypography, MDBBox, MDBBadge, MDBTooltip, MDBBtn, MDBView, MDBMask, MDBIcon, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBAnimation, MDBDataTable, MDBNav, MDBNavItem, MDBNavLink, MDBTabContent, MDBTabPane, MDBModal, MDBModalHeader, MDBModalBody, MDBModalFooter, MDBListGroup, MDBNavbar, MDBNavbarBrand, MDBNavbarToggler, MDBCollapse, MDBNavbarNav, MDBFooter, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBListGroupItem } from 'mdbreact';
import { Light } from 'react-syntax-highlighter';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var _jsxFileName = "C:\\Users\\yousei takei\\_dj\\mdmd\\src\\components\\Root.js";

const Root = props => {
  const {
    className,
    color,
    style
  } = props;
  const state = {
    className,
    color,
    style
  };
  return /*#__PURE__*/React.createElement(MDBContainer, _extends({}, state, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 12
    }
  }), props.children);
};

Root.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object
};
Root.defaultProps = {
  className: '',
  coor: '',
  style: {}
};
/*props
  - children
*/

var _jsxFileName$1 = "C:\\Users\\yousei takei\\_dj\\mdmd\\src\\components\\Text.js";

const Mdmd = props => {
  const {
    color,
    style
  } = props;
  const className = (color ? `${color}-text ` : '') + props.className;
  const state = {
    className,
    color,
    style
  };
  return /*#__PURE__*/React.createElement("span", _extends({}, state, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName$1,
      lineNumber: 10,
      columnNumber: 12
    }
  }), props.children);
};

Mdmd.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object
};
Mdmd.defaultProps = {
  className: '',
  color: '',
  style: {}
};

var _jsxFileName$2 = "C:\\Users\\yousei takei\\_dj\\mdmd\\src\\components\\Paragraph.js";

const Paragraph = props => {
  const {
    className,
    color,
    style
  } = props;
  const state = {
    className,
    color,
    style
  };
  return /*#__PURE__*/React.createElement("div", _extends({}, state, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName$2,
      lineNumber: 9,
      columnNumber: 12
    }
  }), props.children);
};

Paragraph.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object
};
Paragraph.defaultProps = {
  className: ''
};

var _jsxFileName$3 = "C:\\Users\\yousei takei\\_dj\\mdmd\\src\\components\\Blockquote\\Grid.js";

const Grid = props => {
  const {
    child
  } = props;

  const isBlock = c => !c.key || c.key.match('blockquote') || c.key.match('paragraph');

  const renderChild = child => {
    if (child instanceof Array && child.every(c => isBlock(c))) {
      return /*#__PURE__*/React.createElement(MDBRow, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName$3,
          lineNumber: 13,
          columnNumber: 17
        }
      }, child.map((c, i) => /*#__PURE__*/React.createElement(MDBCol, {
        key: i,
        __self: undefined,
        __source: {
          fileName: _jsxFileName$3,
          lineNumber: 15,
          columnNumber: 21
        }
      }, c instanceof Array ? renderChild(c) : c)));
    }

    return child;
  };

  return renderChild(child);
};

Grid.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object
};
Grid.defaultProps = {};
/*props
  - children : [blockquote, ]

>if depth = 0 (no \n)
props.children
  - child   (key=text)
    .props.children
      - child (key=None)

>if depth = 0 (include \n)

>>if depth = 1 (include \n)
props.children
  - child (key=blockquote)
    .props.children
      - child (key=paragraph)
        .props.children
          - child (key=text)
          - child (key=text)...

>>if depth=1
>  //bind depth=0
>>?
props.children
  - child (key=blockquote)
    .prosp.children
      - child (key=paragraph)
      - child
        .props.children
          - child (key=text)
          - child
          - child ...
*/

var _jsxFileName$4 = "C:\\Users\\yousei takei\\_dj\\mdmd\\src\\components\\Blockquote\\index.js";

const Blockquote = props => {
  const {
    className,
    color,
    style
  } = props;

  const getChild = (p, depth = 0) => {
    const children = p.children instanceof Array ? p.children : [p.children];
    return children && children.map(c => c.key.match('blockquote') ? getChild(c.props, depth + 1) : c);
  };

  const child = getChild(props);
  const state = {
    className,
    color,
    style,
    child
  };

  if (child instanceof Array && child.every(c => !(c instanceof Array))) {
    return /*#__PURE__*/React.createElement(MDBTypography, {
      blockquote: true,
      __self: undefined,
      __source: {
        fileName: _jsxFileName$4,
        lineNumber: 17,
        columnNumber: 17
      }
    }, /*#__PURE__*/React.createElement(MDBBox, {
      tag: "div",
      mb: 0,
      __self: undefined,
      __source: {
        fileName: _jsxFileName$4,
        lineNumber: 17,
        columnNumber: 43
      }
    }, child));
  }

  return /*#__PURE__*/React.createElement(Grid, _extends({}, state, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName$4,
      lineNumber: 18,
      columnNumber: 12
    }
  }));
};

Blockquote.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object
};
Blockquote.defaultProps = {
  className: '',
  color: '',
  style: {}
};
/*props
  - children : [blockquote, ]

>if depth = 0 (no \n)
props.children
  - child   (key=text)
    .props.children
      - child (key=None)

>if depth = 0 (include \n)

>>if depth = 1 (include \n)
props.children
  - child (key=blockquote)
    .props.children
      - child (key=paragraph)
        .props.children
          - child (key=text)
          - child (key=text)...

>>if depth=1
>  //bind depth=0
>>?
props.children
  - child (key=blockquote)
    .prosp.children
      - child (key=paragraph)
      - child
        .props.children
          - child (key=text)
          - child
          - child ...
*/

var _jsxFileName$5 = "C:\\Users\\yousei takei\\_dj\\mdmd\\src\\components\\Delete.js";

const Delete = props => {
  const {
    className,
    color,
    style
  } = props;
  const state = {
    className,
    color,
    style
  };
  return /*#__PURE__*/React.createElement(MDBBadge, _extends({}, state, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName$5,
      lineNumber: 9,
      columnNumber: 12
    }
  }), "\xD7", props.children);
};

Delete.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object
};
Delete.defaultProps = {
  //  active: false,
  className: '',
  color: 'danger',
  style: {}
};

var _jsxFileName$6 = "C:\\Users\\yousei takei\\_dj\\mdmd\\src\\components\\Link\\Button.js";

const Button = props => {
  const [isOpened, setIsOpened] = useState(false);
  const {
    className,
    style,
    social,
    level,
    href,
    is_1,
    is_2,
    is_3
  } = props;
  const color = props.color.replace('-color', '');

  const onClick = () => {
    setIsOpened(true);
    props.onClick();
  };

  const buttonStyle = social ? {
    social
  } : {
    color
  };
  const state = {
    onClick,
    level,
    className,
    style,
    ...(is_3 && {
      outline: true
    })
  };
  const hoverText = href.length > 30 ? href.slice(0, 30) + "..." : href;
  return /*#__PURE__*/React.createElement(MDBTooltip, {
    domElement: true,
    tag: "span",
    placement: "bottom",
    __self: undefined,
    __source: {
      fileName: _jsxFileName$6,
      lineNumber: 16,
      columnNumber: 9
    }
  }, /*#__PURE__*/React.createElement("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName$6,
      lineNumber: 17,
      columnNumber: 13
    }
  }, is_1 && /*#__PURE__*/React.createElement(MDBBadge, _extends({
    color: props.color
  }, state, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName$6,
      lineNumber: 18,
      columnNumber: 24
    }
  }), props.children), (is_2 || is_3) && /*#__PURE__*/React.createElement(MDBBtn, _extends({}, buttonStyle, state, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName$6,
      lineNumber: 19,
      columnNumber: 32
    }
  }), props.children)), /*#__PURE__*/React.createElement("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName$6,
      lineNumber: 21,
      columnNumber: 13
    }
  }, isOpened ? 'Opened' : hoverText));
};

var _jsxFileName$7 = "C:\\Users\\yousei takei\\_dj\\mdmd\\src\\components\\Link\\index.js";

const Mdmd$1 = props => {
  const {
    color,
    social,
    className,
    style
  } = props;
  const keys = props.children.map(el => el.key);
  const is_1 = keys.every(key => key.match('emphasis')); //   _e.g._

  const is_2 = keys.every(key => key.match('strong')); //  __e.g.__

  const is_3 = is_2 && [].concat(...props.children.map(el => // ___e.g.___
  el.props.children instanceof Array ? el.props.children.map(e => e.key) : [])).every(key => key.match('emphasis'));

  const onClick = () => {
    window.location.href = props.href;
  };

  const state = {
    onClick,
    className,
    style
  };
  const ButtonState = {
    color,
    social,
    is_1,
    is_2,
    is_3
  };
  if (is_1 || is_2 || is_3) return /*#__PURE__*/React.createElement(Button, _extends({}, state, ButtonState, {
    href: props.href,
    __self: undefined,
    __source: {
      fileName: _jsxFileName$7,
      lineNumber: 19,
      columnNumber: 16
    }
  }), props.children);
  return /*#__PURE__*/React.createElement("span", _extends({}, state, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName$7,
      lineNumber: 20,
      columnNumber: 12
    }
  }), /*#__PURE__*/React.createElement("u", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName$7,
      lineNumber: 20,
      columnNumber: 29
    }
  }, props.children));
};

Mdmd$1.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object
};
Mdmd$1.defaultProps = {
  className: '',
  color: 'dafault',
  social: null //such as fb, tw, gplus, li, ins, pin, yt, vk, so, slack, git...

};
/* props
  - children
  - href "/docs"
  -
*/

var _jsxFileName$8 = "C:\\Users\\yousei takei\\_dj\\mdmd\\src\\components\\Image\\Image.js";

const Image = props => {
  const {
    src,
    alt
  } = props;
  const styles = {
    alt: {
      fontSize: "25px"
    }
  };
  const className = 'img-fluid ' + props.className;
  const state = {
    className,
    src,
    alt
  };
  return /*#__PURE__*/React.createElement(MDBView, {
    hover: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName$8,
      lineNumber: 14,
      columnNumber: 9
    }
  }, /*#__PURE__*/React.createElement("img", _extends({
    alt: ""
  }, state, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName$8,
      lineNumber: 15,
      columnNumber: 13
    }
  })), /*#__PURE__*/React.createElement(MDBMask, {
    className: "flex-center",
    overlay: "white-light",
    __self: undefined,
    __source: {
      fileName: _jsxFileName$8,
      lineNumber: 16,
      columnNumber: 13
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "black-text",
    style: styles.alt,
    __self: undefined,
    __source: {
      fileName: _jsxFileName$8,
      lineNumber: 17,
      columnNumber: 17
    }
  }, alt)));
};

Image.propTypes = {
  active: PropTypes.bool
};
Image.defaultProps = {
  active: false,
  className: ''
};
/* props
  - alt:""
  - children
  - className: ""
  - src: ""
*/

var _jsxFileName$9 = "C:\\Users\\yousei takei\\_dj\\mdmd\\src\\components\\Image\\index.js";

const Mdmd$2 = props => {
  const {
    alt,
    src,
    children,
    className,
    color,
    style
  } = props;

  const getArr = arr => arr ? arr instanceof Array ? arr : [arr] : [];

  const keys = getArr(children).map(el => el.key).filter(k => k); //const is_w= keys.every(key=>key.match('delete'))  //put by delete      ~~e.g.~~

  const is_1 = keys.every(key => key.match('emphasis')); //put by 1 underbar  _e.g._

  const is_2 = keys.every(key => key.match('strong')); //put by 2 underbar __e.g.__

  const is_3 = [].concat(...getArr(props.children).map(el => //put by 3 underbar___e.g.___
  el.props.children instanceof Array ? el.props.children.map(e => e.key) : [])).every(key => key.match('emphasis'));
  const level = is_3 ? 3 : is_2 ? 2 : is_1 ? 1 : 0;
  const state = {
    alt,
    src,
    children,
    level,
    className,
    color,
    style
  }; //if (src.match('https://youtube.com'))
  //    return <Embed {...state}/>

  if (alt.slice(0, 1).match(':')) return /*#__PURE__*/React.createElement(MDBIcon, {
    icon: alt.slice(1),
    __self: undefined,
    __source: {
      fileName: _jsxFileName$9,
      lineNumber: 22,
      columnNumber: 16
    }
  });
  return /*#__PURE__*/React.createElement(Image, _extends({}, state, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName$9,
      lineNumber: 23,
      columnNumber: 12
    }
  }));
};

Mdmd$2.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object
};
Mdmd$2.defaultProps = {
  className: '',
  color: 'dafault'
};

var _jsxFileName$a = "C:\\Users\\yousei takei\\_dj\\mdmd\\src\\components\\Table\\Cards.js";

const Cards = props => {
  const {
    columns,
    rows,
    argments
  } = props; //keys

  const cards = columns.map((column, i) => ({
    column,
    rows: rows.map(row => row['' + i]),
    argment: argments[i]
  }));

  const toHead = row => {
    const text = row && row.map(r => r.props.children).join('');
    return text && text[0] === "#" ? text.slice(1) : null;
  };

  const styles = {
    col: {
      textAlign: "center",
      margin: "25px auto"
    },
    card: {
      borderRadius: "5px"
    },
    cardImage: {
      margin: "0 auto",
      borderRadius: "5px",
      boxShadow: "0 10 25 rgba(0,0,0,0.25)"
    }
  };

  const getUpper = chart => chart.charAt(0).toUpperCase() + chart.slice(1);

  const getType = argment => argment ? `fadeIn${getUpper(argment === 'center' ? 'up' : argment)}` : null;

  const Animation = props => props.argment ? /*#__PURE__*/React.createElement(MDBAnimation, {
    reveal: true,
    type: getType(props.argment),
    __self: undefined,
    __source: {
      fileName: _jsxFileName$a,
      lineNumber: 19,
      columnNumber: 45
    }
  }, props.children) : props.children;

  return /*#__PURE__*/React.createElement(MDBRow, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName$a,
      lineNumber: 21,
      columnNumber: 9
    }
  }, cards && cards.map((card, i) => /*#__PURE__*/React.createElement(MDBCol, {
    key: i,
    style: styles.col,
    __self: undefined,
    __source: {
      fileName: _jsxFileName$a,
      lineNumber: 23,
      columnNumber: 17
    }
  }, /*#__PURE__*/React.createElement(Animation, {
    argment: card.argment,
    __self: undefined,
    __source: {
      fileName: _jsxFileName$a,
      lineNumber: 24,
      columnNumber: 21
    }
  }, /*#__PURE__*/React.createElement(MDBCard, {
    style: styles.card,
    __self: undefined,
    __source: {
      fileName: _jsxFileName$a,
      lineNumber: 25,
      columnNumber: 25
    }
  }, /*#__PURE__*/React.createElement(MDBCardImage, {
    style: styles.cardImage,
    className: "img-fluid",
    src: card.column.label[0].props.src,
    waves: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName$a,
      lineNumber: 26,
      columnNumber: 29
    }
  }), /*#__PURE__*/React.createElement(MDBCardBody, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName$a,
      lineNumber: 28,
      columnNumber: 29
    }
  }, /*#__PURE__*/React.createElement(MDBCardTitle, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName$a,
      lineNumber: 29,
      columnNumber: 33
    }
  }, card.column.label[0].props.alt), card.rows && card.rows.map((row, j) => /*#__PURE__*/React.createElement(MDBCardText, {
    key: j,
    __self: undefined,
    __source: {
      fileName: _jsxFileName$a,
      lineNumber: 31,
      columnNumber: 37
    }
  }, toHead(row) || row))))))));
};

var _jsxFileName$b = "C:\\Users\\yousei takei\\_dj\\mdmd\\src\\components\\Table\\Table.js";

const Table = props => {
  const {
    indexProps,
    data,
    className,
    color,
    style
  } = props;
  const {
    bordered,
    maxHeight,
    paging,
    searching,
    scrollX,
    scrollY,
    small,
    sorting,
    striped
  } = indexProps;
  const tableState = {
    bordered,
    maxHeight,
    paging,
    searching,
    scrollX,
    scrollY,
    small,
    sorting,
    striped
  };
  const state = {
    data,
    className,
    color,
    style,
    ...tableState
  };
  return /*#__PURE__*/React.createElement(MDBDataTable, _extends({}, state, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName$b,
      lineNumber: 9,
      columnNumber: 12
    }
  }));
};

var _jsxFileName$c = "C:\\Users\\yousei takei\\_dj\\mdmd\\src\\components\\Table\\Pills.js";

const Pills = props => {
  const [tab, setTab] = useState(0);
  const {
    className,
    isPill,

    /*color, style,*/
    columns,
    rows
    /*keys*/

  } = props;

  const Aux = props => props.children; //const getarr =arr=>arr?arr instanceof Array?arr:[arr]:[]
  //const isPill = columns.every( col=>col.label.every(c=>getAnyChild(c.props,'emphasis').length) )


  const cards = columns.map((column, i) => ({
    column,
    rows: rows.map(row => row['' + i])
  }));

  const togglePills = (num, event) => {
    event.preventDefault(); //?

    if (tab !== num) setTab(num);
  };

  return /*#__PURE__*/React.createElement(Aux, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName$c,
      lineNumber: 21,
      columnNumber: 9
    }
  }, /*#__PURE__*/React.createElement(MDBNav, {
    style: {
      border: "none"
    },
    className: className + ` mt-5 nav-${isPill ? 'pills' : 'tabs'}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName$c,
      lineNumber: 22,
      columnNumber: 13
    }
  }, cards && cards.map((card, i) => /*#__PURE__*/React.createElement(MDBNavItem, {
    key: i,
    __self: undefined,
    __source: {
      fileName: _jsxFileName$c,
      lineNumber: 25,
      columnNumber: 17
    }
  }, /*#__PURE__*/React.createElement(MDBNavLink, {
    link: true,
    to: "#",
    active: tab === i,
    onClick: e => togglePills(i, e),
    __self: undefined,
    __source: {
      fileName: _jsxFileName$c,
      lineNumber: 26,
      columnNumber: 20
    }
  }, card.column.label.map(l => l.props.children))))), /*#__PURE__*/React.createElement(MDBTabContent, {
    activeItem: "" + tab,
    __self: undefined,
    __source: {
      fileName: _jsxFileName$c,
      lineNumber: 33,
      columnNumber: 13
    }
  }, cards && cards.map((card, i) => /*#__PURE__*/React.createElement(MDBTabPane, {
    key: i,
    tabId: i + "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName$c,
      lineNumber: 35,
      columnNumber: 17
    }
  }, /*#__PURE__*/React.createElement("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName$c,
      lineNumber: 36,
      columnNumber: 21
    }
  }, " ", card.rows, " ")))));
};

var _jsxFileName$d = "C:\\Users\\yousei takei\\_dj\\mdmd\\src\\components\\Table\\Modal.js";

const Modal = props => {
  const {
    columns,
    rows,
    argments,
    className,
    style
  } = props; //keys

  const [modalNum, setModalNum] = useState(null);
  const cards = columns.map((column, i) => ({
    column,
    rows: rows.map(row => row['' + i]),
    argment: argments[i]
  }));
  const color = props.color.replace('-color', '');
  const state = {
    className,
    color,
    style
  };

  const Aux = props => props.children;

  return /*#__PURE__*/React.createElement(Aux, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName$d,
      lineNumber: 14,
      columnNumber: 9
    }
  }, cards.map((card, i) => /*#__PURE__*/React.createElement(Aux, {
    key: i,
    __self: undefined,
    __source: {
      fileName: _jsxFileName$d,
      lineNumber: 16,
      columnNumber: 13
    }
  }, /*#__PURE__*/React.createElement(MDBBtn, _extends({}, state, {
    onClick: () => setModalNum(modalNum === i ? null : i),
    __self: undefined,
    __source: {
      fileName: _jsxFileName$d,
      lineNumber: 17,
      columnNumber: 17
    }
  }), card.column.label[0].props.children[0].props.children), /*#__PURE__*/React.createElement(MDBModal, {
    fullHeight: true,
    position: "right",
    isOpen: modalNum === i,
    toggle: () => setModalNum(null),
    __self: undefined,
    __source: {
      fileName: _jsxFileName$d,
      lineNumber: 19,
      columnNumber: 17
    }
  }, /*#__PURE__*/React.createElement(MDBModalHeader, {
    toggle: () => setModalNum(null),
    __self: undefined,
    __source: {
      fileName: _jsxFileName$d,
      lineNumber: 23,
      columnNumber: 21
    }
  }, card.column.label[0].props.children), /*#__PURE__*/React.createElement(MDBModalBody, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName$d,
      lineNumber: 25,
      columnNumber: 21
    }
  }, card.rows), /*#__PURE__*/React.createElement(MDBModalFooter, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName$d,
      lineNumber: 28,
      columnNumber: 21
    }
  }, /*#__PURE__*/React.createElement(MDBBtn, _extends({}, state, {
    onClick: () => setModalNum(null),
    __self: undefined,
    __source: {
      fileName: _jsxFileName$d,
      lineNumber: 29,
      columnNumber: 23
    }
  }), "Close"))))));
};

var _jsxFileName$e = "C:\\Users\\yousei takei\\_dj\\mdmd\\src\\components\\Table\\index.js";

const Mdmd$3 = props => {
  const {
    className,
    color,
    style
  } = props;

  const getarr = arr => arr ? arr instanceof Array ? arr : [arr] : [];

  const heads = getarr(props.children).filter(v => v.key.match("tableHead"));
  const bodys = getarr(props.children).filter(v => v.key.match("tableBody"));

  const gettrs = els => [].concat(...els.map(el => getarr(el.props.children)));

  const getths = row => getarr(row.props.children).map(el => getarr(el.props.children));

  const getcol = els => els.map((c, i) => ({
    label: c,
    field: "" + i,
    sort: "asc",
    width: 10
  }));

  const getrow = els => els.length ? Object.assign(...els.map((c, i) => ({
    ["" + i]: c
  }))) : {};

  const getkey = els => [].concat(...els.map(el => el)).map(v => v.key);

  const columns = gettrs(heads).map(v => getths(v)).map(th => getcol(th))[0];
  const rows = gettrs(bodys).map(v => getths(v)).map(th => getrow(th));
  const keys = gettrs(heads).map(v => getths(v)).map(th => getkey(th))[0];
  const state = {
    className,
    color,
    style,
    columns,
    rows,
    keys
  };

  const getAnyChild = (props, key) => getarr(props.children).filter(c => c.key && c.key.match(key)); //[g0,..]or[]
  //const getAnyGrand =(props,k1,k2)=>getAnyChild(props,k1).map(c=>getAnyChild(c.props,k2)).filter(g=>g.length)


  const getIsX = (els, key) => els.every(el => el.label.every(c => getAnyChild(c.props, key).length));

  if (keys.every(key => key.match('image'))) return /*#__PURE__*/React.createElement(Cards, _extends({}, state, {
    argments: props.columnAlignment,
    __self: undefined,
    __source: {
      fileName: _jsxFileName$e,
      lineNumber: 27,
      columnNumber: 16
    }
  }));

  if (keys.every(key => key.match('link'))) {
    if (getIsX(columns, 'delete')) return /*#__PURE__*/React.createElement(Modal, _extends({}, state, {
      argments: props.columnAlignment,
      __self: undefined,
      __source: {
        fileName: _jsxFileName$e,
        lineNumber: 30,
        columnNumber: 20
      }
    }));
    return /*#__PURE__*/React.createElement(Pills, _extends({}, state, {
      isPill: getIsX(columns, 'emphasis'),
      __self: undefined,
      __source: {
        fileName: _jsxFileName$e,
        lineNumber: 31,
        columnNumber: 16
      }
    }));
  }

  return /*#__PURE__*/React.createElement(Table, {
    indexProps: props,
    data: {
      columns,
      rows
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName$e,
      lineNumber: 33,
      columnNumber: 12
    }
  });
};

Mdmd$3.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object,
  bordered: PropTypes.bool,
  maxHeight: PropTypes.string,
  paging: PropTypes.bool,
  searching: PropTypes.bool,
  scrollX: PropTypes.bool,
  scrollY: PropTypes.bool,
  small: PropTypes.bool,
  sorting: PropTypes.bool,
  striped: PropTypes.bool
};
Mdmd$3.defaultProps = {
  className: "",
  color: "",
  style: {},

  /*----------table----------*/
  maxHeight: "300px",
  bordered: false,
  paging: true,
  //pagination of Table and select data num
  searching: true,
  //able to search for table
  scrollX: false,
  //able to scroll if overflow-x
  scrollY: false,
  //able to scroll if overflow-y
  //sorting  :true ,//error
  striped: true,
  small: true
};

var _jsxFileName$f = "C:\\Users\\yousei takei\\_dj\\mdmd\\src\\components\\List\\List.js";

const List = props => {
  const {
    className
  } = props;
  const state = {
    className
  };
  const style = {
    margin: "auto auto"
  };
  return /*#__PURE__*/React.createElement(MDBListGroup, _extends({}, state, {
    style: style,
    __self: undefined,
    __source: {
      fileName: _jsxFileName$f,
      lineNumber: 11,
      columnNumber: 11
    }
  }), props.children);
};

List.propTypes = {
  active: PropTypes.bool
};
List.defaultProps = {
  active: false,
  className: ''
};

var _jsxFileName$g = "C:\\Users\\yousei takei\\_dj\\mdmd\\src\\components\\List\\Navi.js";

const Mdmd$4 = props => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    children,
    className,
    color,
    style,
    getArray,
    getText,
    getLink
  } = props;

  const toggleCollapse = () => setIsOpen(!isOpen);

  const state = {
    color,
    dark: true,
    expand: "md",
    fixed: "top",
    scrolling: true,
    transparent: true,
    className,
    style
  };
  return /*#__PURE__*/React.createElement(MDBNavbar, _extends({}, state, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName$g,
      lineNumber: 16,
      columnNumber: 9
    }
  }), /*#__PURE__*/React.createElement(MDBNavbarBrand, {
    href: getLink(children[0].props),
    __self: undefined,
    __source: {
      fileName: _jsxFileName$g,
      lineNumber: 17,
      columnNumber: 13
    }
  }, /*#__PURE__*/React.createElement("strong", {
    className: "white-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName$g,
      lineNumber: 18,
      columnNumber: 17
    }
  }, getText(children[0].props))), /*#__PURE__*/React.createElement(MDBNavbarToggler, {
    onClick: toggleCollapse,
    __self: undefined,
    __source: {
      fileName: _jsxFileName$g,
      lineNumber: 20,
      columnNumber: 13
    }
  }), /*#__PURE__*/React.createElement(MDBCollapse, {
    id: "navbarCollapse3",
    isOpen: isOpen,
    navbar: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName$g,
      lineNumber: 21,
      columnNumber: 13
    }
  }, /*#__PURE__*/React.createElement(MDBNavbarNav, {
    left: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName$g,
      lineNumber: 22,
      columnNumber: 17
    }
  }, getArray(children).filter((c, i) => i > 0).map((c, i) => /*#__PURE__*/React.createElement(MDBNavItem, {
    key: i,
    active: window.location.href.match(getLink(c.props)) ? true : false,
    onClick: () => {
      window.location.href = getLink(c.props);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName$g,
      lineNumber: 24,
      columnNumber: 21
    }
  }, /*#__PURE__*/React.createElement(MDBNavLink, {
    to: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName$g,
      lineNumber: 27,
      columnNumber: 25
    }
  }, getText(c.props)))))));
};

Mdmd$4.propTypes = {
  active: PropTypes.bool
};
Mdmd$4.defaultProps = {
  active: false,
  className: ''
};

var _jsxFileName$h = "C:\\Users\\yousei takei\\_dj\\mdmd\\src\\components\\List\\Foot.js";

const Mdmd$5 = props => {
  const {
    children,
    color,
    getArray,
    getText,
    getLink
  } = props;
  const className = 'footer-copyright text-center font-small py-3' + props.className;
  const style = {
    maxWidth: "99vw",
    left: "50%",
    right: "50%",
    marginLeft: "-50vw",
    marginRight: "-50vw",
    position: "relative",
    bottom: "0",
    overflow: "hidden",
    ...props.style
  };
  const state = {
    className,
    color,
    style
  };
  return /*#__PURE__*/React.createElement(MDBFooter, _extends({}, state, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName$h,
      lineNumber: 14,
      columnNumber: 9
    }
  }), /*#__PURE__*/React.createElement(MDBContainer, {
    fluid: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName$h,
      lineNumber: 15,
      columnNumber: 13
    }
  }, /*#__PURE__*/React.createElement(MDBRow, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName$h,
      lineNumber: 16,
      columnNumber: 17
    }
  }, getArray(children).map((c, i) => /*#__PURE__*/React.createElement(MDBCol, {
    key: i,
    onClick: () => {
      window.location.href = getLink(c.props);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName$h,
      lineNumber: 18,
      columnNumber: 25
    }
  }, getText(c.props))))));
};

Mdmd$5.propTypes = {
  active: PropTypes.bool
};
Mdmd$5.defaultProps = {
  active: false,
  className: '',
  color: "default-color"
};

var _jsxFileName$i = "C:\\Users\\yousei takei\\_dj\\mdmd\\src\\components\\List\\Drop.js";

const Mdmd$6 = props => {
  const {
    children,
    className,
    style,
    getArray,
    getText,
    getLink
  } = props;
  const state = {
    className,
    style
  };
  const color = props.color.replace('-color', '');
  return /*#__PURE__*/React.createElement(MDBDropdown, _extends({}, state, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName$i,
      lineNumber: 11,
      columnNumber: 9
    }
  }), /*#__PURE__*/React.createElement(MDBDropdownToggle, {
    caret: true,
    color: color,
    __self: undefined,
    __source: {
      fileName: _jsxFileName$i,
      lineNumber: 12,
      columnNumber: 13
    }
  }, getText(children[0].props)), /*#__PURE__*/React.createElement(MDBDropdownMenu, {
    basic: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName$i,
      lineNumber: 15,
      columnNumber: 13
    }
  }, getArray(children).filter((c, i) => i > 0).map((c, i) => /*#__PURE__*/React.createElement(MDBDropdownItem, {
    key: i,
    onClick: () => {
      window.location.href = getLink(c.props);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName$i,
      lineNumber: 17,
      columnNumber: 17
    }
  }, getText(c.props) || c.props.children))));
};

Mdmd$6.propTypes = {
  active: PropTypes.bool
};
Mdmd$6.defaultProps = {
  active: false,
  className: ''
};

var _jsxFileName$j = "C:\\Users\\yousei takei\\_dj\\mdmd\\src\\components\\List\\index.js";

const Mdmd$7 = props => {
  //grands:i want to know as g0 is btn? link? g0.child is ?
  //i want know g0 have 'link' child and g0 have 'strong' grandchild.
  const {
    children,
    className,
    color,
    style
  } = props;

  const getArray = arr => arr ? (arr instanceof Array ? arr : [arr]).filter(a => a) : [];

  const getAnyChild = (props, key) => getArray(props.children).filter(c => c.key && c.key.match(key)); //[g0,..]or[]


  const getAnyGrand = (props, k1, k2) => getAnyChild(props, k1).map(c => getAnyChild(c.props, k2)).filter(g => g.length);

  const getText = props => getArray(props.children).map(c => c.key && c.key.match('link') ? c.props.children : c);

  const getLink = props => getArray(props.children).map(c => c.key && c.key.match('link') ? c.props.href : '#!').filter(n => n)[0] || '#!';

  const state = {
    className,
    color,
    style,
    children,
    getArray,
    getAnyChild,
    getText,
    getLink
  };

  if (children.every(c => getAnyChild(c.props, 'link').length)) {
    if (children.every(c => getAnyGrand(c.props, 'link', 'strong').length)) return /*#__PURE__*/React.createElement(Mdmd$5, _extends({}, state, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName$j,
        lineNumber: 21,
        columnNumber: 20
      }
    }));
    if (children.every(c => getAnyGrand(c.props, 'link', 'emphasis').length)) return /*#__PURE__*/React.createElement(Mdmd$4, _extends({}, state, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName$j,
        lineNumber: 23,
        columnNumber: 20
      }
    }));
    return /*#__PURE__*/React.createElement(Mdmd$6, _extends({}, state, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName$j,
        lineNumber: 24,
        columnNumber: 16
      }
    }));
  } // not used (migrate to table)
  //if( children.every(c=>getAnyChild(c.props, 'image').length ) )
  //    return <Carousel {...state}/>
  //if( children.map(c=>getAnyGrand(c.props, 'link', 'emphasis')).filter(a=>a.length).length )
  //    return <Pill {...state}/>
  //if( children.map(c=>getAnyGrand(c.props, 'link', 'strong')).filter(a=>a.length).length )
  //    return <Tabs {...state}/>


  return /*#__PURE__*/React.createElement(List, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName$j,
      lineNumber: 33,
      columnNumber: 12
    }
  }, children);
};

Mdmd$7.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object
};
Mdmd$7.defaultProps = {
  className: '',
  color: '',
  style: {}
};
/*props
props.depth  : 0
props.ordered: false
props.start  : null
props.tight  :false
props.children
  - child (key=listItem)
  - cilld ...
    .props.children
      - child(key=text and so)
*/

var _jsxFileName$k = "C:\\Users\\yousei takei\\_dj\\mdmd\\src\\components\\ListItem.js";

const ListItem = props => {
  const {
    className,
    style
  } = props;
  const colors = ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"];
  const color = props.color in colors ? props.color : null;
  const state = {
    className,
    color,
    style
  };
  return /*#__PURE__*/React.createElement(MDBListGroupItem, _extends({}, state, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName$k,
      lineNumber: 11,
      columnNumber: 12
    }
  }), props.children);
};

ListItem.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object
};
ListItem.defaultProps = {
  active: false,
  color: "light",
  className: ''
};

var _jsxFileName$l = "C:\\Users\\yousei takei\\_dj\\mdmd\\src\\components\\Heading.js";

const Heading = props => {
  const {
    abbr,
    active,
    variant,
    className,
    color,
    style
  } = props;
  const state = {
    abbr,
    active,
    className,
    color,
    style
  };
  const addvariant = variant ? '-' + variant : '';
  return /*#__PURE__*/React.createElement(MDBTypography, _extends({}, state, {
    tag: "h" + props.level,
    variant: `h${props.level}${addvariant}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName$l,
      lineNumber: 8,
      columnNumber: 12
    }
  }), props.children);
};

Heading.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object
};
Heading.defaultProps = {
  //active: false,
  abbr: 'false',
  //error if not here
  className: '',
  color: '',
  style: {},
  variant: 'display'
};
/*props
props.children
props.level
*/

var style = {
  "hljs": {
    "display": "block",
    "overflowX": "auto",
    "padding": "0.5em",
    "color": "#383a42",
    "background": "#fafafa"
  },
  "hljs-comment": {
    "color": "#a0a1a7",
    "fontStyle": "italic"
  },
  "hljs-quote": {
    "color": "#a0a1a7",
    "fontStyle": "italic"
  },
  "hljs-doctag": {
    "color": "#a626a4"
  },
  "hljs-keyword": {
    "color": "#a626a4"
  },
  "hljs-formula": {
    "color": "#a626a4"
  },
  "hljs-section": {
    "color": "#e45649"
  },
  "hljs-name": {
    "color": "#e45649"
  },
  "hljs-selector-tag": {
    "color": "#e45649"
  },
  "hljs-deletion": {
    "color": "#e45649"
  },
  "hljs-subst": {
    "color": "#e45649"
  },
  "hljs-literal": {
    "color": "#0184bb"
  },
  "hljs-string": {
    "color": "#50a14f"
  },
  "hljs-regexp": {
    "color": "#50a14f"
  },
  "hljs-addition": {
    "color": "#50a14f"
  },
  "hljs-attribute": {
    "color": "#50a14f"
  },
  "hljs-meta-string": {
    "color": "#50a14f"
  },
  "hljs-built_in": {
    "color": "#c18401"
  },
  "hljs-class .hljs-title": {
    "color": "#c18401"
  },
  "hljs-attr": {
    "color": "#986801"
  },
  "hljs-variable": {
    "color": "#986801"
  },
  "hljs-template-variable": {
    "color": "#986801"
  },
  "hljs-type": {
    "color": "#986801"
  },
  "hljs-selector-class": {
    "color": "#986801"
  },
  "hljs-selector-attr": {
    "color": "#986801"
  },
  "hljs-selector-pseudo": {
    "color": "#986801"
  },
  "hljs-number": {
    "color": "#986801"
  },
  "hljs-symbol": {
    "color": "#4078f2"
  },
  "hljs-bullet": {
    "color": "#4078f2"
  },
  "hljs-link": {
    "color": "#4078f2",
    "textDecoration": "underline"
  },
  "hljs-meta": {
    "color": "#4078f2"
  },
  "hljs-selector-id": {
    "color": "#4078f2"
  },
  "hljs-title": {
    "color": "#4078f2"
  },
  "hljs-emphasis": {
    "fontStyle": "italic"
  },
  "hljs-strong": {
    "fontWeight": "bold"
  }
};

var _jsxFileName$m = "C:\\Users\\yousei takei\\_dj\\mdmd\\src\\components\\Code\\Code.js";

const Code = props => {
  //const [isCopied, setIsCopied] = useState(false);
  const {
    value,
    language,
    inline
  } = props;
  const display = inline ? "inline-block" : "fixed";
  const inlineStyle = inline ? {
    verticalAlign: "top",
    padding: "0 0"
  } : {};
  const styles = {
    pre: {
      position: 'relative',
      display,
      ...inlineStyle
    }
  };

  const handleCopy = (e, v) => {
    //setIsCopied(true);
    navigator.clipboard.writeText(v);
  };

  return /*#__PURE__*/React.createElement(Light, {
    PreTag: inline ? "span" : "pre",
    style: style,
    customStyle: styles.pre,
    onDoubleClick: e => handleCopy(e, value),
    useInlineStyles: true,
    showLineNumbers: !inline,
    language: language,
    __self: undefined,
    __source: {
      fileName: _jsxFileName$m,
      lineNumber: 20,
      columnNumber: 9
    }
  }, value);
};

Code.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object,
  value: PropTypes.string,
  inline: PropTypes.bool
};
Code.defaultProps = {
  className: '',
  coor: '',
  style: {},
  value: '',
  inline: false
};

var _jsxFileName$n = "C:\\Users\\yousei takei\\_dj\\mdmd\\src\\components\\InlineCode.js";

const InlineCode = props => {
  return /*#__PURE__*/React.createElement(Code, _extends({}, props, {
    inline: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName$n,
      lineNumber: 8,
      columnNumber: 12
    }
  }));
};

var _jsxFileName$o = "C:\\Users\\yousei takei\\_dj\\mdmd\\src\\components\\Math.js";

const Math = props => {
  const {
    inline,
    value
  } = props; //const [isCopied, setIsCopied] = useState(false);

  const handleCopy = (e, v) => {
    //    setIsCopied(true);
    navigator.clipboard.writeText(v);
  };

  return /*#__PURE__*/React.createElement(MathJax.Node, {
    inline: inline,
    formula: value,
    onDoubleClick: e => handleCopy(e, value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName$o,
      lineNumber: 13,
      columnNumber: 13
    }
  });
};

Math.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object,
  value: PropTypes.string,
  inline: PropTypes.bool
};
Math.defaultProps = {
  className: '',
  coor: '',
  style: {},
  value: '',
  inline: false
};

var _jsxFileName$p = "C:\\Users\\yousei takei\\_dj\\mdmd\\src\\components\\InlineMath.js";

const InlineMath = props => {
  return /*#__PURE__*/React.createElement(Math, _extends({}, props, {
    inline: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName$p,
      lineNumber: 8,
      columnNumber: 12
    }
  }));
};

var Renderers = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Root: Root,
  Text: Mdmd,
  Paragraph: Paragraph,
  Blockquote: Blockquote,
  Delete: Delete,
  Link: Mdmd$1,
  Image: Mdmd$2,
  Table: Mdmd$3,
  List: Mdmd$7,
  ListItem: ListItem,
  Heading: Heading,
  InlineCode: InlineCode,
  Code: Code,
  Math: Math,
  InlineMath: InlineMath
});

var _jsxFileName$q = "C:\\Users\\yousei takei\\_dj\\mdmd\\src\\Mdmd.js";
const renderersKey = Object.keys(Renderers);

const Mdmd$8 = props => {
  /******************** for props.md ********************/
  const [source, setSource] = useState(props.source);
  useEffect(() => {
    if (props.md || props.path) fetch(props.md || props.path).then(res => res.text()).then(res => setSource(res));
  }, [props.md, props.path]);
  useEffect(() => {
    if (props.source && source !== props.source) setSource(props.source);
  }, [source, props.source]);
  /******************** for render () ********************/

  const renderersMdmd = Object.assign(...renderersKey.map(key => {
    const lowerKey = key.charAt(0).toLowerCase() + key.slice(1);
    const Renderer = Renderers[key];
    const className = [props.className, props[`className${key}`]].filter(c => c).join(' ');
    const color = props[`color${key}`] || props.color;
    const style = { ...props.style,
      ...props[`style${key}`]
    };
    const state = {
      className,
      color,
      style
    };
    return {
      [lowerKey]: props => /*#__PURE__*/React.createElement(Renderer, _extends({}, state, props, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName$q,
          lineNumber: 33,
          columnNumber: 35
        }
      }))
    };
  }));
  const renderers = { ...renderersMdmd,
    ...props.renderers
  };
  const plugins = [RemarkMathPlugin];
  const state = {
    source,
    renderers,
    plugins
  };
  const options = ['escapeHtml', 'skipHtml', 'sourcePos', 'rawSourcePos', 'includeNodeIndex', 'allowedTypes', 'disallowedTypes', 'unwrapDisallowed', 'allowNode', 'linkTarget', 'transformLinkUri', 'transformImageUrl'].filter(name => name in props).map(name => ({
    [name]: props[name]
  }));
  const optionsState = options.length ? Object.assign(...options) : {};
  return /*#__PURE__*/React.createElement(MathJax.Provider, {
    input: "tex",
    __self: undefined,
    __source: {
      fileName: _jsxFileName$q,
      lineNumber: 46,
      columnNumber: 9
    }
  }, /*#__PURE__*/React.createElement(ReactMarkdown, _extends({}, optionsState, state, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName$q,
      lineNumber: 47,
      columnNumber: 13
    }
  })));
};

Mdmd$8.propTypes = {
  /*----------main----------*/
  source: PropTypes.string,
  renderers: PropTypes.object,

  /*----------sub----------*/
  className: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object
};
Mdmd$8.defaultProps = {
  /*----------main----------*/
  md: null,

  /*===*/
  path: null,
  source: '',
  renderers: {},

  /*----------sub----------*/
  className: '',
  color: "default-color",
  style: {},
  ...Object.assign(...renderersKey.map(k => ({
    [`className${k}`]: null
  }))),
  ...Object.assign(...renderersKey.map(k => ({
    [`color${k}`]: null
  }))),
  ...Object.assign(...renderersKey.map(k => ({
    [`style${k}`]: null
  })))
  /*----------Md----------*/

};

export default Mdmd$8;
export { Blockquote, Code, Delete, Heading, Mdmd$2 as Image, InlineCode, InlineMath, Mdmd$1 as Link, Mdmd$7 as List, ListItem, Math, Paragraph, Root, Mdmd$3 as Table, Mdmd as Text };
