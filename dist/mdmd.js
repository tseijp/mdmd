'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var ReactMarkdown = _interopDefault(require('react-markdown'));
var MathJax = _interopDefault(require('react-mathjax'));
var RemarkMathPlugin = _interopDefault(require('remark-math'));
var mdbreact = require('mdbreact');
var reactSyntaxHighlighter = require('react-syntax-highlighter');

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

var Root = function Root(props) {
  var className = props.className,
      color = props.color,
      style = props.style;
  var state = {
    className: className,
    color: color,
    style: style
  };
  return /*#__PURE__*/React__default.createElement(mdbreact.MDBContainer, state, props.children);
};

Root.defaultProps = {
  className: '',
  coor: '',
  style: {}
};
/*props
  - children
*/

//import classNames from 'classnames';
var Mdmd = function Mdmd(props) {
  var color = props.color,
      style = props.style;
  var className = (color ? "".concat(color, "-text ") : '') + props.className;
  var state = {
    className: className,
    color: color,
    style: style
  };
  return /*#__PURE__*/React__default.createElement("span", state, props.children);
};

Mdmd.defaultProps = {
  className: '',
  color: '',
  style: {}
};

//import classNames from 'classnames';
var Paragraph = function Paragraph(props) {
  var className = props.className,
      color = props.color,
      style = props.style;
  var state = {
    className: className,
    color: color,
    style: style
  };
  return /*#__PURE__*/React__default.createElement("div", state, props.children);
};

Paragraph.defaultProps = {
  className: ''
};

var Grid = function Grid(props) {
  var child = props.child;

  var isBlock = function isBlock(c) {
    return !c.key || c.key.match('blockquote') || c.key.match('paragraph');
  };

  var renderChild = function renderChild(child) {
    if (child instanceof Array && child.every(function (c) {
      return isBlock(c);
    })) {
      return /*#__PURE__*/React__default.createElement(mdbreact.MDBRow, null, child.map(function (c, i) {
        return /*#__PURE__*/React__default.createElement(mdbreact.MDBCol, {
          key: i
        }, c instanceof Array ? renderChild(c) : c);
      }));
    }

    return child;
  };

  return renderChild(child);
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
    return /*#__PURE__*/React__default.createElement(mdbreact.MDBTypography, {
      blockquote: true
    }, /*#__PURE__*/React__default.createElement(mdbreact.MDBBox, {
      tag: "div",
      mb: 0
    }, child));
  }

  return /*#__PURE__*/React__default.createElement(Grid, state);
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

var Delete = function Delete(props) {
  var className = props.className,
      color = props.color,
      style = props.style;
  var state = {
    className: className,
    color: color,
    style: style
  };
  return /*#__PURE__*/React__default.createElement(mdbreact.MDBBadge, state, "\xD7", props.children);
};

Delete.defaultProps = {
  //  active: false,
  className: '',
  color: 'danger',
  style: {}
};

var Button = function Button(props) {
  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpened = _useState2[0],
      setIsOpened = _useState2[1];

  var className = props.className,
      style = props.style,
      social = props.social,
      level = props.level,
      href = props.href,
      is_1 = props.is_1,
      is_2 = props.is_2,
      is_3 = props.is_3;
  var color = props.color.replace('-color', '');

  var onClick = function onClick() {
    setIsOpened(true);
    props.onClick();
  };

  var buttonStyle = social ? {
    social: social
  } : {
    color: color
  };

  var state = _objectSpread2({
    onClick: onClick,
    level: level,
    className: className,
    style: style
  }, is_3 && {
    outline: true
  });

  var hoverText = href.length > 30 ? href.slice(0, 30) + "..." : href;
  return /*#__PURE__*/React__default.createElement(mdbreact.MDBTooltip, {
    domElement: true,
    tag: "span",
    placement: "bottom"
  }, /*#__PURE__*/React__default.createElement("span", null, is_1 && /*#__PURE__*/React__default.createElement(mdbreact.MDBBadge, _extends({
    color: props.color
  }, state), props.children), (is_2 || is_3) && /*#__PURE__*/React__default.createElement(mdbreact.MDBBtn, _extends({}, buttonStyle, state), props.children)), /*#__PURE__*/React__default.createElement("span", null, isOpened ? 'Opened' : hoverText));
};

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
  if (is_1 || is_2 || is_3) return /*#__PURE__*/React__default.createElement(Button, _extends({}, state, ButtonState, {
    href: props.href
  }), props.children);
  return /*#__PURE__*/React__default.createElement("span", state, /*#__PURE__*/React__default.createElement("u", null, props.children));
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
  return /*#__PURE__*/React__default.createElement(mdbreact.MDBView, {
    hover: true
  }, /*#__PURE__*/React__default.createElement("img", _extends({
    alt: ""
  }, state)), /*#__PURE__*/React__default.createElement(mdbreact.MDBMask, {
    className: "flex-center",
    overlay: "white-light"
  }, /*#__PURE__*/React__default.createElement("p", {
    className: "black-text",
    style: styles.alt
  }, alt)));
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

  if (alt.slice(0, 1).match(':')) return /*#__PURE__*/React__default.createElement(mdbreact.MDBIcon, {
    icon: alt.slice(1)
  });
  return /*#__PURE__*/React__default.createElement(Image, state);
};

