'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var ReactMarkdown = _interopDefault(require('react-markdown'));
var mdbreact = require('mdbreact');
var reactSyntaxHighlighter = require('react-syntax-highlighter');

function createCommonjsModule(fn, basedir, module) {
	return module = {
	  path: basedir,
	  exports: {},
	  require: function (path, base) {
      return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
    }
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var _extends_1 = createCommonjsModule(function (module) {
function _extends() {
  module.exports = _extends = Object.assign || function (target) {
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

module.exports = _extends;
});

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var objectWithoutPropertiesLoose = _objectWithoutPropertiesLoose;

var Root = function Root(_ref) {
  var children = _ref.children,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {
    padding: "0 0 0 0"
  } : _ref$style,
      props = objectWithoutPropertiesLoose(_ref, ["children", "style"]);

  return /*#__PURE__*/React__default.createElement(mdbreact.MDBContainer, _extends_1({
    style: style
  }, props), children);
};

var Text = function Text(_ref) {
  var children = _ref.children,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '' : _ref$color,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style;
  className = (color ? color + "-text " : '') + className;
  return /*#__PURE__*/React__default.createElement("span", {
    children: children,
    className: className,
    color: color,
    style: style
  });
};

var Paragraph = function Paragraph(_ref) {
  var children = _ref.children,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '' : _ref$color,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {
    padding: "0 25px 0 25px"
  } : _ref$style;
  return /*#__PURE__*/React__default.createElement("div", {
    className: className,
    color: color,
    style: style
  }, children);
};

// ************************* **************** ************************* //

var getarr = function getarr(arr) {
  return arr ? arr instanceof Array ? arr : [arr] : [];
};
var gettrs = function gettrs(els) {
  var _ref;

  return (_ref = []).concat.apply(_ref, els.map(function (el) {
    var _el$props;

    return getarr(el == null ? void 0 : (_el$props = el.props) == null ? void 0 : _el$props.children);
  }));
};
var getths = function getths(row) {
  var _row$props;

  return getarr(row == null ? void 0 : (_row$props = row.props) == null ? void 0 : _row$props.children).map(function (el) {
    var _el$props2;

    return getarr(el == null ? void 0 : (_el$props2 = el.props) == null ? void 0 : _el$props2.children);
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
  return Object.assign.apply(Object, [{}].concat(els.map(function (c, i) {
    var _ref2;

    return _ref2 = {}, _ref2["" + i] = c, _ref2;
  })));
};
var getkey = function getkey(els) {
  var _ref3;

  return (_ref3 = []).concat.apply(_ref3, els.map(function (el) {
    return el;
  })).map(function (v) {
    return v.key;
  });
};
var getIsX = function getIsX(els, key) {
  return els.every(function (el) {
    return el.label.every(function (c) {
      return getAnyCh(c.props, key).length;
    });
  });
}; // ************************* 📋 FOR LIST 📋 ************************* //
// * grands : i want to know as g0 is btn? link? g0.child is ?
// * i want know g0 have 'link' child and g0 have 'strong' grandchild.
// ************************* ************** ************************* //

var getAnyCh = function getAnyCh(children, key) {
  return getarr(children).filter(function (c) {
    return c.key && c.key.match(key);
  });
}; //[g0,..]or[]

var getAnyGr = function getAnyGr(children, k, l) {
  return getAnyCh(children, k).map(function (c) {
    var _c$props;

    return getAnyCh(c == null ? void 0 : (_c$props = c.props) == null ? void 0 : _c$props.children, l);
  }).filter(function (g) {
    return g.length;
  });
};
var getText = function getText(children) {
  return getarr(children).map(function (c) {
    return c.key && c.key.match('link') ? c.props.children : c;
  });
};
var getLink = function getLink(children) {
  return getarr(children).map(function (c) {
    return c.key && c.key.match('link') ? c.props.href : '#!';
  }).filter(function (n) {
    return n;
  })[0] || '#!';
}; // ************************* 🤏 FOR GRID 🤏 ************************* //
// ************************* *************** ************************* //

var getGrid = function getGrid(children, depth) {

  return getarr(children).map(function (child) {
    var _child$props;

    return (child == null ? void 0 : child.key) && !!child.key.match('blockquote') && !!(child == null ? void 0 : (_child$props = child.props) == null ? void 0 : _child$props.children) ? getGrid(child.props.children) : child;
  });
};
var getLevel = function getLevel(children) {
  if (!children) return 0;
  var keys = React.Children.toArray(children).map(function (c) {
    return c == null ? void 0 : c.key;
  }).filter(function (k) {
    return k;
  });
  return keys.every(function (key) {
    return key.match('strong');
  }) ? 2 //put by 2 underbar __e.g.__
  : keys.every(function (key) {
    return key.match('emphasis');
  }) ? 1 //put by 1 underbar __e.g.__
  : keys.every(function (key) {
    return key.match('delete');
  }) //put by delete     ~~e.g.~~
  ? -1 : 0;
};

var Grid = function Grid(_ref) {
  var _ref$grid = _ref.grid,
      grid = _ref$grid === void 0 ? null : _ref$grid;

  var isBlock = function isBlock(c) {
    var _c$key, _c$key2;

    return  c instanceof Array || !!(c == null ? void 0 : (_c$key = c.key) == null ? void 0 : _c$key.match('blockquote')) || !!(c == null ? void 0 : (_c$key2 = c.key) == null ? void 0 : _c$key2.match('paragraph'));
  };

  var renderGrid = React.useCallback(function (arr) {
    return arr instanceof Array && arr.every(function (c) {
      return isBlock(c);
    }) ? /*#__PURE__*/React__default.createElement(mdbreact.MDBRow, null, arr.map(function (c, i) {
      return /*#__PURE__*/React__default.createElement(mdbreact.MDBCol, {
        key: i + "-" + c.length
      }, c instanceof Array ? renderGrid(c) : c);
    })) : arr;
  }, []);
  return React.useMemo(function () {
    return renderGrid(grid);
  }, [renderGrid, grid]);
};
/* props- children : [blockquote, ...]
> if depth = 0 (no \n)
    props.children
      - c   (key=text)
        .props.children
          - c (key=None)
> if depth = 0 (include \n)
> if depth = 1 (include \n)
    props.children
      - c (key=blockquote)
        .props.children
          - c (key=paragraph)
            .props.children
              - c (key=text)
              - c (key=text)...
>if depth=1
    //bind depth=0
>?
    props.children
      - c (key=blockquote)
        .prosp.children
          - c (key=paragraph)
          - c
            .props.children
              - c (key=text)
              - c
              - c ...
*/

var Blockquote = function Blockquote(_ref) {
  var children = _ref.children,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '' : _ref$color,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style;
  var grid = React.useMemo(function () {
    return getGrid(children);
  }, [children]);
  if (grid instanceof Array && grid.some(function (c) {
    return c instanceof Array;
  })) return /*#__PURE__*/React__default.createElement(Grid, {
    className: className,
    color: color,
    style: style,
    grid: grid
  });
  return /*#__PURE__*/React__default.createElement(mdbreact.MDBTypography, {
    blockquote: true
  }, /*#__PURE__*/React__default.createElement(mdbreact.MDBBox, {
    tag: "div",
    mb: 0
  }, grid));
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

var Delete = function Delete(_ref) {
  var children = _ref.children,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? "" : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? "" : _ref$color,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style;
  var colors = ["default", "primary", "success", "info", "warning", "danger", "light", "dark"];
  color = colors.some(function (c) {
    return c === color;
  }) ? color : "danger";
  return /*#__PURE__*/React__default.createElement(mdbreact.MDBBadge, {
    className: className,
    color: color,
    style: style
  }, "\xD7", children);
};

var colors = ["default", "primary", "success", "info", "warning", "danger", "light", "dark"];
var Button = function Button(_ref) {
  var _ref$level = _ref.level,
      level = _ref$level === void 0 ? 1 : _ref$level,
      _ref$href = _ref.href,
      href = _ref$href === void 0 ? '' : _ref$href,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === void 0 ? null : _ref$onClick,
      children = _ref.children,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'black' : _ref$color,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style;

  var _useState = React.useState(false),
      isOpened = _useState[0],
      setIsOpened = _useState[1];

  var toggle = React.useCallback(function () {
    setIsOpened(true);
    onClick && onClick();
  }, [onClick]);

  var state = _extends_1({
    onClick: toggle,
    level: level,
    className: className,
    style: style
  }, level === 3 && {
    outline: true
  });

  var hoverText = href.length > 30 ? href.slice(0, 30) + "..." : href;
  return /*#__PURE__*/React__default.createElement(mdbreact.MDBTooltip, {
    domElement: true,
    tag: "span",
    placement: "bottom"
  }, /*#__PURE__*/React__default.createElement("span", null, level === 1 ? /*#__PURE__*/React__default.createElement(mdbreact.MDBBadge, _extends_1({}, state, {
    children: children,
    color: color in colors ? color : "dark"
  })) : /*#__PURE__*/React__default.createElement(mdbreact.MDBBtn, _extends_1({}, state, {
    children: children,
    color: color
  }))), /*#__PURE__*/React__default.createElement("span", null, isOpened ? 'Opened' : hoverText)); //TODO (social?{social}:{color}
};

var Link = function Link(_ref) {
  var _ref$social = _ref.social,
      social = _ref$social === void 0 ? '' : _ref$social,
      _ref$href = _ref.href,
      href = _ref$href === void 0 ? '' : _ref$href,
      children = _ref.children,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '' : _ref$color,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style;
  var level = getLevel(children);
  var onClick = React.useCallback(function () {
    return window.open(href, '_blank', 'noopener noreferrer');
  }, [href]);
  return level > 0 ? /*#__PURE__*/React__default.createElement(Button, {
    level: level,
    social: social,
    href: href,
    onClick: onClick,
    children: children,
    className: className,
    color: color,
    style: style
  }) : /*#__PURE__*/React__default.createElement("span", {
    onClick: onClick,
    className: className,
    style: style
  }, /*#__PURE__*/React__default.createElement("u", null, children));
};

var ImageView = function ImageView(_ref) {
  var _ref$src = _ref.src,
      src = _ref$src === void 0 ? '' : _ref$src,
      _ref$alt = _ref.alt,
      alt = _ref$alt === void 0 ? '_' : _ref$alt,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {
    position: "absolute"
  } : _ref$style;
  className = "img-fluid" + (' ' + className || ''); //color = `${color}-text` //TODO

  return /*#__PURE__*/React__default.createElement(mdbreact.MDBView, {
    hover: true
  }, /*#__PURE__*/React__default.createElement("img", {
    src: src,
    alt: alt,
    className: className,
    style: style
  }), /*#__PURE__*/React__default.createElement(mdbreact.MDBMask, {
    className: "flex-center",
    overlay: "white-light"
  }, /*#__PURE__*/React__default.createElement("p", {
    className: "black-text",
    style: {
      fontSize: "1em"
    }
  }, alt)));
};
/* props
  - alt:""
  - children
  - className: ""
  - src: ""
*/

var Image = function Image(_ref) {
  var children = _ref.children,
      _ref$alt = _ref.alt,
      alt = _ref$alt === void 0 ? '' : _ref$alt,
      props = objectWithoutPropertiesLoose(_ref, ["children", "alt"]);

  if (!children && alt.slice(0, 1).match(':')) return /*#__PURE__*/React__default.createElement(mdbreact.MDBIcon, {
    icon: alt.slice(1)
  });
  var level = getLevel(children); //is_3?3:is_2?2:is_1?1:0
  //if (src.match('https://youtube.com')) //TODO
  //    return <Embed {...state}/>

  return /*#__PURE__*/React__default.createElement(ImageView, _extends_1({}, props, {
    alt: alt,
    level: level,
    children: children
  }));
};

var Cards = function Cards(_ref) {
  var columns = _ref.columns,
      rows = _ref.rows,
      argments = _ref.argments;
  var cards = React.useMemo(function () {
    return columns.map(function (column, i) {
      return {
        column: column,
        rows: rows.map(function (row) {
          return row['' + i];
        }),
        argment: argments[i]
      };
    });
  }, [columns, rows, argments]);
  var toHead = React.useCallback(function (row) {
    var text = row && row.map(function (r) {
      return r.props.children;
    }).join('');
    return text && text[0] === "#" ? text.slice(1) : null;
  }, []);
  var styles = React.useMemo(function () {
    return [{
      textAlign: "center",
      margin: "25px auto"
    }, {
      borderRadius: "5px"
    }, {
      margin: "0 auto",
      borderRadius: "5px",
      boxShadow: "0 10 25 rgba(0,0,0,0.25)"
    }];
  }, []);
  var Animation = React.useCallback(function (props) {
    var getUpper = function getUpper(chart) {
      return chart.charAt(0).toUpperCase() + chart.slice(1);
    };

    var getType = function getType(argment) {
      return argment ? "fadeIn" + getUpper(argment === 'center' ? 'up' : argment) : "swing";
    };

    return props.argment ? /*#__PURE__*/React__default.createElement(mdbreact.MDBAnimation, {
      reveal: true,
      type: getType(props.argment)
    }, props.children) : props.children;
  }, []);
  return /*#__PURE__*/React__default.createElement(mdbreact.MDBRow, null, cards && cards.map(function (card, i) {
    return /*#__PURE__*/React__default.createElement(mdbreact.MDBCol, {
      key: i,
      style: styles[0]
    }, /*#__PURE__*/React__default.createElement(Animation, {
      argment: card.argment
    }, /*#__PURE__*/React__default.createElement(mdbreact.MDBCard, {
      style: styles[1]
    }, /*#__PURE__*/React__default.createElement(mdbreact.MDBCardImage, {
      style: styles[2],
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

var Tables = function Tables(_ref) {
  var _ref$maxHeight = _ref.maxHeight,
      maxHeight = _ref$maxHeight === void 0 ? "300px" : _ref$maxHeight,
      _ref$bordered = _ref.bordered,
      bordered = _ref$bordered === void 0 ? false : _ref$bordered,
      _ref$paging = _ref.paging,
      paging = _ref$paging === void 0 ? true : _ref$paging,
      _ref$searching = _ref.searching,
      searching = _ref$searching === void 0 ? true : _ref$searching,
      _ref$scrollX = _ref.scrollX,
      scrollX = _ref$scrollX === void 0 ? false : _ref$scrollX,
      _ref$scrollY = _ref.scrollY,
      scrollY = _ref$scrollY === void 0 ? false : _ref$scrollY,
      _ref$striped = _ref.striped,
      striped = _ref$striped === void 0 ? true : _ref$striped,
      _ref$small = _ref.small,
      small = _ref$small === void 0 ? true : _ref$small,
      _ref$data = _ref.data,
      data = _ref$data === void 0 ? {} : _ref$data,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '' : _ref$color,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style;
  var tableState = {
    bordered: bordered,
    maxHeight: maxHeight,
    paging: paging,
    searching: searching,
    scrollX: scrollX,
    scrollY: scrollY,
    small: small,
    striped: striped
  }; //sorting TODO

  var state = _extends_1({
    data: data,
    className: className,
    color: color,
    style: style
  }, tableState);

  return /*#__PURE__*/React__default.createElement(mdbreact.MDBDataTable, state);
};

var Pills = function Pills(_ref) {
  var _ref$isPill = _ref.isPill,
      isPill = _ref$isPill === void 0 ? true : _ref$isPill,
      _ref$columns = _ref.columns,
      columns = _ref$columns === void 0 ? [] : _ref$columns,
      _ref$rows = _ref.rows,
      rows = _ref$rows === void 0 ? [] : _ref$rows,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className;

  var _useState = React.useState(0),
      tab = _useState[0],
      setTab = _useState[1]; //const getarr =arr=>arr?arr instanceof Array?arr:[arr]:[]
  //const isPill = columns.every( col=>col.label.every(c=>getAnyChild(c.props,'emphasis').length) )


  var cards = columns.map(function (column, i) {
    return {
      column: column,
      rows: rows.map(function (row) {
        return row['' + i];
      })
    };
  });

  var togglePills = function togglePills(e, num) {
    e.preventDefault(); //?

    if (tab !== num) setTab(num);
  };

  return /*#__PURE__*/React__default.createElement(React.Fragment, null, /*#__PURE__*/React__default.createElement(mdbreact.MDBNav, {
    style: {
      border: "none"
    },
    className: className + (" mt-5 nav-" + (isPill ? 'pills' : 'tabs'))
  }, cards && cards.map(function (card, i) {
    return /*#__PURE__*/React__default.createElement(React.Fragment, {
      key: i
    }, /*#__PURE__*/React__default.createElement(mdbreact.MDBNavItem, null, /*#__PURE__*/React__default.createElement(mdbreact.MDBNavLink, {
      link: true,
      to: "#",
      active: tab === i,
      onClick: function onClick(e) {
        return togglePills(e, i);
      }
    }, card.column.label.map(function (l) {
      return l.props.children;
    }))));
  })), /*#__PURE__*/React__default.createElement(mdbreact.MDBTabContent, {
    activeItem: "" + tab
  }, cards && cards.map(function (card, i) {
    return /*#__PURE__*/React__default.createElement(React.Fragment, {
      key: i
    }, /*#__PURE__*/React__default.createElement(mdbreact.MDBTabPane, {
      tabId: i + ""
    }, /*#__PURE__*/React__default.createElement("p", null, " ", card.rows, " ")));
  })));
};

var Modal = function Modal(_ref) {
  var _ref$columns = _ref.columns,
      columns = _ref$columns === void 0 ? [] : _ref$columns,
      _ref$rows = _ref.rows,
      rows = _ref$rows === void 0 ? [] : _ref$rows,
      _ref$argments = _ref.argments,
      argments = _ref$argments === void 0 ? [] : _ref$argments,
      children = _ref.children,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'dark' : _ref$color,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style;

  var _useState = React.useState(0),
      modalNum = _useState[0],
      setModalNum = _useState[1];

  var cards = columns.map(function (column, i) {
    return {
      column: column,
      rows: rows.map(function (row) {
        return row['' + i];
      }),
      argment: argments[i]
    };
  });
  color = color.replace('-color', '');
  return /*#__PURE__*/React__default.createElement(React.Fragment, null, cards.map(function (card, i) {
    return /*#__PURE__*/React__default.createElement(React.Fragment, {
      key: i
    }, /*#__PURE__*/React__default.createElement(mdbreact.MDBBtn, _extends_1({
      className: className,
      color: color,
      style: style
    }, {
      onClick: function onClick() {
        return setModalNum(modalNum === i ? 0 : i);
      }
    }), card.column.label[0].props.children[0].props.children), /*#__PURE__*/React__default.createElement(mdbreact.MDBModal, {
      inline: true,
      noClickableBodyWithoutBackdrop: true,
      overflowScroll: true //?? TODO error if no
      ,
      fullHeight: true,
      position: "right",
      isOpen: modalNum === i,
      toggle: function toggle() {
        return setModalNum(0);
      }
    }, /*#__PURE__*/React__default.createElement(mdbreact.MDBModalHeader, {
      toggle: function toggle() {
        return setModalNum(0);
      }
    }, card.column.label[0].props.children), /*#__PURE__*/React__default.createElement(mdbreact.MDBModalBody, null, " ", card.rows, " "), /*#__PURE__*/React__default.createElement(mdbreact.MDBModalFooter, null, /*#__PURE__*/React__default.createElement(mdbreact.MDBBtn, _extends_1({
      className: className,
      color: color,
      style: style
    }, {
      onClick: function onClick() {
        return setModalNum(0);
      }
    }), "Close"))));
  }));
};

var Table = function Table(_ref) {
  var _ref$columnAlignment = _ref.columnAlignment,
      columnAlignment = _ref$columnAlignment === void 0 ? undefined : _ref$columnAlignment,
      children = _ref.children,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '' : _ref$color,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      props = objectWithoutPropertiesLoose(_ref, ["columnAlignment", "children", "className", "color", "style"]);

  var _useMemo = React.useMemo(function () {
    var heads = getarr(children).filter(function (v) {
      return v.key.match("tableHead");
    });
    var bodys = getarr(children).filter(function (v) {
      return v.key.match("tableBody");
    });
    var columns = gettrs(heads).map(function (h) {
      return getths(h);
    }).map(function (th) {
      return getcol(th);
    })[0];
    var rows = gettrs(bodys).map(function (b) {
      return getths(b);
    }).map(function (th) {
      return getrow(th);
    });
    var keys = gettrs(heads).map(function (v) {
      return getths(v);
    }).map(function (th) {
      return getkey(th);
    })[0];
    return {
      columns: columns,
      rows: rows,
      keys: keys
    };
  }, [children]),
      columns = _useMemo.columns,
      rows = _useMemo.rows,
      keys = _useMemo.keys;

  if (keys.every(function (key) {
    return key.match('image');
  })) return /*#__PURE__*/React__default.createElement(Cards, _extends_1({
    columns: columns,
    rows: rows,
    keys: keys,
    className: className,
    color: color,
    style: style
  }, {
    argments: columnAlignment
  }));
  if (keys.every(function (key) {
    return key.match('link');
  })) return getIsX(columns, 'delete') ? /*#__PURE__*/React__default.createElement(Modal, _extends_1({
    columns: columns,
    rows: rows,
    keys: keys,
    className: className,
    color: color,
    style: style
  }, {
    argments: columnAlignment
  })) : /*#__PURE__*/React__default.createElement(Pills, _extends_1({
    columns: columns,
    rows: rows,
    keys: keys,
    className: className,
    color: color,
    style: style
  }, {
    isPill: getIsX(columns, 'emphasis') ? true : false
  }));
  return /*#__PURE__*/React__default.createElement(Tables, {
    indexProps: props,
    data: {
      columns: columns,
      rows: rows
    }
  });
};

var ListGroup = function ListGroup(_ref) {
  var children = _ref.children,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'elegant' : _ref$color,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style;
  return React.useMemo(function () {
    return /*#__PURE__*/React__default.createElement(mdbreact.MDBListGroup, _extends_1({
      children: children,
      className: className,
      color: color,
      style: _extends_1({
        margin: "auto auto"
      }, style)
    }, {
      color: "light"
    }));
  }, [children, className, color, style]);
};

var Navi = function Navi(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? "" : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? "elegant" : _ref$color,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      props = objectWithoutPropertiesLoose(_ref, ["className", "color", "style"]);

  var children = React.Children.toArray(props.children);

  var _useState = React.useState(false),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  var toggleCollapse = React.useCallback(function () {
    return setIsOpen(function (p) {
      return !p;
    });
  }, []);
  color = "" + color + (color.match("-color") ? "" : "-color");
  return /*#__PURE__*/React__default.createElement(mdbreact.MDBNavbar, _extends_1({
    color: color,
    className: className,
    style: style
  }, {
    expand: "md",
    fixed: "top",
    dark: true,
    scrolling: true,
    transparent: true
  }), /*#__PURE__*/React__default.createElement(mdbreact.MDBNavbarBrand, {
    href: getLink(children[0].props.children)
  }, /*#__PURE__*/React__default.createElement("strong", {
    className: "white-text"
  }, getText(children[0].props.children))), /*#__PURE__*/React__default.createElement(mdbreact.MDBNavbarToggler, {
    onClick: toggleCollapse
  }), /*#__PURE__*/React__default.createElement(mdbreact.MDBCollapse, {
    id: "navbarCollapse3",
    isOpen: isOpen,
    navbar: true
  }, /*#__PURE__*/React__default.createElement(mdbreact.MDBNavbarNav, {
    left: true
  }, getarr(children).filter(function (_, i) {
    return i > 0;
  }).map(function (c, i) {
    var _c$props, _c$props3;

    return /*#__PURE__*/React__default.createElement(mdbreact.MDBNavItem, {
      key: i,
      active: window.location.href.match(getLink((_c$props = c.props) == null ? void 0 : _c$props.children)) ? true : false,
      onClick: function onClick() {
        var _c$props2;

        window.location.href = getLink((_c$props2 = c.props) == null ? void 0 : _c$props2.children);
      }
    }, /*#__PURE__*/React__default.createElement(mdbreact.MDBNavLink, {
      to: "#"
    }, getText((_c$props3 = c.props) == null ? void 0 : _c$props3.children)));
  }))));
};

var Foot = function Foot(_ref) {
  var children = _ref.children,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '' : _ref$color,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style;
  className = 'footer-copyright text-center font-small py-3' + className;
  style = _extends_1({
    maxWidth: "99vw",
    left: "50%",
    right: "50%",
    marginLeft: "-50vw",
    marginRight: "-50vw",
    position: "relative",
    bottom: "0",
    overflow: "hidden"
  }, style);
  var state = {
    className: className,
    color: color,
    style: style
  };
  return /*#__PURE__*/React__default.createElement(mdbreact.MDBFooter, state, /*#__PURE__*/React__default.createElement(mdbreact.MDBContainer, {
    fluid: true
  }, /*#__PURE__*/React__default.createElement(mdbreact.MDBRow, null, getarr(children).map(function (c, i) {
    return /*#__PURE__*/React__default.createElement(mdbreact.MDBCol, {
      key: i,
      onClick: function onClick() {
        window.location.href = getLink(c.props.children);
      }
    }, getText(c.props.children));
  }))));
};

/***
  * REF
  * https://mdbootstrap.com/docs/react/components/dropdowns/
***/
var Drop = function Drop(_ref) {
  var _getArray$, _getArray$$props;

  var children = _ref.children,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '' : _ref$color,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style;
  color = color.replace('-color', '');
  var state = {
    className: className,
    style: style
  };
  return /*#__PURE__*/React__default.createElement(mdbreact.MDBDropdown, state, /*#__PURE__*/React__default.createElement(mdbreact.MDBDropdownToggle, {
    caret: true,
    color: color
  }, getText((_getArray$ = getarr(children)[0]) == null ? void 0 : (_getArray$$props = _getArray$.props) == null ? void 0 : _getArray$$props.children)), /*#__PURE__*/React__default.createElement(mdbreact.MDBDropdownMenu, {
    basic: true
  }, getarr(children).filter(function (_, i) {
    return i > 0;
  }).map(function (c, i) {
    var _c$props2, _c$props3;

    return /*#__PURE__*/React__default.createElement(mdbreact.MDBDropdownItem, {
      key: i,
      onClick: function onClick() {
        var _c$props;

        window.location.href = getLink((_c$props = c.props) == null ? void 0 : _c$props.children);
      }
    }, getText((_c$props2 = c.props) == null ? void 0 : _c$props2.children) || ((_c$props3 = c.props) == null ? void 0 : _c$props3.children));
  })));
};

var List = function List(_ref) {
  var children = _ref.children,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'elegant' : _ref$color,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style;
  var state = React.useMemo(function () {
    return {
      children: children,
      className: className,
      color: color,
      style: style
    };
  }, [children, className, color, style]);

  if (getarr(children).every(function (c) {
    var _c$props;

    return getAnyCh((_c$props = c.props) == null ? void 0 : _c$props.children, 'link').length;
  })) {
    if (getarr(children).every(function (c) {
      var _c$props2;

      return getAnyGr((_c$props2 = c.props) == null ? void 0 : _c$props2.children, 'link', 'strong').length;
    })) return /*#__PURE__*/React__default.createElement(Foot, state);
    if (getarr(children).every(function (c) {
      var _c$props3;

      return getAnyGr((_c$props3 = c.props) == null ? void 0 : _c$props3.children, 'link', 'emphasis').length;
    })) return /*#__PURE__*/React__default.createElement(Navi, state);
    return /*#__PURE__*/React__default.createElement(Drop, state);
  }

  return /*#__PURE__*/React__default.createElement(ListGroup, null, children);
  /***
    * TODO : not used (migrate to table)
    * if( children.every(c=>getAnyChild(c.props?.children, 'image').length ) )
    *     return <Carousel {...state}/>
    * if( children.map(c=>getAnyGrand(c.props?.children, 'link', 'emphasis')).filter(a=>a.length).length )
    *     return <Pill {...state}/>
    * if( children.map(c=>getAnyGrand(c.props?.children, 'link', 'strong')).filter(a=>a.length).length )
    *   return <Tabs {...state}/>
  ***/
};
/*props
props.depth  : 0
props.ordered: false
props.start  : null
props.tight  :false
props?.children
  - child (key=listItem)
  - cilld ...
    .props?.children
      - child(key=text and so)
*/

var ListItem = function ListItem(_ref) {
  var children = _ref.children,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {
    padding: "0 50px"
  } : _ref$style,
      props = objectWithoutPropertiesLoose(_ref, ["children", "className", "style"]);

  var colors = ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"];
  var color = props.color && colors.some(function (c) {
    return c === props.color;
  }) ? props.color : "light";
  return /*#__PURE__*/React__default.createElement(mdbreact.MDBListGroupItem, {
    children: children,
    className: className,
    color: color,
    style: style
  });
};

var Heading = function Heading(_ref) {
  var _ref$level = _ref.level,
      level = _ref$level === void 0 ? 1 : _ref$level,
      children = _ref.children,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? "" : _ref$color,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style;
  var Tag = React.useMemo(function () {
    return "h" + level;
  }, [level]);
  return /*#__PURE__*/React__default.createElement("div", {
    color: color,
    style: style
  }, React.Children.map(children, function (c, key) {
    var _ref2, _ref2$props, _ref3, _ref3$props;

    return !((_ref2 = c) == null ? void 0 : (_ref2$props = _ref2.props) == null ? void 0 : _ref2$props.children) ? null : /*#__PURE__*/React__default.createElement(Tag, {
      className: className,
      key: key
    }, (_ref3 = c) == null ? void 0 : (_ref3$props = _ref3.props) == null ? void 0 : _ref3$props.children);
  })); // ***
  // *MDBTypegraphy Error
  // *    DOC1: https://mdbootstrap.com/docs/jquery/content/typography/
  // *    DOC2: https://mdbootstrap.com/docs/react/content/typography/
  // *    Code: https://github.com/mdbootstrap/React-Bootstrap-with-Material-Design/blob/25ae803b9121efe64a02c5d9e4466cf6ea908a3f/src/components/Typography/Typography.js
  // *Warning: Failed prop type:
  // *   Invalid prop `children` of type `array` supplied to `a`,
  // *   expected `boolean`.
  // *Warning: Received `false` for a non-boolean attribute `abbr`.
  // *   If you want to write it to the DOM,
  // *   pass a string instead: abbr="false" or abbr={value.toString()}.
  // *   If you used to conditionally omit it with abbr={condition && value},
  // *   pass abbr={condition ? value : undefined} instead.
  // ***

  /*
  const tag = useMemo(()=>`h${level}` as TagTypes,[level])
  const variant = useMemo(()=>"responsive" as VarTypes,[])
  return <MDBTypography {...{
      tag, variant, abbr:"true", //error if none
      children, // warning
      className, color, style}}/>
  */
};

var atomOneDark = {
  "hljs": {
    "display": "block",
    "overflowX": "auto",
    "padding": "0.5em",
    "color": "#abb2bf",
    "background": "#282c34"
  },
  "hljs-comment": {
    "color": "#5c6370",
    "fontStyle": "italic"
  },
  "hljs-quote": {
    "color": "#5c6370",
    "fontStyle": "italic"
  },
  "hljs-doctag": {
    "color": "#c678dd"
  },
  "hljs-keyword": {
    "color": "#c678dd"
  },
  "hljs-formula": {
    "color": "#c678dd"
  },
  "hljs-section": {
    "color": "#e06c75"
  },
  "hljs-name": {
    "color": "#e06c75"
  },
  "hljs-selector-tag": {
    "color": "#e06c75"
  },
  "hljs-deletion": {
    "color": "#e06c75"
  },
  "hljs-subst": {
    "color": "#e06c75"
  },
  "hljs-literal": {
    "color": "#56b6c2"
  },
  "hljs-string": {
    "color": "#98c379"
  },
  "hljs-regexp": {
    "color": "#98c379"
  },
  "hljs-addition": {
    "color": "#98c379"
  },
  "hljs-attribute": {
    "color": "#98c379"
  },
  "hljs-meta-string": {
    "color": "#98c379"
  },
  "hljs-built_in": {
    "color": "#e6c07b"
  },
  "hljs-class .hljs-title": {
    "color": "#e6c07b"
  },
  "hljs-attr": {
    "color": "#d19a66"
  },
  "hljs-variable": {
    "color": "#d19a66"
  },
  "hljs-template-variable": {
    "color": "#d19a66"
  },
  "hljs-type": {
    "color": "#d19a66"
  },
  "hljs-selector-class": {
    "color": "#d19a66"
  },
  "hljs-selector-attr": {
    "color": "#d19a66"
  },
  "hljs-selector-pseudo": {
    "color": "#d19a66"
  },
  "hljs-number": {
    "color": "#d19a66"
  },
  "hljs-symbol": {
    "color": "#61aeee"
  },
  "hljs-bullet": {
    "color": "#61aeee"
  },
  "hljs-link": {
    "color": "#61aeee",
    "textDecoration": "underline"
  },
  "hljs-meta": {
    "color": "#61aeee"
  },
  "hljs-selector-id": {
    "color": "#61aeee"
  },
  "hljs-title": {
    "color": "#61aeee"
  },
  "hljs-emphasis": {
    "fontStyle": "italic"
  },
  "hljs-strong": {
    "fontWeight": "bold"
  }
};

var atomOneLight = {
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

var Code = function Code(_ref) {
  var _ref$value = _ref.value,
      value = _ref$value === void 0 ? "" : _ref$value,
      _ref$language = _ref.language,
      language = _ref$language === void 0 ? "javascript" : _ref$language,
      _ref$inline = _ref.inline,
      inline = _ref$inline === void 0 ? false : _ref$inline,
      _ref$dark = _ref.dark,
      dark = _ref$dark === void 0 ? false : _ref$dark;
  var onDoubleClick = React.useCallback(function (_) {
    return navigator.clipboard.writeText(value);
  }, [value]);
  var customStyle = React.useMemo(function () {
    return _extends_1({}, inline ? {
      verticalAlign: "top"
    } : {}, {
      display: inline ? "inline-block" : "fixed",
      position: 'relative',
      padding: 0,
      margin: 0
    });
  }, [inline]);
  var style = React.useMemo(function () {
    return dark ? atomOneDark : atomOneLight;
  }, [dark]);
  return /*#__PURE__*/React__default.createElement(reactSyntaxHighlighter.Light, _extends_1({
    PreTag: inline ? "span" : "pre",
    useInlineStyles: true,
    showLineNumbers: !inline
  }, {
    style: style,
    customStyle: customStyle,
    onDoubleClick: onDoubleClick,
    language: language
  }), value);
};

var InlineCode = function InlineCode(_ref) {
  var props = _extends_1({}, _ref);

  return /*#__PURE__*/React__default.createElement(Code, _extends_1({}, props, {
    inline: true
  }));
};

var MathJax = require('react-mathjax');

var Math = function Math(_ref) {
  var _ref$inline = _ref.inline,
      inline = _ref$inline === void 0 ? false : _ref$inline,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? '' : _ref$value;

  //const [isCopied, setIsCopied] = useState(false);
  var handleCopy = function handleCopy(_) {
    //    setIsCopied(true);
    navigator.clipboard.writeText(value);
  };

  return /*#__PURE__*/React__default.createElement(MathJax.Node, {
    inline: inline,
    formula: value,
    onDoubleClick: handleCopy
  });
};

var InlineMath = function InlineMath(_ref) {
  var props = _extends_1({}, _ref);

  return /*#__PURE__*/React__default.createElement(Math, _extends_1({}, props, {
    inline: true
  }));
};

var Renderers = /*#__PURE__*/Object.freeze({
	__proto__: null,
	Root: Root,
	Text: Text,
	Paragraph: Paragraph,
	Blockquote: Blockquote,
	Delete: Delete,
	Link: Link,
	Image: Image,
	Table: Table,
	List: List,
	ListGroup: ListGroup,
	Navi: Navi,
	Foot: Foot,
	Drop: Drop,
	ListItem: ListItem,
	Heading: Heading,
	InlineCode: InlineCode,
	Code: Code,
	Math: Math,
	InlineMath: InlineMath
});

//const RemarkMathPlugin = require('remark-math');

var renderersKey = Object.keys(Renderers);
var Mdmd = /*#__PURE__*/React__default.forwardRef(function (_ref, ref) {
  var _ref$md = _ref.md,
      md = _ref$md === void 0 ? null : _ref$md,
      _ref$path = _ref.path,
      path = _ref$path === void 0 ? null : _ref$path,
      _ref$source = _ref.source,
      source = _ref$source === void 0 ? '' : _ref$source,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? "" : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? "elegant" : _ref$color,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {
    fontSize: "1rem"
  } : _ref$style,
      children = _ref.children,
      props = objectWithoutPropertiesLoose(_ref, ["md", "path", "source", "className", "color", "style", "children"]);

  // ************************* FOR SOURCE ************************* //
  var _useState = React.useState(source),
      nowSource = _useState[0],
      setSource = _useState[1];

  React.useEffect(function () {
    (path || md) && fetch(path || md).then(function (r) {
      return r.text();
    }).then(function (r) {
      return setSource(r);
    });
  }, [md, path]);
  React.useEffect(function () {
    (source || children) && setSource(source || String(children));
  }, [source, children]); // ************************* FOR PROPS ************************* //

  var options = React.useMemo(function () {
    return Object.assign.apply(Object, [{}].concat(['escapeHtml', 'skipHtml', 'sourcePos', 'rawSourcePos', 'includeNodeIndex', 'allowedTypes', 'disallowedTypes', 'unwrapDisallowed', 'allowNode', 'linkTarget', 'transformLinkUri', 'transformImageUrl'].filter(function (key) {
      return key in props;
    }).map(function (key) {
      var _ref2;

      return _ref2 = {}, _ref2[key] = props[key], _ref2;
    }), [props.options]));
  }, [props]);
  var renderers = React.useMemo(function () {
    return Object.assign.apply(Object, [{}].concat(renderersKey.map(function (key) {
      var _ref3;

      var Renderer = Renderers[key];
      return _ref3 = {}, _ref3[key.charAt(0).toLowerCase() + key.slice(1)] = function (props) {
        return /*#__PURE__*/React__default.createElement(Renderer, _extends_1({}, props, {
          className: [className, props["className" + key]].filter(function (c) {
            return c;
          }).join(' '),
          color: color || props["color" + key],
          style: _extends_1({}, style, props["style" + key])
        }));
      }, _ref3;
    }), [props.renderers]));
  }, [className, color, style, props.renderers]); // ************************* FOR RENDER ************************* //

  return React.useMemo(function () {
    return /*#__PURE__*/React__default.createElement(ReactMarkdown, _extends_1({
      source: nowSource || ''
    }, options, {
      renderers: renderers
    }, ref ? {
      ref: ref
    } : {}));
  }, [nowSource, renderers, options, ref]);
  /*
  return (
      <Provider input="tex">
          <ReactMarkdown {...{plugins, renderers, ...optionState, markdownRef, source:nowSource}} />
      </Provider>
  )
  */
});

exports.Blockquote = Blockquote;
exports.Code = Code;
exports.Delete = Delete;
exports.Drop = Drop;
exports.Foot = Foot;
exports.Heading = Heading;
exports.Image = Image;
exports.InlineCode = InlineCode;
exports.InlineMath = InlineMath;
exports.Link = Link;
exports.List = List;
exports.ListGroup = ListGroup;
exports.ListItem = ListItem;
exports.Math = Math;
exports.Mdmd = Mdmd;
exports.Navi = Navi;
exports.Paragraph = Paragraph;
exports.Root = Root;
exports.Table = Table;
exports.Text = Text;
exports.default = Mdmd;
exports.getAnyCh = getAnyCh;
exports.getAnyGr = getAnyGr;
exports.getGrid = getGrid;
exports.getIsX = getIsX;
exports.getLevel = getLevel;
exports.getLink = getLink;
exports.getText = getText;
exports.getarr = getarr;
exports.getcol = getcol;
exports.getkey = getkey;
exports.getrow = getrow;
exports.getths = getths;
exports.gettrs = gettrs;
