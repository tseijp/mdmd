import React, {FC, useState, useEffect, useMemo} from 'react';
import ReactMarkdown from 'react-markdown';
import {MdmdProps} from './types'
import * as Renderers from './components';
//const {Provider} = require('react-mathjax');
//const RemarkMathPlugin = require('remark-math');

const renderersKey  = Object.keys(Renderers)

export const Mdmd:FC<MdmdProps> = React.forwardRef(({
    md=null, path=null, source='',
    className="", color="elegant", style={fontSize:"1rem"},
    children, ...props
}, ref) => {
    // ************************* FOR SOURCE ************************* //
    const [nowSource, setSource] = useState(source);
    useEffect(()=>{(path||md)&&fetch(path||md).then(r=>r.text()).then(r=>setSource(r)) }, [md,path])
    useEffect(()=>{(source||children)&&setSource(source||String(children))}, [source,children])
    // ************************* FOR PROPS ************************* //
    const options = useMemo(()=>Object.assign({}, ...[
        'escapeHtml','skipHtml','sourcePos','rawSourcePos','includeNodeIndex',
        'allowedTypes','disallowedTypes','unwrapDisallowed','allowNode',
        'linkTarget','transformLinkUri','transformImageUrl', ]
        .filter(key => key in props).map(key => ({[key]:props[key]})),
        props.options
    ), [props]);
    const renderers = useMemo(()=>Object.assign({},
        ...renderersKey.map(key=>{
            const Renderer  = (Renderers as any)[key];
            return {[ key.charAt(0).toLowerCase()+key.slice(1) ] : (props:any) =>
                <Renderer {...{...props,
                    className: [ className, props[`className${key}`] ].filter(c=>c).join(' '),
                    color    :     color || props[`color${key}`] ,
                    style    : {...style,...props[`style${key}`]}, }}/>}
        }), props.renderers
    ), [className, color, style, props.renderers]);
    // ************************* FOR RENDER ************************* //
    return useMemo(()=>
        <ReactMarkdown {...{
            source:nowSource||'',...options,
            renderers,/*plugins*/...(ref?{ref}:{})}} />
    , [nowSource, renderers, options, ref])
    /*
    return (
        <Provider input="tex">
            <ReactMarkdown {...{plugins, renderers, ...optionState, markdownRef, source:nowSource}} />
        </Provider>
    )
    */
});
export default Mdmd

export * from './components';
export * from './hooks'
export * from './types'
export * from './utils'