Mdmd$2.defaultProps = {
  className: '',
  color: 'dafault'
};

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
    return props.argment ? /*#__PURE__*/React__default.createElement(mdbreact.MDBAnimation, {
      reveal: true,
      type: getType(props.argment)
    }, props.children) : props.children;
  };

  return /*#__PURE__*/React__default.createElement(mdbreact.MDBRow, null, cards && cards.map(function (card, i) {
    return /*#__PURE__*/React__default.createElement(mdbreact.MDBCol, {
      key: i,
      style: styles.col
    }, /*#__PURE__*/React__default.createElement(Animation, {
      argment: card.argment
    }, /*#__PURE__*/React__default.createElement(mdbreact.MDBCard, {
      style: styles.card
    }, /*#__PURE__*/React__default.createElement(mdbreact.MDBCardImage, {
      style: styles.cardImage,
      className: "img-fluid",
      src: card.column.label[0].props.src,
      waves: true
    }), /*#__PURE__*/React__default.createElement(mdbreact.MDBCardBody, null, /*#__PURE__*/React__default.createElement(mdbreact.MDBCardTitle, null, card.column.label[0].props.alt), card.rows && card.rows.map(function (row, j) {
      return /*#__PURE__*/React__default.createElement(mdbreact.MDBCardText, {
        key: j
      }, toHead(row) || row);
    })))));
  }));
};

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

  return /*#__PURE__*/React__default.createElement(mdbreact.MDBDataTable, state);
};

var Pills = function Pills(props) {
  var _useState = React.useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      tab = _useState2[0],
      setTab = _useState2[1];

  var className = props.className,
      isPill = props.isPill,
      columns = props.columns,
      rows = props.rows;

  var Aux = function Aux(props) {
    return props.children;
  }; //const getarr =arr=>arr?arr instanceof Array?arr:[arr]:[]
  //const isPill = columns.every( col=>col.label.every(c=>getAnyChild(c.props,'emphasis').length) )


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

  return /*#__PURE__*/React__default.createElement(Aux, null, /*#__PURE__*/React__default.createElement(mdbreact.MDBNav, {
    style: {
      border: "none"
    },
    className: className + " mt-5 nav-".concat(isPill ? 'pills' : 'tabs')
  }, cards && cards.map(function (card, i) {
    return /*#__PURE__*/React__default.createElement(mdbreact.MDBNavItem, {
      key: i
    }, /*#__PURE__*/React__default.createElement(mdbreact.MDBNavLink, {
      link: true,
      to: "#",
      active: tab === i,
      onClick: function onClick(e) {
        return togglePills(i, e);
      }
    }, card.column.label.map(function (l) {
      return l.props.children;
    })));
  })), /*#__PURE__*/React__default.createElement(mdbreact.MDBTabContent, {
    activeItem: "" + tab
  }, cards && cards.map(function (card, i) {
    return /*#__PURE__*/React__default.createElement(mdbreact.MDBTabPane, {
      key: i,
      tabId: i + ""
    }, /*#__PURE__*/React__default.createElement("p", null, " ", card.rows, " "));
  })));
};

