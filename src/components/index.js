export {default as Root}           from './Root'          ;//root - Root container element that contains the rendered markdown
export {default as Text}           from './Text'          ;//text - Text rendered inside of other elements, such as paragraphs
//export {default as Break}          from './Break'         ;//break - Hard-break (<br>)
export {default as Paragraph}      from './Paragraph'     ;//paragraph - Paragraph (<p>)
//export {default as Emphasis}       from './Emphasis'      ;//emphasis - Emphasis (<em>)
//export {default as Strong}         from './Strong'        ;//strong - Strong/bold (<strong>)
//export {default as ThematicBreak}  from './ThematicBreak' ;//thematicBreak - Horizontal rule / thematic break (<hr>)
export {default as Blockquote}     from './Blockquote'    ;//blockquote - Block quote (<blockquote>)
export {default as Delete}         from './Delete'        ;//delete - Deleted/strike-through (<del>)
export {default as Link}           from './Link'          ;//link - Link (<a>)
export {default as Image}          from './Image'         ;//image - Image (<img>)
//export {default as LinkReference}  from './LinkReference' ;//linkReference - Link (through a reference) (<a>)
//export {default as ImageReference} from './ImageReference';//imageReference - Image (through a reference) (<img>)
export {default as Table}          from './Table'         ;//table - Table (<table>)
/* not used
export TableHead      from './TableHead'     ;//tableHead - Table head (<thead>)
export TableBody      from './TableBody'     ;//tableBody - Table body (<tbody>)
export TableRow       from './TableRow'      ;//tableRow - Table row (<tr>)
export TableCell      from './TableCell'     ;//tableCell - Table cell (<td>/<th>)
*/
export {default as List}           from './List'          ;//list - List (<ul>/<ol>)
export {default as ListItem}       from './ListItem'      ;//listItem - List item (<li>)
//export {default as Definition}     from './Definition'    ;//definition - Definition (not rendered by default)
export {default as Heading}        from './Heading'       ;//heading - Heading (<h1>-<h6>)
export {default as InlineCode}     from './InlineCode'    ;//inlineCode - Inline code (<code>)
export {default as Code}           from './Code'          ;//code - Block of code (<pre><code>)
/*TODO
export Html           from './Html'          ;//html - HTML node (Best-effort rendering)
export VirtualHtml    from './VirtualHtml'   ;//virtualHtml - When not using the HTML parser plugin, a cheap and dirty approach to supporting simple HTML elements without a complete parser.
export ParsedHtml     from './ParsedHtml'    ;//parsedHtml - When using the HTML parser plugin, HTML parsed to a React element.
*/

/*MY CHANGED*/
export {default as Math}       from './Math';
export {default as InlineMath} from './InlineMath';
