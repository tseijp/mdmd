import {CSSProperties} from 'react'

// ************************* 🎇 FOR MAIN MDMD 🎇 ************************* //

export interface MdmdProps {
    /*----------main----------*/
    md?:any, path?:any,
    source   ?:string,
    renderers?:{[key:string]:any},
    /*----------sub----------*/
    className?:string,
    color    ?:string,
    style    ?:object,
    [key:string]:any,
    //...Object.assign({},...renderersKey.map( k=>({[`className${k}`]?:string}) )),
    //...Object.assign({},...renderersKey.map( k=>({[`color${k}`]?:string}) )),
    //...Object.assign({},...renderersKey.map( k=>({[`style${k}`]?:string}) )),
}

// ************************* 🎇 FOR COMPONENTS 🎇 ************************* //

export interface BaseProps {
    className?: string,
    color    ?: string,
    style    ?: CSSProperties,
    active   ?: boolean,
    [key:string]:any,
}

export interface CodeProps extends BaseProps {
    value   ?:string,
    language?:string,
    inline  ?:boolean,
    dark    ?:boolean,
}
export interface ImageProps extends BaseProps {
    src?:string,
    alt?:string,
    active?:boolean
}
export interface ButtonProps extends BaseProps {
    level ?:number,
    social?:string,
    href  ?:string,
    onClick?:()=>void,
}
export interface LinkProps extends BaseProps {
    social?:string,
    href?:string,
}
export interface CardsProps extends BaseProps {
    columns?:any,
    rows   ?:any,
    argments?:any,
}
export interface TableProps extends BaseProps {
    maxHeight?:string,
    bordered ?:boolean,
    paging   ?:boolean,
    searching?:boolean,
    scrollX  ?:boolean,
    scrollY  ?:boolean,
    small    ?:boolean,
    sorting  ?:boolean,
    striped  ?:boolean,
    columnAlignment?:undefined, //TODO
    indexProps?:any, data?:any  // TODO
}
export interface TablesProps extends BaseProps {
    columns ?: any[],
    rows    ?:any[],
    keys    ?:any[],
    argments?:undefined,
    isPill  ?:boolean
}
// ************************* 📐 FOR MDBOOTSTRAP 📐 ************************* //
export type backgroundColor =
  | 'danger'
  | 'dark'
  | 'default'
  | 'info'
  | 'light'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning';
export type backgroundColorType = { backgroundColor?: backgroundColor };
export type buttonColor =
  | 'amber'
  | 'blue-grey'
  | 'blue'
  | 'brown'
  | 'cyan'
  | 'danger'
  | 'dark-green'
  | 'dark'
  | 'deep-orange'
  | 'deep-purple'
  | 'default'
  | 'elegant'
  | 'green'
  | 'grey'
  | 'indigo'
  | 'info'
  | 'light-blue'
  | 'light-green'
  | 'light'
  | 'lime'
  | 'mdb-color'
  | 'orange'
  | 'pink'
  | 'primary'
  | 'purple'
  | 'secondary'
  | 'success'
  | 'unique'
  | 'warning'
  | 'red'
  | 'yellow';

export type classNameType = { className?: string };
export type color =
  | 'amber'
  | 'blue-grey'
  | 'blue'
  | 'brown'
  | 'cyan'
  | 'danger'
  | 'dark'
  | 'deep-orange'
  | 'deep-purple'
  | 'default'
  | 'green'
  | 'grey'
  | 'indigo'
  | 'info'
  | 'light-blue'
  | 'light-green'
  | 'light'
  | 'lime'
  | 'mdb-color'
  | 'muted'
  | 'orange'
  | 'pink'
  | 'primary'
  | 'purple'
  | 'red'
  | 'secondary'
  | 'success'
  | 'teal'
  | 'warning'
  | 'yellow';