var Modal = function Modal(props) {
  var columns = props.columns,
      rows = props.rows,
      argments = props.argments,
      className = props.className,
      style = props.style; //keys

  var _useState = React.useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      modalNum = _useState2[0],
      setModalNum = _useState2[1];

  var cards = columns.map(function (column, i) {
    return {
      column: column,
      rows: rows.map(function (row) {
        return row['' + i];
      }),
      argment: argments[i]
    };
  });
  var color = props.color.replace('-color', '');
  var state = {
    className: className,
    color: color,
    style: style
  };

  var Aux = function Aux(props) {
    return props.children;
  };

  return /*#__PURE__*/React__default.createElement(Aux, null, cards.map(function (card, i) {
    return /*#__PURE__*/React__default.createElement(Aux, {
      key: i
    }, /*#__PURE__*/React__default.createElement(mdbreact.MDBBtn, _extends({}, state, {
      onClick: function onClick() {
        return setModalNum(modalNum === i ? null : i);
      }
    }), card.column.label[0].props.children[0].props.children), /*#__PURE__*/React__default.createElement(mdbreact.MDBModal, {
      fullHeight: true,
      position: "right",
      isOpen: modalNum === i,
      toggle: function toggle() {
        return setModalNum(null);
      }
    }, /*#__PURE__*/React__default.createElement(mdbreact.MDBModalHeader, {
      toggle: function toggle() {
        return setModalNum(null);
      }
    }, card.column.label[0].props.children), /*#__PURE__*/React__default.createElement(mdbreact.MDBModalBody, null, card.rows), /*#__PURE__*/React__default.createElement(mdbreact.MDBModalFooter, null, /*#__PURE__*/React__default.createElement(mdbreact.MDBBtn, _extends({}, state, {
      onClick: function onClick() {
        return setModalNum(null);
      }
    }), "Close"))));
  }));
};

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
  })[0];
  var state = {
    className: className,
    color: color,
    style: style,
    columns: columns,
    rows: rows,
    keys: keys
  };

  var getAnyChild = function getAnyChild(props, key) {
    return getarr(props.children).filter(function (c) {
      return c.key && c.key.match(key);
    });
  }; //[g0,..]or[]
  //const getAnyGrand =(props,k1,k2)=>getAnyChild(props,k1).map(c=>getAnyChild(c.props,k2)).filter(g=>g.length)


  var getIsX = function getIsX(els, key) {
    return els.every(function (el) {
      return el.label.every(function (c) {
        return getAnyChild(c.props, key).length;
      });
    });
  };

  if (keys.every(function (key) {
    return key.match('image');
  })) return /*#__PURE__*/React__default.createElement(Cards, _extends({}, state, {
    argments: props.columnAlignment
  }));

  if (keys.every(function (key) {
    return key.match('link');
  })) {
    if (getIsX(columns, 'delete')) return /*#__PURE__*/React__default.createElement(Modal, _extends({}, state, {
      argments: props.columnAlignment
    }));
    return /*#__PURE__*/React__default.createElement(Pills, _extends({}, state, {
      isPill: getIsX(columns, 'emphasis')
    }));
  }

  return /*#__PURE__*/React__default.createElement(Table, {
    indexProps: props,
    data: {
      columns: columns,
      rows: rows
    }
  });
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

var List = function List(props) {
  var className = props.className;

  var style = _objectSpread2({
    margin: "auto auto"
  }, props.style);

  var state = {
    className: className,
    style: style
  };
  return /*#__PURE__*/React__default.createElement(mdbreact.MDBListGroup, _extends({}, state, {
    style: style
  }), props.children);
};

List.defaultProps = {
  active: false,
  className: ''
};

var Mdmd$4 = function Mdmd(props) {
  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var children = props.children,
      className = props.className,
      color = props.color,
      style = props.style,
      getArray = props.getArray,
      getText = props.getText,
      getLink = props.getLink;

  var toggleCollapse = function toggleCollapse() {
    return setIsOpen(!isOpen);
  };

  var state = {
    color: color,
    dark: true,
    expand: "md",
    fixed: "top",
    scrolling: true,
    transparent: true,
    className: className,
    style: style
  };
  return /*#__PURE__*/React__default.createElement(mdbreact.MDBNavbar, state, /*#__PURE__*/React__default.createElement(mdbreact.MDBNavbarBrand, {
    href: getLink(children[0].props)
  }, /*#__PURE__*/React__default.createElement("strong", {
    className: "white-text"
  }, getText(children[0].props))), /*#__PURE__*/React__default.createElement(mdbreact.MDBNavbarToggler, {
    onClick: toggleCollapse
  }), /*#__PURE__*/React__default.createElement(mdbreact.MDBCollapse, {
    id: "navbarCollapse3",
    isOpen: isOpen,
    navbar: true
  }, /*#__PURE__*/React__default.createElement(mdbreact.MDBNavbarNav, {
    left: true
  }, getArray(children).filter(function (c, i) {
    return i > 0;
  }).map(function (c, i) {
    return /*#__PURE__*/React__default.createElement(mdbreact.MDBNavItem, {
      key: i,
      active: window.location.href.match(getLink(c.props)) ? true : false,
      onClick: function onClick() {
        window.location.href = getLink(c.props);
      }
    }, /*#__PURE__*/React__default.createElement(mdbreact.MDBNavLink, {
      to: "#"
    }, getText(c.props)));
  }))));
};

