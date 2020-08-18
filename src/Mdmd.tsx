import React, {FC, useState, useEffect, useMemo, useRef} from 'react';
import ReactMarkdown from 'react-markdown';
import {MdmdProps} from './types'
import * as Renderers from './components';
//const {Provider} = require('react-mathjax');
//const RemarkMathPlugin = require('remark-math');

const renderersKey  = Object.keys(Renderers)
export const Mdmd:FC<MdmdProps> = ({
        md=null, path=null, source='',
        children, className="", color="elegant", style={fontSize:"1rem"}, ...props
    }) => {
    /******************** for props.source ********************/
    const [nowSource, setSource] = useState(source);
    useEffect(()=>{(path||md)&&fetch(path||md).then(r=>r.text()).then(r=>setSource(r)) }, [md,path])
    useEffect(()=>{(source||children)&&setSource(source||String(children))}, [source,children])
    /******************** for optionsRef ********************/
    const optionsRef = useRef(
      [ 'escapeHtml','skipHtml','sourcePos','rawSourcePos','includeNodeIndex',
        'allowedTypes','disallowedTypes','unwrapDisallowed','allowNode','linkTarget',
        'transformLinkUri', 'transformImageUrl', ]
        .filter(name=>name in props).map( name => ({[name]:props[name]}) )
    );
    const renderersRef = useRef(Object.assign( {}, ...renderersKey.map((key)=>{
        const Renderer  = (Renderers as any)[key];
        return {[ key.charAt(0).toLowerCase()+key.slice(1) ] : (props:any) =>
            <Renderer {...{...props,
                className: [className, props[`className${key}`]].filter(c=>c).join(' '),
                color    :     color || props[`color${key}`] ,
                style    : {...style,...props[`style${key}`]}, }}/>}
    }) ));
    // ******************** performance ******************** //
//  const plugins = useMemo(()=>[props.plugin, RemarkMathPlugin]                   , [props.plugin])
    const renderers   = useMemo(()=>({...renderersRef.current, ...props.renderers}), [props.renderers])
    const optionState = useMemo(()=>({...optionsRef.current, ...props.options})    , [props.options])
    const markdownRef = useMemo(()=>props.markdownRef?{ref:props.markdownRef}:{}   , [props.markdownRef])
    return useMemo(()=>
        <ReactMarkdown {...{
            source:nowSource,...optionState, //plugins,
            renderers,       ...markdownRef}} />
    , [nowSource, renderers, optionState,markdownRef])
    /*
    return (
        <Provider input="tex">
            <ReactMarkdown {...{plugins, renderers, ...optionState, markdownRef, source:nowSource}} />
        </Provider>
    )
    */
};
