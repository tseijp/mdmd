![How to use in React?] |  
:-:|  
Mdmd can easily install into your React app!|  

***
>>>### Get started
>>>__via props of Markdown file__
>>>```
>>>import Mdmd from 'mdmd';
>>>import MyText from 'MyText.md'
>>>const App =()=> <Mdmd md={MyText}/>
>>>```
>>>
>>>__via props of source__
>>>```
>>>import Mdmd from 'mdmd';
>>>const source = `
>>># おはようせかい
>>>`
>>>const App =()=> <Mdmd source={source}/>
>>>```
>
>>>### How to install Mdmd via npm  
>>>create your project - `create-react-app myproject`  
>>>`cd myproject`  
>>>`npm install --save @tsei/mdmd`  
>>>Import style files into the src/index.js:
>>>```
>>>import '@fortawesome/fontawesome-free/css/all.min.css';
>>>import 'bootstrap-css-only/css/bootstrap.min.css';
>>>import 'mdbreact/dist/css/mdb.css';
>>>```
>>>[___Learn more___](https://github.com/mdbootstrap/React-Bootstrap-with-Material-Design#how-to-install-mdb-via-npm)


***

>>> ### Assign your style
>>>```
>>>import Mdmd from 'mdmd';
>>>import MyText from 'MyText.md'
>>>const state = {/*your style*/}
>>>const App =()=> <Mdmd md={MyText} {...state}>
>>>```
>>>
>>> ![Details of the options]()|  
>>> :-|  
>>> Mdmd allows you to specify various options as props. The basic props are shown in right table.|  
>>> You can customize the components that render each element of the page. See below on how to overwrite.  |  
>>> Options of React Markdown can be used. To use it, see below, or read React Markdown|  
>>> [___Learn More___](https://github.com/rexxars/react-markdown)|
>
>>> ### Mdmd Main Option
>>> option name | props type | props default | help  
>>> :-|:-|:-|:-  
>>> md                   |[_Module_]() |`null`|The Module of Markdown File to read source.  
>>> __source__           |[_string_]() | `''` |The Markdown source to parse.  
>>> __renderers__        |[_object_]() |`object`|An object where the keys represent the node type and the value is a React component.  
>>> __plugins__          |[_array_]()  |`[]`|An array of unified/remark parser plugins.  
>>> __parserOptions__    |[_object_]() |`[]`|An object containing options to pass to [_remark-parse_](https://github.com/remarkjs/remark/tree/master/packages/remark-parse)..  
>>> __className__    |[_string_]()|`''`|.  
>>> __color__    |[_string_]()|`''`|.  
>>> __style__    |[_object_]()|`''`|.  

***

>>>### Mdmd Options Example
>>>```
>>>const color = "default-color"
>>>const style = {margin:"auto"}
>>>const colorLink = "elegant-color"
>>>const styleList = {fontSize:"25px"}
>>>const styleRoot = {margin:"50px 0"}  
>>>const classNameRoot = "MdmdRoot"
>>>const state = {color, style, styleList, styleText}
>>>```
>>>  
>>> ![Mdmd supports flexible options]()|  
>>> :-|  
>>> className, color and style are given to all renderer components. |
>>> colors can be selected from a bootstrap palette.[_More_](https://mdbootstrap.com/docs/react/css/colors)|  
>>> You can specify a renderer type such as classNameList, styleRoot, colorLink.|  
>>> Refer to the table on the right for the renderer type|  
>>>
>>> ### How to Custom Renderers
>>>This page has been overridden by Root Renderer in the following way.
>>>[_Source code_](https://github.com/tsei.jp/mdmd/docs/pages/index.js)
>>>```
>>>const Root = (props) => (
>>>    <>
>>>        <MDBEdgeHeader>
>>>        </MDBEdgeHeader>
>>>        <MDBFreeBird>
>>>            <MDBContainer {...props}>
>>>                {props.children}
>>>            </MDBContainer>
>>>        </MDBFreeBird>
>>>    </>
>>>)
>>>const renderers = {root:Root}
>>>```
>>>
>
>
>>> ### Renderer Type
>>>  
>>> renderer name      | html code | help  
>>> :-|:-|:-  
>>> __root__           | | Root container element that contains the rendered markdown|  
>>> __text__           | | Text rendered inside of other elements, such as paragraphs|  
>>> __break__          | [_<br>_]()    | Hard-break   
>>> __paragraph__      | [_<p>_]()    | Paragraph   
>>> __emphasis__       | [_<em>_]()    | Emphasis   
>>> __strong__         | [_<strong>_]()    | Strong/bold   
>>> __thematicBreak__  | [_<hr>_]()    | Horizontal rule / thematic break   
>>> __blockquote__     | [_<blockquote>_]()    | Block quote   
>>> __delete__         | [_<del>_]()    | Deleted/strike-through   
>>> __link__           | [_<a>_]()    | Link   
>>> __image__          | [_<img>_]()    | Image   
>>> __linkReference__  | [_<a>_]()    | Link (through a reference)   
>>> __imageReference__ | [_<img>_]()    | Image (through a reference)   
>>> __table__          | [_<table>_]()    | Table   
>>> __tableHead__      | [_<thead>_]()    | Table head   
>>> __tableBody__      | [_<tbody>_]()    | Table body   
>>> __tableRow__       | [_<tr>_]()    | Table row   
>>> __tableCell__      | [_<td>/<th>_]()    | Table cell   
>>> __list__           | [_<ul>/<ol>_]()    | List   
>>> __listItem__       | [_<li>_]()    | List item   
>>> __definition__     | [_not rendered by default_]()    | Definition   
>>> __heading__        | [_<h1>-<h6>_]()    | Heading   
>>> __inlineCode__     | [_<code>_]()    | Inline code   
>>> __code__           | [_<pre><code>_]()    | Block of code   
>>> __html__           | [_Best-effort rendering_]()    | HTML node   
>>> __virtualHtml__    | | When not using the HTML parser plugin, a cheap and dirty approach to supporting simple HTML elements without a complete parser.  
>>> __parsedHtml__     | | When using the HTML parser plugin, HTML parsed to a React element.  

***


>>>### How to hack React-Markdown
>>>[_Learn More_](https://github.com/rexxars/react-markdown)
>>>COMING SOON
>
>>> ### React Markdown Options  
>>>
>>> props name | props type | props default | help  
>>> :-|:-|:-|:-  
>>> __escapeHtml__       |[_boolean_]()|`true` |HTML to be rendered.  
>>> __skipHtml__         |[_boolean_]()|`false`|skip inlined and block.  
>>> __sourcePos__        |[_boolean_]()|`false`|add `data-sourcepos` attributes to all elements,  
>>> __rawSourcePos__     |[_boolean_]()|`false`|pass a sourcePosition property to all renderers.  
>>> __includeNodeIndex__ |[_boolean_]()|`false`|pass index and parentChildCount props to all renderers.  
>>> __allowedTypes__     |[_array_]()  |all types|defines which types of nodes should be allowed.  
>>> __disallowedTypes__  |[_array_]()  |`none`   |defines which types of nodes should be disallowed.  
>>> __unwrapDisallowed__ |[_boolean_]()|`false`|try to extract/unwrap the children of disallowed nodes.  
>>> __allowNode__        |[_function_]()|`none`|Function execute if in order to determine if the node should be allowed.  
>>> __linkTarget__       |[_function_]()[_string_]()|`undefined`|Sets the default target attribute for links. .  
>>> __transformLinkUri__ |[_function_]()[_null_]()|`undefined`| Function that gets called for each encountered link with a single argument.  
>>> __transformImageUri__ |[_function_]()[_null_]()|`undefined`|Function that gets called for each encountered image with a single argument


***

- [_MDMD_](/mdmd/)
- [_About_](/mdmd/about)
- [_Basic_](/mdmd/basic)
- [_Component_](/mdmd/component)
- [_Container_](/mdmd/container)
- [_Content_](/mdmd/content)
- [_Grid_](/mdmd/grid)
- [_Help_](/mdmd/help)
- [_How_](/mdmd/how)


- [__twitter__](https://twitter.com/tseijp)
- [__instagram__](https://instagram.com/tseijp)
- [__©2020 Copyright:tsei.jp__](https://tsei.jp)
- [__github__](https://github.com/tseijp)
- [__soundcloud__](https://soundcloud.com/tsei)