Mdmd$4.defaultProps = {
  active: false,
  className: ''
};

var Mdmd$5 = function Mdmd(props) {
  var children = props.children,
      color = props.color,
      getArray = props.getArray,
      getText = props.getText,
      getLink = props.getLink;
  var className = 'footer-copyright text-center font-small py-3' + props.className;

  var style = _objectSpread2({
    maxWidth: "99vw",
    left: "50%",
    right: "50%",
    marginLeft: "-50vw",
    marginRight: "-50vw",
    position: "relative",
    bottom: "0",
    overflow: "hidden"
  }, props.style);

  var state = {
    className: className,
    color: color,
    style: style
  };
  return /*#__PURE__*/React__default.createElement(mdbreact.MDBFooter, state, /*#__PURE__*/React__default.createElement(mdbreact.MDBContainer, {
    fluid: true
  }, /*#__PURE__*/React__default.createElement(mdbreact.MDBRow, null, getArray(children).map(function (c, i) {
    return /*#__PURE__*/React__default.createElement(mdbreact.MDBCol, {
      key: i,
      onClick: function onClick() {
        window.location.href = getLink(c.props);
      }
    }, getText(c.props));
  }))));
};

Mdmd$5.defaultProps = {
  active: false,
  className: '',
  color: "default-color"
};

//https://mdbootstrap.com/docs/react/components/dropdowns/

var Mdmd$6 = function Mdmd(props) {
  var children = props.children,
      className = props.className,
      style = props.style,
      getArray = props.getArray,
      getText = props.getText,
      getLink = props.getLink;
  var state = {
    className: className,
    style: style
  };
  var color = props.color.replace('-color', '');
  return /*#__PURE__*/React__default.createElement(mdbreact.MDBDropdown, state, /*#__PURE__*/React__default.createElement(mdbreact.MDBDropdownToggle, {
    caret: true,
    color: color
  }, getText(children[0].props)), /*#__PURE__*/React__default.createElement(mdbreact.MDBDropdownMenu, {
    basic: true
  }, getArray(children).filter(function (c, i) {
    return i > 0;
  }).map(function (c, i) {
    return /*#__PURE__*/React__default.createElement(mdbreact.MDBDropdownItem, {
      key: i,
      onClick: function onClick() {
        window.location.href = getLink(c.props);
      }
    }, getText(c.props) || c.props.children);
  })));
};

Mdmd$6.defaultProps = {
  active: false,
  className: ''
};

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
    })) return /*#__PURE__*/React__default.createElement(Mdmd$5, state);
    if (children.every(function (c) {
      return getAnyGrand(c.props, 'link', 'emphasis').length;
    })) return /*#__PURE__*/React__default.createElement(Mdmd$4, state);
    return /*#__PURE__*/React__default.createElement(Mdmd$6, state);
  } // not used (migrate to table)
  //if( children.every(c=>getAnyChild(c.props, 'image').length ) )
  //    return <Carousel {...state}/>
  //if( children.map(c=>getAnyGrand(c.props, 'link', 'emphasis')).filter(a=>a.length).length )
  //    return <Pill {...state}/>
  //if( children.map(c=>getAnyGrand(c.props, 'link', 'strong')).filter(a=>a.length).length )
  //    return <Tabs {...state}/>


  return /*#__PURE__*/React__default.createElement(List, null, children);
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

var ListItem = function ListItem(props) {
  var className = props.className,
      style = props.style;
  var colors = ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"];
  var color = props.color in colors ? props.color : null;
  var state = {
    className: className,
    color: color,
    style: style
  };
  return /*#__PURE__*/React__default.createElement(mdbreact.MDBListGroupItem, state, props.children);
};

ListItem.defaultProps = {
  active: false,
  color: "light",
  className: ''
};

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
  return /*#__PURE__*/React__default.createElement(mdbreact.MDBTypography, _extends({}, state, {
    tag: "h" + props.level,
    variant: "h".concat(props.level).concat(addvariant)
  }), props.children);
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

