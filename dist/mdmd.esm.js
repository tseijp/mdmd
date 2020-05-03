import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import MathJax from 'react-mathjax';
import RemarkMathPlugin from 'remark-math';
import { MDBContainer, MDBRow, MDBCol, MDBTypography, MDBBox, MDBBadge, MDBTooltip, MDBBtn, MDBView, MDBMask, MDBIcon, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBAnimation, MDBDataTable, MDBNav, MDBNavItem, MDBNavLink, MDBTabContent, MDBTabPane, MDBListGroup, MDBNavbar, MDBNavbarBrand, MDBNavbarToggler, MDBCollapse, MDBNavbarNav, MDBFooter, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBListGroupItem } from 'mdbreact';
import { Light } from 'react-syntax-highlighter';

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

var _this = undefined,
    _jsxFileName = "C:\\Users\\yousei takei\\_dj\\mdmd\\src\\components\\Root.js";

var Root = function Root(props) {
  var className = props.className,
      color = props.color,
      style = props.style;
  var state = {
    className: className,
    color: color,
    style: style
  };
  return /*#__PURE__*/React.createElement(MDBContainer, _extends({}, state, {
    __self: _this,
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

var _this$1 = undefined,
    _jsxFileName$1 = "C:\\Users\\yousei takei\\_dj\\mdmd\\src\\components\\Text.js";

var Mdmd = function Mdmd(props) {
  var color = props.color,
      style = props.style;
  var className = (color ? "".concat(color, "-text ") : '') + props.className;
  var state = {
    className: className,
    color: color,
    style: style
  };
  return /*#__PURE__*/React.createElement("span", _extends({}, state, {
    __self: _this$1,
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

var _this$2 = undefined,
    _jsxFileName$2 = "C:\\Users\\yousei takei\\_dj\\mdmd\\src\\components\\Paragraph.js";

var Paragraph = function Paragraph(props) {
  var className = props.className,
      color = props.color,
      style = props.style;
  var state = {
    className: className,
    color: color,
    style: style
  };
  return /*#__PURE__*/React.createElement("div", _extends({}, state, {
    __self: _this$2,
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

var _this$3 = undefined,
    _jsxFileName$3 = "C:\\Users\\yousei takei\\_dj\\mdmd\\src\\components\\Blockquote\\Grid.js";

var Grid = function Grid(props) {
  var child = props.child;

  var isBlock = function isBlock(c) {
    return !c.key || c.key.match('blockquote') || c.key.match('paragraph');
  };

  var renderChild = function renderChild(child) {
    if (child instanceof Array && child.every(function (c) {
      return isBlock(c);
    })) {
      return /*#__PURE__*/React.createElement(MDBRow, {
        __self: _this$3,
        __source: {
          fileName: _jsxFileName$3,
          lineNumber: 13,
          columnNumber: 17
        }
      }, child.map(function (c, i) {
        return /*#__PURE__*/React.createElement(MDBCol, {
          key: i,
          __self: _this$3,
          __source: {
            fileName: _jsxFileName$3,
            lineNumber: 15,
            columnNumber: 21
          }
        }, c instanceof Array ? renderChild(c) : c);
      }));
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

var _this$4 = undefined,
    _jsxFileName$4 = "C:\\Users\\yousei takei\\_dj\\mdmd\\src\\components\\Blockquote\\index.js";

var Blockquote = function Blockquote(props) {
  var className = props.className,
      color = props.color,
      style = props.style;

  var getChild = function getChild(p) {
    var children = p.children instanceof Array ? p.children : [p.children];
    return children && children.map(function (c) {
      return c.key.match('blockquote') ? getChild(c.props) : c;
    });
  };

  var child = getChild(props);
  var state = {
    className: className,
    color: color,
    style: style,
    child: child
  };

  if (child instanceof Array && child.every(function (c) {
    return !(c instanceof Array);
  })) {
    return /*#__PURE__*/React.createElement(MDBTypography, {
      blockquote: true,
      __self: _this$4,
      __source: {
        fileName: _jsxFileName$4,
        lineNumber: 17,
        columnNumber: 17
      }
    }, /*#__PURE__*/React.createElement(MDBBox, {
      tag: "div",
      mb: 0,
      __self: _this$4,
      __source: {
        fileName: _jsxFileName$4,
        lineNumber: 17,
        columnNumber: 43
      }
    }, child));
  }

  return /*#__PURE__*/React.createElement(Grid, _extends({}, state, {
    __self: _this$4,
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

var _this$5 = undefined,
    _jsxFileName$5 = "C:\\Users\\yousei takei\\_dj\\mdmd\\src\\components\\Delete.js";

var Delete = function Delete(props) {
  var className = props.className,
      color = props.color,
      style = props.style;
  var state = {
    className: className,
    color: color,
    style: style
  };
  return /*#__PURE__*/React.createElement(MDBBadge, _extends({}, state, {
    __self: _this$5,
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

var _this$6 = undefined,
    _jsxFileName$6 = "C:\\Users\\yousei takei\\_dj\\mdmd\\src\\components\\Link\\Button.js";

var Button = function Button(props) {
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpened = _useState2[0],
      setIsOpened = _useState2[1];

  var className = props.className,
      style = props.style,
      social = props.social,
      color = props.color,
      level = props.level,
      href = props.href,
      is_1 = props.is_1,
      is_2 = props.is_2,
      is_3 = props.is_3;

  var onClick = function onClick() {
    setIsOpened(true);
    props.onClick();
  };

  var state = _objectSpread2(_objectSpread2({
    onClick: onClick,
    level: level
  }, {
    social: social
  } || {
    color: color
  }), {}, {
    className: className,
    style: style
  }, is_3 && {
    outline: true
  });

  var hoverText = href.length > 30 ? href.slice(0, 30) + "..." : href;
  return /*#__PURE__*/React.createElement(MDBTooltip, {
    domElement: true,
    tag: "span",
    placement: "bottom",
    __self: _this$6,
    __source: {
      fileName: _jsxFileName$6,
      lineNumber: 15,
      columnNumber: 9
    }
  }, /*#__PURE__*/React.createElement("span", {
    __self: _this$6,
    __source: {
      fileName: _jsxFileName$6,
      lineNumber: 16,
      columnNumber: 13
    }
  }, is_1 && /*#__PURE__*/React.createElement(MDBBadge, _extends({}, state, {
    __self: _this$6,
    __source: {
      fileName: _jsxFileName$6,
      lineNumber: 17,
      columnNumber: 24
    }
  }), props.children), (is_2 || is_3) && /*#__PURE__*/React.createElement(MDBBtn, _extends({}, state, {
    __self: _this$6,
    __source: {
      fileName: _jsxFileName$6,
      lineNumber: 18,
      columnNumber: 32
    }
  }), props.children)), /*#__PURE__*/React.createElement("span", {
    __self: _this$6,
    __source: {
      fileName: _jsxFileName$6,
      lineNumber: 20,
      columnNumber: 13
    }
  }, isOpened ? 'Opened' : hoverText));
};

var _this$7 = undefined,
    _jsxFileName$7 = "C:\\Users\\yousei takei\\_dj\\mdmd\\src\\components\\Link\\index.js";

var Mdmd$1 = function Mdmd(props) {
  var _ref;

  var color = props.color,
      social = props.social,
      className = props.className,
      style = props.style;
  var keys = props.children.map(function (el) {
    return el.key;
  });
  var is_1 = keys.every(function (key) {
    return key.match('emphasis');
  }); //   _e.g._

  var is_2 = keys.every(function (key) {
    return key.match('strong');
  }); //  __e.g.__

  var is_3 = is_2 && (_ref = []).concat.apply(_ref, _toConsumableArray(props.children.map(function (el) {
    return (// ___e.g.___
      el.props.children instanceof Array ? el.props.children.map(function (e) {
        return e.key;
      }) : []
    );
  }))).every(function (key) {
    return key.match('emphasis');
  });

  var onClick = function onClick() {
    window.location.href = props.href;
  };

  var state = {
    onClick: onClick,
    className: className,
    style: style
  };
  var ButtonState = {
    color: color,
    social: social,
    is_1: is_1,
    is_2: is_2,
    is_3: is_3
  };
  if (is_1 || is_2 || is_3) return /*#__PURE__*/React.createElement(Button, _extends({}, state, ButtonState, {
    href: props.href,
    __self: _this$7,
    __source: {
      fileName: _jsxFileName$7,
      lineNumber: 19,
      columnNumber: 16
    }
  }), props.children);
  return /*#__PURE__*/React.createElement("span", _extends({}, state, {
    __self: _this$7,
    __source: {
      fileName: _jsxFileName$7,
      lineNumber: 20,
      columnNumber: 12
    }
  }), /*#__PURE__*/React.createElement("u", {
    __self: _this$7,
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

var _this$8 = undefined,
    _jsxFileName$8 = "C:\\Users\\yousei takei\\_dj\\mdmd\\src\\components\\Image\\Image.js";

var Image = function Image(props) {
  var src = props.src,
      alt = props.alt;
  var styles = {
    alt: {
      fontSize: "25px"
    }
  };
  var className = 'img-fluid ' + props.className;
  var state = {
    className: className,
    src: src,
    alt: alt
  };
  return /*#__PURE__*/React.createElement(MDBView, {
    hover: true,
    __self: _this$8,
    __source: {
      fileName: _jsxFileName$8,
      lineNumber: 14,
      columnNumber: 9
    }
  }, /*#__PURE__*/React.createElement("img", _extends({
    alt: ""
  }, state, {
    __self: _this$8,
    __source: {
      fileName: _jsxFileName$8,
      lineNumber: 15,
      columnNumber: 13
    }
  })), /*#__PURE__*/React.createElement(MDBMask, {
    className: "flex-center",
    overlay: "white-light",
    __self: _this$8,
    __source: {
      fileName: _jsxFileName$8,
      lineNumber: 16,
      columnNumber: 13
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "black-text",
    style: styles.alt,
    __self: _this$8,
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

var _this$9 = undefined,
    _jsxFileName$9 = "C:\\Users\\yousei takei\\_dj\\mdmd\\src\\components\\Image\\index.js";

var Mdmd$2 = function Mdmd(props) {
  var _ref;

  var alt = props.alt,
      src = props.src,
      children = props.children,
      className = props.className,
      color = props.color,
      style = props.style;

  var getArr = function getArr(arr) {
    return arr ? arr instanceof Array ? arr : [arr] : [];
  };

  var keys = getArr(children).map(function (el) {
    return el.key;
  }).filter(function (k) {
    return k;
  }); //const is_w= keys.every(key=>key.match('delete'))  //put by delete      ~~e.g.~~

  var is_1 = keys.every(function (key) {
    return key.match('emphasis');
  }); //put by 1 underbar  _e.g._

  var is_2 = keys.every(function (key) {
    return key.match('strong');
  }); //put by 2 underbar __e.g.__

  var is_3 = (_ref = []).concat.apply(_ref, _toConsumableArray(getArr(props.children).map(function (el) {
    return (//put by 3 underbar___e.g.___
      el.props.children instanceof Array ? el.props.children.map(function (e) {
        return e.key;
      }) : []
    );
  }))).every(function (key) {
    return key.match('emphasis');
  });

  var level = is_3 ? 3 : is_2 ? 2 : is_1 ? 1 : 0;
  var state = {
    alt: alt,
    src: src,
    children: children,
    level: level,
    className: className,
    color: color,
    style: style
  }; //if (src.match('https://youtube.com'))
  //    return <Embed {...state}/>

  if (alt.slice(0, 1).match(':')) return /*#__PURE__*/React.createElement(MDBIcon, {
    icon: alt.slice(1),
    __self: _this$9,
    __source: {
      fileName: _jsxFileName$9,
      lineNumber: 22,
      columnNumber: 16
    }
  });
  return /*#__PURE__*/React.createElement(Image, _extends({}, state, {
    __self: _this$9,
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

var _this$a = undefined,
    _jsxFileName$a = "C:\\Users\\yousei takei\\_dj\\mdmd\\src\\components\\Table\\Cards.js";

var Cards = function Cards(props) {
  var columns = props.columns,
      rows = props.rows,
      argments = props.argments; //keys

  var cards = columns.map(function (column, i) {
    return {
      column: column,
      rows: rows.map(function (row) {
        return row['' + i];
      }),
      argment: argments[i]
    };
  });

  var toHead = function toHead(row) {
    var text = row && row.map(function (r) {
      return r.props.children;
    }).join('');
    return text && text[0] === "#" ? text.slice(1) : null;
  };

  var styles = {
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

  var getUpper = function getUpper(chart) {
    return chart.charAt(0).toUpperCase() + chart.slice(1);
  };

  var getType = function getType(argment) {
    return argment ? "fadeIn".concat(getUpper(argment === 'center' ? 'up' : argment)) : null;
  };

  var Animation = function Animation(props) {
    return props.argment ? /*#__PURE__*/React.createElement(MDBAnimation, {
      reveal: true,
      type: getType(props.argment),
      __self: _this$a,
      __source: {
        fileName: _jsxFileName$a,
        lineNumber: 19,
        columnNumber: 45
      }
    }, props.children) : props.children;
  };

  return /*#__PURE__*/React.createElement(MDBRow, {
    __self: _this$a,
    __source: {
      fileName: _jsxFileName$a,
      lineNumber: 21,
      columnNumber: 9
    }
  }, cards && cards.map(function (card, i) {
    return /*#__PURE__*/React.createElement(MDBCol, {
      key: i,
      style: styles.col,
      __self: _this$a,
      __source: {
        fileName: _jsxFileName$a,
        lineNumber: 23,
        columnNumber: 17
      }
    }, /*#__PURE__*/React.createElement(Animation, {
      argment: card.argment,
      __self: _this$a,
      __source: {
        fileName: _jsxFileName$a,
        lineNumber: 24,
        columnNumber: 21
      }
    }, /*#__PURE__*/React.createElement(MDBCard, {
      style: styles.card,
      __self: _this$a,
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
      __self: _this$a,
      __source: {
        fileName: _jsxFileName$a,
        lineNumber: 26,
        columnNumber: 29
      }
    }), /*#__PURE__*/React.createElement(MDBCardBody, {
      __self: _this$a,
      __source: {
        fileName: _jsxFileName$a,
        lineNumber: 28,
        columnNumber: 29
      }
    }, /*#__PURE__*/React.createElement(MDBCardTitle, {
      __self: _this$a,
      __source: {
        fileName: _jsxFileName$a,
        lineNumber: 29,
        columnNumber: 33
      }
    }, card.column.label[0].props.alt), card.rows && card.rows.map(function (row, j) {
      return /*#__PURE__*/React.createElement(MDBCardText, {
        key: j,
        __self: _this$a,
        __source: {
          fileName: _jsxFileName$a,
          lineNumber: 31,
          columnNumber: 37
        }
      }, toHead(row) || row);
    })))));
  }));
};

var _this$b = undefined,
    _jsxFileName$b = "C:\\Users\\yousei takei\\_dj\\mdmd\\src\\components\\Table\\Table.js";

var Table = function Table(props) {
  var indexProps = props.indexProps,
      data = props.data,
      className = props.className,
      color = props.color,
      style = props.style;
  var bordered = indexProps.bordered,
      maxHeight = indexProps.maxHeight,
      paging = indexProps.paging,
      searching = indexProps.searching,
      scrollX = indexProps.scrollX,
      scrollY = indexProps.scrollY,
      small = indexProps.small,
      sorting = indexProps.sorting,
      striped = indexProps.striped;
  var tableState = {
    bordered: bordered,
    maxHeight: maxHeight,
    paging: paging,
    searching: searching,
    scrollX: scrollX,
    scrollY: scrollY,
    small: small,
    sorting: sorting,
    striped: striped
  };

  var state = _objectSpread2({
    data: data,
    className: className,
    color: color,
    style: style
  }, tableState);

  return /*#__PURE__*/React.createElement(MDBDataTable, _extends({}, state, {
    __self: _this$b,
    __source: {
      fileName: _jsxFileName$b,
      lineNumber: 9,
      columnNumber: 12
    }
  }));
};

var _this$c = undefined,
    _jsxFileName$c = "C:\\Users\\yousei takei\\_dj\\mdmd\\src\\components\\Table\\Pills.js";

var Pills = function Pills(props) {
  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      tab = _useState2[0],
      setTab = _useState2[1];

  var className = props.className,
      columns = props.columns,
      rows = props.rows;

  var Aux = function Aux(props) {
    return props.children;
  };

  var getarr = function getarr(arr) {
    return arr ? arr instanceof Array ? arr : [arr] : [];
  };

  var getAnyChild = function getAnyChild(props, key) {
    return getarr(props.children).filter(function (c) {
      return c.key && c.key.match(key);
    });
  }; //[g0,..]or[]


  var isPill = columns.every(function (col) {
    return col.label.every(function (c) {
      return getAnyChild(c.props, 'emphasis').length;
    });
  });
  var cards = columns.map(function (column, i) {
    return {
      column: column,
      rows: rows.map(function (row) {
        return row['' + i];
      })
    };
  });

  var togglePills = function togglePills(num, event) {
    event.preventDefault(); //?

    if (tab !== num) setTab(num);
  };

  return /*#__PURE__*/React.createElement(Aux, {
    __self: _this$c,
    __source: {
      fileName: _jsxFileName$c,
      lineNumber: 22,
      columnNumber: 9
    }
  }, /*#__PURE__*/React.createElement(MDBNav, {
    style: {
      border: "none"
    },
    className: className + " mt-5 nav-".concat(isPill ? 'pills' : 'tabs'),
    __self: _this$c,
    __source: {
      fileName: _jsxFileName$c,
      lineNumber: 23,
      columnNumber: 13
    }
  }, cards && cards.map(function (card, i) {
    return /*#__PURE__*/React.createElement(MDBNavItem, {
      key: i,
      __self: _this$c,
      __source: {
        fileName: _jsxFileName$c,
        lineNumber: 26,
        columnNumber: 17
      }
    }, /*#__PURE__*/React.createElement(MDBNavLink, {
      link: true,
      to: "#",
      active: tab === i,
      onClick: function onClick(e) {
        return togglePills(i, e);
      },
      __self: _this$c,
      __source: {
        fileName: _jsxFileName$c,
        lineNumber: 27,
        columnNumber: 20
      }
    }, card.column.label.map(function (l) {
      return l.props.children;
    })));
  })), /*#__PURE__*/React.createElement(MDBTabContent, {
    activeItem: "" + tab,
    __self: _this$c,
    __source: {
      fileName: _jsxFileName$c,
      lineNumber: 34,
      columnNumber: 13
    }
  }, cards && cards.map(function (card, i) {
    return /*#__PURE__*/React.createElement(MDBTabPane, {
      key: i,
      tabId: i + "",
      __self: _this$c,
      __source: {
        fileName: _jsxFileName$c,
        lineNumber: 36,
        columnNumber: 17
      }
    }, /*#__PURE__*/React.createElement("p", {
      __self: _this$c,
      __source: {
        fileName: _jsxFileName$c,
        lineNumber: 37,
        columnNumber: 21
      }
    }, " ", card.rows, " "));
  })));
};

var _this$d = undefined,
    _jsxFileName$d = "C:\\Users\\yousei takei\\_dj\\mdmd\\src\\components\\Table\\index.js";

var Mdmd$3 = function Mdmd(props) {
  var className = props.className,
      color = props.color,
      style = props.style;

  var getarr = function getarr(arr) {
    return arr ? arr instanceof Array ? arr : [arr] : [];
  };

  var heads = getarr(props.children).filter(function (v) {
    return v.key.match("tableHead");
  });
  var bodys = getarr(props.children).filter(function (v) {
    return v.key.match("tableBody");
  });

  var gettrs = function gettrs(els) {
    var _ref;

    return (_ref = []).concat.apply(_ref, _toConsumableArray(els.map(function (el) {
      return getarr(el.props.children);
    })));
  };

  var getths = function getths(row) {
    return getarr(row.props.children).map(function (el) {
      return getarr(el.props.children);
    });
  };

  var getcol = function getcol(els) {
    return els.map(function (c, i) {
      return {
        label: c,
        field: "" + i,
        sort: "asc",
        width: 10
      };
    });
  };

  var getrow = function getrow(els) {
    return els.length ? Object.assign.apply(Object, _toConsumableArray(els.map(function (c, i) {
      return _defineProperty({}, "" + i, c);
    }))) : {};
  };

  var getkey = function getkey(els) {
    var _ref3;

    return (_ref3 = []).concat.apply(_ref3, _toConsumableArray(els.map(function (el) {
      return el;
    }))).map(function (v) {
      return v.key;
    });
  };

  var columns = gettrs(heads).map(function (v) {
    return getths(v);
  }).map(function (th) {
    return getcol(th);
  })[0];
  var rows = gettrs(bodys).map(function (v) {
    return getths(v);
  }).map(function (th) {
    return getrow(th);
  });
  var keys = gettrs(heads).map(function (v) {
    return getths(v);
  }).map(function (th) {
    return getkey(th);
  })[0]; //const getAnyGrand =(props,k1,k2)=>getAnyChild(props,k1).map(c=>getAnyChild(c.props,k2)).filter(g=>g.length)

  var state = {
    className: className,
    color: color,
    style: style,
    columns: columns,
    rows: rows,
    keys: keys
  };
  if (keys.every(function (key) {
    return key.match('image');
  })) return /*#__PURE__*/React.createElement(Cards, _extends({}, state, {
    argments: props.columnAlignment,
    __self: _this$d,
    __source: {
      fileName: _jsxFileName$d,
      lineNumber: 24,
      columnNumber: 16
    }
  }));
  if (keys.every(function (key) {
    return key.match('link');
  })) return /*#__PURE__*/React.createElement(Pills, _extends({}, state, {
    __self: _this$d,
    __source: {
      fileName: _jsxFileName$d,
      lineNumber: 26,
      columnNumber: 16
    }
  }));
  return /*#__PURE__*/React.createElement(Table, {
    indexProps: props,
    data: {
      columns: columns,
      rows: rows
    },
    __self: _this$d,
    __source: {
      fileName: _jsxFileName$d,
      lineNumber: 27,
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

var _this$e = undefined,
    _jsxFileName$e = "C:\\Users\\yousei takei\\_dj\\mdmd\\src\\components\\List\\List.js";

var List = function List(props) {
  var className = props.className;
  var state = {
    className: className
  };
  var style = {
    margin: "auto auto"
  };
  return /*#__PURE__*/React.createElement(MDBListGroup, _extends({}, state, {
    style: style,
    __self: _this$e,
    __source: {
      fileName: _jsxFileName$e,
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

var _this$f = undefined,
    _jsxFileName$f = "C:\\Users\\yousei takei\\_dj\\mdmd\\src\\components\\List\\Navi.js";

var Mdmd$4 = function Mdmd(props) {
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var children = props.children,
      className = props.className,
      getArray = props.getArray,
      getText = props.getText,
      getLink = props.getLink;

  var toggleCollapse = function toggleCollapse() {
    return setIsOpen(!isOpen);
  };

  var state = {
    color: "default-color",
    dark: true,
    expand: "md",
    fixed: "top",
    scrolling: true,
    transparent: true,
    className: className
  };
  return /*#__PURE__*/React.createElement(MDBNavbar, _extends({}, state, {
    __self: _this$f,
    __source: {
      fileName: _jsxFileName$f,
      lineNumber: 15,
      columnNumber: 9
    }
  }), /*#__PURE__*/React.createElement(MDBNavbarBrand, {
    href: getLink(children[0].props),
    __self: _this$f,
    __source: {
      fileName: _jsxFileName$f,
      lineNumber: 16,
      columnNumber: 13
    }
  }, /*#__PURE__*/React.createElement("strong", {
    className: "white-text",
    __self: _this$f,
    __source: {
      fileName: _jsxFileName$f,
      lineNumber: 17,
      columnNumber: 17
    }
  }, getText(children[0].props))), /*#__PURE__*/React.createElement(MDBNavbarToggler, {
    onClick: toggleCollapse,
    __self: _this$f,
    __source: {
      fileName: _jsxFileName$f,
      lineNumber: 19,
      columnNumber: 13
    }
  }), /*#__PURE__*/React.createElement(MDBCollapse, {
    id: "navbarCollapse3",
    isOpen: isOpen,
    navbar: true,
    __self: _this$f,
    __source: {
      fileName: _jsxFileName$f,
      lineNumber: 20,
      columnNumber: 13
    }
  }, /*#__PURE__*/React.createElement(MDBNavbarNav, {
    left: true,
    __self: _this$f,
    __source: {
      fileName: _jsxFileName$f,
      lineNumber: 21,
      columnNumber: 17
    }
  }, getArray(children).filter(function (c, i) {
    return i > 0;
  }).map(function (c, i) {
    return /*#__PURE__*/React.createElement(MDBNavItem, {
      key: i,
      active: window.location.href.match(getLink(c.props)) ? true : false,
      onClick: function onClick() {
        window.location.href = getLink(c.props);
      },
      __self: _this$f,
      __source: {
        fileName: _jsxFileName$f,
        lineNumber: 23,
        columnNumber: 21
      }
    }, /*#__PURE__*/React.createElement(MDBNavLink, {
      to: "#",
      __self: _this$f,
      __source: {
        fileName: _jsxFileName$f,
        lineNumber: 26,
        columnNumber: 25
      }
    }, getText(c.props)));
  }))));
};

Mdmd$4.propTypes = {
  active: PropTypes.bool
};
Mdmd$4.defaultProps = {
  active: false,
  className: ''
};

var _this$g = undefined,
    _jsxFileName$g = "C:\\Users\\yousei takei\\_dj\\mdmd\\src\\components\\List\\Foot.js";

var Mdmd$5 = function Mdmd(props) {
  var children = props.children,
      getArray = props.getArray,
      getText = props.getText,
      getLink = props.getLink;
  var className = 'footer-copyright text-center font-small py-3' + props.className;
  var style = {
    position: "relative",
    bottom: "0",
    overflow: "hidden",
    maxWidth: "99vw",
    left: "50%",
    right: "50%",
    marginLeft: "-50vw",
    marginRight: "-50vw"
  };
  var state = {
    className: className,
    color: "default-color",
    style: style
  };
  return /*#__PURE__*/React.createElement(MDBFooter, _extends({}, state, {
    __self: _this$g,
    __source: {
      fileName: _jsxFileName$g,
      lineNumber: 14,
      columnNumber: 9
    }
  }), /*#__PURE__*/React.createElement(MDBContainer, {
    fluid: true,
    __self: _this$g,
    __source: {
      fileName: _jsxFileName$g,
      lineNumber: 15,
      columnNumber: 13
    }
  }, /*#__PURE__*/React.createElement(MDBRow, {
    __self: _this$g,
    __source: {
      fileName: _jsxFileName$g,
      lineNumber: 16,
      columnNumber: 17
    }
  }, getArray(children).map(function (c, i) {
    return /*#__PURE__*/React.createElement(MDBCol, {
      key: i,
      onClick: function onClick() {
        window.location.href = getLink(c.props);
      },
      __self: _this$g,
      __source: {
        fileName: _jsxFileName$g,
        lineNumber: 18,
        columnNumber: 25
      }
    }, getText(c.props));
  }))));
};

Mdmd$5.propTypes = {
  active: PropTypes.bool
};
Mdmd$5.defaultProps = {
  active: false,
  className: '',
  color: "default-color"
};

var _this$h = undefined,
    _jsxFileName$h = "C:\\Users\\yousei takei\\_dj\\mdmd\\src\\components\\List\\Drop.js";

var Mdmd$6 = function Mdmd(props) {
  var children = props.children,
      className = props.className,
      getArray = props.getArray,
      getText = props.getText,
      getLink = props.getLink;
  var state = {
    className: className
  };
  return /*#__PURE__*/React.createElement(MDBDropdown, _extends({}, state, {
    __self: _this$h,
    __source: {
      fileName: _jsxFileName$h,
      lineNumber: 10,
      columnNumber: 9
    }
  }), /*#__PURE__*/React.createElement(MDBDropdownToggle, {
    caret: true,
    color: "default",
    __self: _this$h,
    __source: {
      fileName: _jsxFileName$h,
      lineNumber: 11,
      columnNumber: 13
    }
  }, getText(children[0].props)), /*#__PURE__*/React.createElement(MDBDropdownMenu, {
    basic: true,
    __self: _this$h,
    __source: {
      fileName: _jsxFileName$h,
      lineNumber: 14,
      columnNumber: 13
    }
  }, getArray(children).filter(function (c, i) {
    return i > 0;
  }).map(function (c, i) {
    return /*#__PURE__*/React.createElement(MDBDropdownItem, {
      key: i,
      onClick: function onClick() {
        window.location.href = getLink(c.props);
      },
      __self: _this$h,
      __source: {
        fileName: _jsxFileName$h,
        lineNumber: 16,
        columnNumber: 17
      }
    }, getText(c.props) || c.props.children);
  })));
};

Mdmd$6.propTypes = {
  active: PropTypes.bool
};
Mdmd$6.defaultProps = {
  active: false,
  className: ''
};

var _this$i = undefined,
    _jsxFileName$i = "C:\\Users\\yousei takei\\_dj\\mdmd\\src\\components\\List\\index.js";

var Mdmd$7 = function Mdmd(props) {
  //grands:i want to know as g0 is btn? link? g0.child is ?
  //i want know g0 have 'link' child and g0 have 'strong' grandchild.
  var children = props.children,
      className = props.className,
      color = props.color,
      style = props.style;

  var getArray = function getArray(arr) {
    return arr ? (arr instanceof Array ? arr : [arr]).filter(function (a) {
      return a;
    }) : [];
  };

  var getAnyChild = function getAnyChild(props, key) {
    return getArray(props.children).filter(function (c) {
      return c.key && c.key.match(key);
    });
  }; //[g0,..]or[]


  var getAnyGrand = function getAnyGrand(props, k1, k2) {
    return getAnyChild(props, k1).map(function (c) {
      return getAnyChild(c.props, k2);
    }).filter(function (g) {
      return g.length;
    });
  };

  var getText = function getText(props) {
    return getArray(props.children).map(function (c) {
      return c.key && c.key.match('link') ? c.props.children : c;
    });
  };

  var getLink = function getLink(props) {
    return getArray(props.children).map(function (c) {
      return c.key && c.key.match('link') ? c.props.href : '#!';
    }).filter(function (n) {
      return n;
    })[0] || '#!';
  };

  var state = {
    className: className,
    color: color,
    style: style,
    children: children,
    getArray: getArray,
    getAnyChild: getAnyChild,
    getText: getText,
    getLink: getLink
  };

  if (children.every(function (c) {
    return getAnyChild(c.props, 'link').length;
  })) {
    if (children.every(function (c) {
      return getAnyGrand(c.props, 'link', 'strong').length;
    })) return /*#__PURE__*/React.createElement(Mdmd$5, _extends({}, state, {
      __self: _this$i,
      __source: {
        fileName: _jsxFileName$i,
        lineNumber: 21,
        columnNumber: 20
      }
    }));
    if (children.every(function (c) {
      return getAnyGrand(c.props, 'link', 'emphasis').length;
    })) return /*#__PURE__*/React.createElement(Mdmd$4, _extends({}, state, {
      __self: _this$i,
      __source: {
        fileName: _jsxFileName$i,
        lineNumber: 23,
        columnNumber: 20
      }
    }));
    return /*#__PURE__*/React.createElement(Mdmd$6, _extends({}, state, {
      __self: _this$i,
      __source: {
        fileName: _jsxFileName$i,
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
    __self: _this$i,
    __source: {
      fileName: _jsxFileName$i,
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

var _this$j = undefined,
    _jsxFileName$j = "C:\\Users\\yousei takei\\_dj\\mdmd\\src\\components\\ListItem.js";

var ListItem = function ListItem(props) {
  var className = props.className,
      color = props.color,
      style = props.style;
  var state = {
    className: className,
    color: color,
    style: style
  };
  return /*#__PURE__*/React.createElement(MDBListGroupItem, _extends({}, state, {
    __self: _this$j,
    __source: {
      fileName: _jsxFileName$j,
      lineNumber: 9,
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

var _this$k = undefined,
    _jsxFileName$k = "C:\\Users\\yousei takei\\_dj\\mdmd\\src\\components\\Heading.js";

var Heading = function Heading(props) {
  var abbr = props.abbr,
      active = props.active,
      variant = props.variant,
      className = props.className,
      color = props.color,
      style = props.style;
  var state = {
    abbr: abbr,
    active: active,
    className: className,
    color: color,
    style: style
  };
  var addvariant = variant ? '-' + variant : '';
  return /*#__PURE__*/React.createElement(MDBTypography, _extends({}, state, {
    tag: "h" + props.level,
    variant: "h".concat(props.level).concat(addvariant),
    __self: _this$k,
    __source: {
      fileName: _jsxFileName$k,
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

var _this$l = undefined,
    _jsxFileName$l = "C:\\Users\\yousei takei\\_dj\\mdmd\\src\\components\\Code\\Code.js";

var Code = function Code(props) {
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isCopied = _useState2[0],
      setIsCopied = _useState2[1];

  var value = props.value,
      language = props.language,
      inline = props.inline;
  var display = inline ? "inline-block" : "fixed";
  var inlineStyle = inline ? {
    verticalAlign: "top",
    padding: "0 0"
  } : {};
  var styles = {
    pre: _objectSpread2({
      position: 'relative',
      display: display
    }, inlineStyle)
  };

  var handleCopy = function handleCopy(e, v) {
    setIsCopied(true);
    navigator.clipboard.writeText(v);
  };

  return /*#__PURE__*/React.createElement(Light, {
    PreTag: inline ? "span" : "pre",
    style: style,
    customStyle: styles.pre,
    onDoubleClick: function onDoubleClick(e) {
      return handleCopy(e, value);
    },
    useInlineStyles: true,
    showLineNumbers: !inline,
    language: language,
    __self: _this$l,
    __source: {
      fileName: _jsxFileName$l,
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

var _this$m = undefined,
    _jsxFileName$m = "C:\\Users\\yousei takei\\_dj\\mdmd\\src\\components\\InlineCode.js";

var InlineCode = function InlineCode(props) {
  return /*#__PURE__*/React.createElement(Code, _extends({}, props, {
    inline: true,
    __self: _this$m,
    __source: {
      fileName: _jsxFileName$m,
      lineNumber: 8,
      columnNumber: 12
    }
  }));
};

var _this$n = undefined,
    _jsxFileName$n = "C:\\Users\\yousei takei\\_dj\\mdmd\\src\\components\\Math.js";

var Math = function Math(props) {
  var inline = props.inline,
      value = props.value;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isCopied = _useState2[0],
      setIsCopied = _useState2[1];

  var handleCopy = function handleCopy(e, v) {
    setIsCopied(true);
    navigator.clipboard.writeText(v);
  };

  return /*#__PURE__*/React.createElement(MathJax.Node, {
    inline: inline,
    formula: value,
    onDoubleClick: function onDoubleClick(e) {
      return handleCopy(e, value);
    },
    __self: _this$n,
    __source: {
      fileName: _jsxFileName$n,
      lineNumber: 12,
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

var _this$o = undefined,
    _jsxFileName$o = "C:\\Users\\yousei takei\\_dj\\mdmd\\src\\components\\InlineMath.js";

var InlineMath = function InlineMath(props) {
  return /*#__PURE__*/React.createElement(Math, _extends({}, props, {
    inline: true,
    __self: _this$o,
    __source: {
      fileName: _jsxFileName$o,
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

var _this$p = undefined,
    _jsxFileName$p = "C:\\Users\\yousei takei\\_dj\\mdmd\\src\\Mdmd.js";
var renderersKey = Object.keys(Renderers);

var Mdmd$8 = function Mdmd(props) {
  /******************** for props.path ********************/
  var _useState = useState(props.source),
      _useState2 = _slicedToArray(_useState, 2),
      source = _useState2[0],
      setSource = _useState2[1];

  useEffect(function () {
    if (props.path) fetch(props.path).then(function (res) {
      return res.text();
    }).then(function (res) {
      return setSource(res);
    });
  }, [source, props.path]);
  /******************** for render () ********************/

  var renderersMdmd = Object.assign.apply(Object, _toConsumableArray(renderersKey.map(function (key) {
    var lowerKey = key.charAt(0).toLowerCase() + key.slice(1);
    var Renderer = Renderers[key];

    var className = _objectSpread2(_objectSpread2({}, props.className), props["className".concat(key)]);

    var color = _objectSpread2(_objectSpread2({}, props.color), props["color".concat(key)]);

    var style = _objectSpread2(_objectSpread2({}, props.style), props["style".concat(key)]);

    var state = _objectSpread2(_objectSpread2(_objectSpread2({}, className), color), style);

    return _defineProperty({}, lowerKey, function (props) {
      return /*#__PURE__*/React.createElement(Renderer, _extends({}, state, props, {
        __self: _this$p,
        __source: {
          fileName: _jsxFileName$p,
          lineNumber: 29,
          columnNumber: 35
        }
      }));
    });
  })));

  var renderers = _objectSpread2(_objectSpread2({}, renderersMdmd), props.renderers);

  var plugins = [RemarkMathPlugin];
  var state = {
    source: source,
    renderers: renderers,
    plugins: plugins
  };
  var options = ['escapeHtml', 'skipHtml', 'sourcePos', 'rawSourcePos', 'includeNodeIndex', 'allowedTypes', 'disallowedTypes', 'unwrapDisallowed', 'allowNode', 'linkTarget', 'transformLinkUri', 'transformImageUrl'].filter(function (name) {
    return name in props;
  }).map(function (name) {
    return _defineProperty({}, name, props[name]);
  });
  var optionsState = options.length ? Object.assign.apply(Object, _toConsumableArray(options)) : {};
  return /*#__PURE__*/React.createElement(MathJax.Provider, {
    input: "tex",
    __self: _this$p,
    __source: {
      fileName: _jsxFileName$p,
      lineNumber: 42,
      columnNumber: 9
    }
  }, /*#__PURE__*/React.createElement(ReactMarkdown, _extends({}, optionsState, state, {
    __self: _this$p,
    __source: {
      fileName: _jsxFileName$p,
      lineNumber: 43,
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
Mdmd$8.defaultProps = _objectSpread2(_objectSpread2(_objectSpread2({
  /*----------main----------*/
  path: null,
  source: '',
  renderers: {},

  /*----------sub----------*/
  className: '',
  color: "default",
  style: {}
}, Object.assign.apply(Object, _toConsumableArray(renderersKey.map(function (k) {
  return _defineProperty({}, "className".concat(k), {});
})))), Object.assign.apply(Object, _toConsumableArray(renderersKey.map(function (k) {
  return _defineProperty({}, "color".concat(k), {});
})))), Object.assign.apply(Object, _toConsumableArray(renderersKey.map(function (k) {
  return _defineProperty({}, "style".concat(k), {});
}))));

export default Mdmd$8;
export { Blockquote, Code, Delete, Heading, Mdmd$2 as Image, InlineCode, InlineMath, Mdmd$1 as Link, Mdmd$7 as List, ListItem, Math, Paragraph, Root, Mdmd$3 as Table, Mdmd as Text };