var Code = function Code(props) {
  //const [isCopied, setIsCopied] = useState(false);
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
    //setIsCopied(true);
    navigator.clipboard.writeText(v);
  };

  return /*#__PURE__*/React__default.createElement(reactSyntaxHighlighter.Light, {
    PreTag: inline ? "span" : "pre",
    style: style,
    customStyle: styles.pre,
    onDoubleClick: function onDoubleClick(e) {
      return handleCopy(e, value);
    },
    useInlineStyles: true,
    showLineNumbers: !inline,
    language: language
  }, value);
};

Code.defaultProps = {
  className: '',
  coor: '',
  style: {},
  value: '',
  inline: false
};

var InlineCode = function InlineCode(props) {
  return /*#__PURE__*/React__default.createElement(Code, _extends({}, props, {
    inline: true
  }));
};

var Math = function Math(props) {
  var inline = props.inline,
      value = props.value; //const [isCopied, setIsCopied] = useState(false);

  var handleCopy = function handleCopy(e, v) {
    //    setIsCopied(true);
    navigator.clipboard.writeText(v);
  };

  return /*#__PURE__*/React__default.createElement(MathJax.Node, {
    inline: inline,
    formula: value,
    onDoubleClick: function onDoubleClick(e) {
      return handleCopy(e, value);
    }
  });
};

Math.defaultProps = {
  className: '',
  coor: '',
  style: {},
  value: '',
  inline: false
};

var InlineMath = function InlineMath(props) {
  return /*#__PURE__*/React__default.createElement(Math, _extends({}, props, {
    inline: true
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

var renderersKey = Object.keys(Renderers);

var Mdmd$8 = function Mdmd(props) {
  /******************** for props.md ********************/
  var _useState = React.useState(props.source),
      _useState2 = _slicedToArray(_useState, 2),
      source = _useState2[0],
      setSource = _useState2[1];

  React.useEffect(function () {
    if (props.md || props.path) fetch(props.md || props.path).then(function (res) {
      return res.text();
    }).then(function (res) {
      return setSource(res);
    });
  }, [props.md, props.path]);
  React.useEffect(function () {
    if (props.source && source !== props.source) setSource(props.source);
  }, [source, props.source]);
  /******************** for render () ********************/

  var renderersMdmd = Object.assign.apply(Object, _toConsumableArray(renderersKey.map(function (key) {
    var lowerKey = key.charAt(0).toLowerCase() + key.slice(1);
    var Renderer = Renderers[key];
    var className = [props.className, props["className".concat(key)]].filter(function (c) {
      return c;
    }).join(' ');
    var color = props["color".concat(key)] || props.color;

    var style = _objectSpread2(_objectSpread2({}, props.style), props["style".concat(key)]);

    var state = {
      className: className,
      color: color,
      style: style
    };
    return _defineProperty({}, lowerKey, function (props) {
      return /*#__PURE__*/React__default.createElement(Renderer, _extends({}, state, props));
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
  return /*#__PURE__*/React__default.createElement(MathJax.Provider, {
    input: "tex"
  }, /*#__PURE__*/React__default.createElement(ReactMarkdown, _extends({}, optionsState, state)));
};

Mdmd$8.defaultProps = _objectSpread2(_objectSpread2(_objectSpread2({
  /*----------main----------*/
  md: null,

  /*===*/
  path: null,
  source: '',
  renderers: {},

  /*----------sub----------*/
  className: '',
  color: "default-color",
  style: {}
}, Object.assign.apply(Object, _toConsumableArray(renderersKey.map(function (k) {
  return _defineProperty({}, "className".concat(k), null);
})))), Object.assign.apply(Object, _toConsumableArray(renderersKey.map(function (k) {
  return _defineProperty({}, "color".concat(k), null);
})))), Object.assign.apply(Object, _toConsumableArray(renderersKey.map(function (k) {
  return _defineProperty({}, "style".concat(k), null);
}))));

exports.Blockquote = Blockquote;
exports.Code = Code;
exports.Delete = Delete;
exports.Heading = Heading;
exports.Image = Mdmd$2;
exports.InlineCode = InlineCode;
exports.InlineMath = InlineMath;
exports.Link = Mdmd$1;
exports.List = Mdmd$7;
exports.ListItem = ListItem;
exports.Math = Math;
exports.Paragraph = Paragraph;
exports.Root = Root;
exports.Table = Mdmd$3;
exports.Text = Mdmd;
exports.default = Mdmd$8;
